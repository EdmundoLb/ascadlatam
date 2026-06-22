# Supabase — ASCAD LATAM

Backend de datos para las solicitudes de certificación, los mensajes de contacto y el directorio público de profesionales certificados. Corre en paralelo con Formspree (que se mantiene como respaldo temporal) mientras se valida en producción.

## Esquema
`migrations/0001_init.sql` crea 3 tablas:

- **`certified_professionals`** — lectura pública (`status = 'active'`), sin alta automática desde el sitio. El equipo de ASCAD carga gente certificada a mano desde el Table Editor.
- **`solicitudes`** — guarda cada envío del formulario de `/solicitud`. Inserción pública, sin lectura pública (RLS).
- **`contactos`** — guarda cada envío del formulario de `/contacto`. Mismo esquema de permisos.

## Setup (una sola vez)

1. **SQL**: Supabase Dashboard → SQL Editor → pegar y correr `migrations/0001_init.sql`.
2. **Credenciales del cliente**: Project Settings → API → copiar `Project URL` y `anon public key` → pegarlas en tu `.env` local como `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (ver `.env.example`). La anon key es pública por diseño — lo que protege los datos son las políticas RLS del paso 1, no el secreto de la key.
3. **Resend**: crear cuenta en [resend.com](https://resend.com), verificar el dominio `ascadlatam.org` (Dashboard → Domains) para que los emails no caigan en spam, y generar una API key. Mientras el dominio no esté verificado, podés probar con el remitente de prueba `onboarding@resend.dev`.
4. **Deploy de la Edge Function**:
   ```bash
   npx supabase login                          # una vez, abre el browser
   npx supabase link --project-ref <tu-ref>     # el ref está en la URL del proyecto
   npx supabase functions deploy notify-submission
   npx supabase secrets set RESEND_API_KEY=re_xxxxxxxx
   # opcional, si no usás info@ascadlatam.org o el dominio de prueba:
   npx supabase secrets set RESEND_FROM_EMAIL="ASCAD LATAM <noreply@ascadlatam.org>"
   npx supabase secrets set STAFF_NOTIFICATION_EMAIL=info@ascadlatam.org
   ```
5. **Database Webhooks** (Dashboard → Database → Webhooks → Create a new hook):
   - Uno en `INSERT` sobre `solicitudes`, apuntando a la URL de `notify-submission`.
   - Otro en `INSERT` sobre `contactos`, apuntando a la misma URL.

   Esto es lo que conecta "alguien llena el formulario" con "se manda el email" — sin este paso la función nunca se invoca.

## Qué hace la Edge Function (`functions/notify-submission/index.ts`)
Recibe el payload estándar de un Database Webhook (`{ table, record }`) y manda dos emails por cada fila nueva: uno al equipo (`STAFF_NOTIFICATION_EMAIL`, por defecto `info@ascadlatam.org`) con el detalle completo, y uno de confirmación a la persona que llenó el formulario (`record.email`).

## Cargar profesionales certificados
No hay UI de alta — es deliberado, para que solo el equipo decida quién aparece publicado. Dashboard → Table Editor → `certified_professionals` → Insert row, con `status = 'active'`.
