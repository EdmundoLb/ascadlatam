# ASCAD LATAM

Sitio institucional del **Consorcio Latinoamericano de Certificación en Adicciones**. Certificación profesional con estándares internacionales TAP 21 y TIP 64, disponible en español y portugués.

## Stack Tecnológico

- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para routing
- **Pinia** para state management
- **vue-i18n** para internacionalización (es/pt)
- **Supabase** (Postgres + Edge Functions) para solicitudes, contacto y el directorio de profesionales certificados — ver `supabase/README.md`. Formspree se mantiene como respaldo en paralelo.
- **Vite** como build tool
- **Vitest** + **@vue/test-utils** para tests unitarios
- **Playwright** para tests E2E y auditoría de accesibilidad
- **ESLint** + **Prettier** + **Husky** + **commitlint** para calidad de código
- Service Worker para soporte PWA básico (cache de assets estáticos)

## Scripts disponibles

```bash
npm run dev              # Desarrollo
npm run build            # Build de producción (con typecheck)
npm run build:no-check   # Build sin typecheck (usado en CI de accesibilidad)
npm run preview          # Preview del build

npm run lint             # Linting
npm run lint:fix         # Auto-fix de lint
npm run typecheck        # Chequeo de tipos (vue-tsc)

npm run test             # Tests unitarios (Vitest)
npm run test:ui          # Tests unitarios con UI
npm run test:coverage    # Coverage
npm run test:e2e         # Tests E2E (Playwright)
npm run test:e2e:ui      # Tests E2E con UI
npm run test:e2e:debug   # Tests E2E en modo debug

npm run test:all         # typecheck + lint + test + test:e2e
```

## Estructura del proyecto

```
src/
├── main.js                      # Entry point (registra Pinia, router e i18n)
├── App.vue                      # Root component (NavBar + RouterView + FooterBar)
├── assets/css/main.css          # Estilos globales y variables CSS
├── i18n/
│   ├── index.js                 # Configuración de vue-i18n (es/pt)
│   └── locales/{es,pt}.json     # Diccionarios de traducción
├── components/
│   ├── Toast.vue                # Notificaciones toast
│   ├── layout/
│   │   ├── NavBar.vue           # Navegación principal + selector de idioma
│   │   └── FooterBar.vue        # Pie de página
│   ├── forms/
│   │   └── StepIndicator.vue    # Indicador de pasos para SolicitudView
│   └── ui/
│       ├── LazyImage.vue        # Imagen con lazy loading
│       └── Pagination.vue       # Paginación para BlogView
├── composables/
│   ├── toast.js                 # Lógica de notificaciones
│   └── useLazyLoad.js           # Lazy loading con IntersectionObserver
├── views/                       # Ver tabla de rutas abajo
├── stores/
│   └── certificaciones.js       # Pinia store (niveles, certificaciones, stats)
├── router/
│   └── index.js                 # Configuración de rutas
└── data/
    ├── certificaciones.js       # Niveles, países de origen, stats, íconos
    ├── certificacionesFull.js   # Contenido completo por nivel de certificación
    ├── solicitudForms.js        # Configuración del formulario de solicitud
    └── blog.js                  # Posts del blog
```

## Rutas

| Ruta | Vista | Descripción |
|------|-------|--------------|
| `/` | `HomeView` | Página de inicio |
| `/certificaciones` | `CertificacionesView` | Comparativa de certificaciones, detalles expandibles, FAQ |
| `/solicitud` | `SolicitudView` | Formulario de solicitud de certificación (`?nivel=OST`) |
| `/etica` | `EticaView` | Ética y calidad profesional |
| `/ascadlatam` | `AscadLatamView` | Nuestra historia |
| `/formacion` | `FormacionView` | Educación y formación continua |
| `/noticias` | `ConocimientoView` | Centro de conocimiento (biblioteca, infografías, artículos, FAQ) |
| `/contacto` | `ContactoView` | Formulario de contacto (Formspree) |
| `/directorio` | `DirectorioView` | Directorio de profesionales certificados |
| `/blog` | `BlogView` | Blog institucional |
| `*` | `NotFoundView` | Página 404 |

## Variables de entorno

Crear un archivo `.env` en la raíz (ver `.env.example`):

```env
VITE_FORMSPREE_CONTACT_ID=tu_contact_form_id
VITE_FORMSPREE_SOLICITUD_ID=tu_solicitud_form_id
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX  # opcional, Google Analytics 4
```

Setup completo de Supabase (esquema SQL, Edge Function, Resend, webhooks) en `supabase/README.md`.

## Calidad de código

- **Husky + lint-staged**: corre ESLint y Prettier sobre los archivos staged antes de cada commit.
- **commitlint**: exige Conventional Commits (`feat:`, `fix:`, `docs:`, etc. — ver `commitlint.config.js`).
- **CI** (`.github/workflows/ci.yml`): lint, typecheck, tests unitarios con coverage, tests E2E (en PRs) y build. Valida cada push/PR; el deploy a Vercel corre aparte, por su integración nativa de Git.
- **Accessibility audit** (`.github/workflows/accessibility.yml`): corre semanalmente contra el build de producción.

## Deployment

Ver `DEPLOY.md`. La vía oficial es deploy automático a Vercel por su integración nativa de Git al hacer push a `main`; también documenta una alternativa self-hosted con Nginx.

## Licencia

Privado - ASCAD LATAM
