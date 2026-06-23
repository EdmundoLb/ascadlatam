# Supabase — ASCAD LATAM

Backend de datos para las solicitudes de certificación, los mensajes de contacto y el directorio público de profesionales certificados. Corre en paralelo con Formspree (que se mantiene como respaldo temporal/permanente a pedido del cliente) mientras se valida en producción.

**Estado actual (2026-06-22): confirmado funcionando de punta a punta en producción** (`ascadlatam.org`) — insert → trigger → Edge Function → Resend → email recibido, en ambos formularios. Dominio `ascadlatam.org` verificado en Resend. Configuración real en uso:
- `RESEND_FROM_EMAIL` = `ASCAD LATAM <notificaciones@ascadlatam.org>`
- `STAFF_NOTIFICATION_EMAIL` = `ascadcr@gmail.com` (no el default `info@ascadlatam.org` — así lo pidió el cliente)
- Formspree sigue mandando su propia notificación a la cuenta personal con la que se creó el form (no es un bug, es solo una copia de respaldo redundante; no le llega a nadie más ni duplica nada para el solicitante).

## Esquema
`migrations/0001_init.sql` crea 3 tablas:

- **`certified_professionals`** — lectura pública (`status = 'active'`), sin alta automática desde el sitio. El equipo de ASCAD carga gente certificada a mano desde el Table Editor.
- **`solicitudes`** — guarda cada envío del formulario de `/solicitud`. Inserción pública, sin lectura pública (RLS).
- **`contactos`** — guarda cada envío del formulario de `/contacto`. Mismo esquema de permisos.

## Setup (una sola vez)

Correr las migraciones en orden (`0001` a `0005`, todas en SQL Editor → pegar y correr):

1. **`0001_init.sql`**: crea las 3 tablas + RLS.
2. **Credenciales del cliente**: Project Settings → API → copiar `Project URL` y `anon public key` → pegarlas en tu `.env` local como `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (ver `.env.example`). La anon key es pública por diseño — lo que protege los datos son las políticas RLS, no el secreto de la key.
3. **Resend**: crear cuenta en [resend.com](https://resend.com) y generar una API key. **Mientras el dominio no esté verificado, el remitente de prueba `onboarding@resend.dev` SOLO entrega emails a la dirección con la que te registraste en Resend** — ni el equipo ni los solicitantes reales van a recibir nada hasta verificar el dominio (Dashboard → Domains → Add Domain `ascadlatam.org`, agregar los registros SPF/DKIM que pida en el DNS del dominio). Esto es obligatorio antes de lanzar a producción, no opcional.
4. **Deploy de la Edge Function** (Dashboard → Edge Functions → New function → nombre `notify-submission` → pegar el contenido de `functions/notify-submission/index.ts`):
   - Edge Functions → `notify-submission` → Secrets, agregar:
     - `RESEND_API_KEY` (la API key de Resend)
     - `WEBHOOK_SECRET` (un string largo y random que inventes — el mismo valor va en el paso 5)
     - opcional: `RESEND_FROM_EMAIL` (usar un email del dominio verificado una vez que esté listo), `STAFF_NOTIFICATION_EMAIL` si no usás el default `info@ascadlatam.org`.
5. **`0002_notify_trigger.sql`** (en vez de "Database Webhooks" del dashboard — esa pantalla pide elegir una función de Postgres ya creada, no permite apuntar directo a una URL):
   - Antes, correr **una sola vez**: `select vault.create_secret('EL-MISMO-STRING-RANDOM-DEL-PASO-4', 'webhook_shared_secret');`
   - Crea la extensión `pg_net`, la función `notify_submission()` (llama a la Edge Function por HTTP) y los triggers `AFTER INSERT` en `solicitudes`/`contactos`.
6. **`0003_fix_insert_policies.sql`**: recrea las políticas de insert explícitas `to anon` — necesario, las políticas `to public` implícitas de `0001` no las tomaba PostgREST en este proyecto.
7. **`0005_fix_trigger_auth_header.sql`**: agrega el header `Authorization: Bearer <anon key>` a la llamada del trigger — el gateway de Supabase delante de las Edge Functions exige un JWT válido ahí (chequeo de plataforma, separado del `x-webhook-secret` propio).

Validado de punta a punta con inserts de prueba reales: trigger → Edge Function → Resend → email recibido. (`0004`/`0006` fueron solo para diagnosticar este setup, no son necesarios en un proyecto nuevo.)

## Variables de entorno en Vercel — gotcha importante
Este es un sitio estático (Vite SPA): las variables `VITE_*` se "hornean" dentro del bundle **en el momento del build**, no se leen en runtime. Por eso, en Vercel:
- Hay que agregarlas en **Settings → Environment Variables**, marcando **Production** (no alcanza con tenerlas solo en `.env` local — eso nunca llega al servidor).
- **No marcarlas como "Sensitive"** — ese modo no las deja disponibles para el proceso de build estático, así que Vite las ve como `undefined` aunque la variable "exista" en el dashboard. Usarlas como variables normales (ninguna de las 4 — anon key, IDs de Formspree — es secreta de todos modos).
- Después de agregar/cambiar una, hay que **Redeploy** explícito (Deployments → "..." → Redeploy) — Vercel no reconstruye builds ya hechos solo por cambiar una env var.
- Si algo no toma el valor esperado, confirmarlo inspeccionando el bundle ya desplegado en vez de confiar en lo que muestra el dashboard: `curl` el chunk JS de la vista en cuestión y buscar el string esperado (anon key, form ID) — los nombres de archivo de Vite son hash de contenido, así que un valor distinto da un hash distinto.

## Qué hace la Edge Function (`functions/notify-submission/index.ts`)
Recibe `{ table, record }` desde el trigger de Postgres (valida primero el header `x-webhook-secret`) y manda dos emails por cada fila nueva: uno al equipo (`STAFF_NOTIFICATION_EMAIL`, por defecto `info@ascadlatam.org`) con el detalle completo, y uno de confirmación a la persona que llenó el formulario (`record.email`).

## Cargar profesionales certificados
No hay UI de alta — es deliberado, para que solo el equipo decida quién aparece publicado. Dashboard → Table Editor → `certified_professionals` → Insert row, con `status = 'active'`.
