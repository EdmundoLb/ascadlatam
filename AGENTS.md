# AGENTS.md - ASCAD LATAM

## Proyecto
Sitio web institucional del **Consorcio Latinoamericano de Certificación en Adicciones**.
Certificación profesional con estándares internacionales TAP 21 y TIP 64, disponible en español y portugués.

---

## Stack Tecnológico
- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para routing
- **Pinia** para state management
- **vue-i18n** para i18n (es/pt) — ver `src/i18n/`
- **Vite** como build tool
- **Vitest** + **@vue/test-utils** para tests unitarios
- **Playwright** para tests E2E
- **ESLint** + **Prettier** + **Husky** + **commitlint**

---

## Scripts Disponibles
```bash
npm run dev        # Desarrollo
npm run build      # Build producción (con typecheck)
npm run preview    # Preview del build
npm run lint       # Linting
npm run lint:fix   # Auto-fixing lint
npm run typecheck  # vue-tsc --noEmit
npm run test       # Tests unitarios
npm run test:ui    # Tests con UI
npm run test:coverage   # Coverage
npm run test:e2e   # Tests E2E (Playwright)
```

---

## Estructura del Proyecto
```
src/
├── main.js                      # Entry point (Pinia + router + i18n)
├── App.vue                      # Root component (NavBar + RouterView + FooterBar)
├── assets/css/main.css          # Estilos globales, variables CSS, diseño tokens
├── i18n/
│   ├── index.js                 # Config de vue-i18n, detecta locale guardado o del browser
│   └── locales/{es,pt}.json     # Diccionarios de traducción
├── components/
│   ├── Toast.vue                # Notificaciones toast (con íconos por tipo)
│   ├── layout/
│   │   ├── NavBar.vue           # Navegación principal (AZUL OSCURO con texto blanco) + selector de idioma
│   │   └── FooterBar.vue        # Pie de página (texto blanco, fondo oscuro)
│   ├── forms/
│   │   └── StepIndicator.vue    # Indicador de pasos (usado en SolicitudView)
│   └── ui/
│       ├── LazyImage.vue        # Imagen con lazy loading
│       └── Pagination.vue       # Paginación (usada en BlogView)
├── composables/
│   ├── toast.js                 # Lógica de notificaciones
│   └── useLazyLoad.js           # Lazy loading con IntersectionObserver
├── views/
│   ├── HomeView.vue             # Página principal (Hero + About + Path + CTA)
│   ├── CertificacionesView.vue  # Certificaciones (comparativa + detalles expandibles + FAQ)
│   ├── SolicitudView.vue        # Formulario de solicitud de certificación (multi-step)
│   ├── DirectorioView.vue       # Directorio de profesionales certificados
│   ├── BlogView.vue             # Blog institucional (paginado)
│   ├── ContactoView.vue         # Formulario de contacto (Formspree)
│   ├── EticaView.vue            # Ética y Calidad Profesional
│   ├── AscadLatamView.vue       # Nuestra Historia
│   ├── FormacionView.vue        # Educación y formación continua
│   ├── ConocimientoView.vue     # Centro de Conocimiento (biblioteca, infografías, artículos, FAQ) — ruta /noticias
│   └── NotFoundView.vue         # Página 404
├── stores/
│   └── certificaciones.js       # Pinia store (origins, levels, stats, certificaciones completas, form data)
├── router/
│   └── index.js                 # Configuración de rutas
└── data/
    ├── certificaciones.js       # Niveles, países de origen, stats, íconos SVG por nivel
    ├── certificacionesFull.js   # Contenido completo por nivel (competencias, ejes, perfil)
    ├── solicitudForms.js        # Configuración del formulario de solicitud derivada de certificacionesFull
    └── blog.js                  # Posts del blog
```

> Nota: no existen vistas `FlactView` ni `AliadosView` — fueron reemplazadas por `EticaView` y diluidas en el contenido institucional actual.

---

## Diseño - Variables CSS Principales
```css
--primary: #0a2540         /* Azul oscuro - usado en Navbar y Footer */
--primary-dark: #061a2e
--primary-mid: #1a3a5c
--accent: #c9a84c          /* Dorado - usado para badges, highlights */
--accent-dark: #a68939
--accent-light: #faf6eb
--text: #0a1628
--nav-height: 72px
```

---

## Niveles de Certificación (6 niveles)
| Código | Nombre | Fee USD |
|--------|--------|---------|
| OST | Operador Socio-Terapéutico | $30 |
| EPR | Entrenador de Pares en Recuperación | $30 |
| CCAAD I | Consejero en Adicciones Nivel I | $50 |
| CCAAD II | Consejero en Adicciones Nivel II | $75 |
| CCAAD III | Consejero en Adicciones Nivel III | $100 |
| CCAAD IV | Supervisor Clínico – Nivel IV | $125 |

---

## Competencias por Eje de Formación
Cada nivel de certificación desarrolla tres ejes:
- **Saber Conocer**: Dominio teórico y comprensión de los ejes de formación
- **Saber Hacer**: Aplicación práctica de protocolos, metodologías y competencias profesionales
- **Saber Ser**: Ética, liderazgo, responsabilidad social y desarrollo humano

---

## Rutas del Sitio
| Ruta | Vista |
|------|-------|
| `/` | HomeView |
| `/certificaciones` | CertificacionesView |
| `/solicitud` | SolicitudView (query param: `?nivel=OST`) |
| `/etica` | EticaView |
| `/ascadlatam` | AscadLatamView |
| `/formacion` | FormacionView |
| `/noticias` | ConocimientoView |
| `/contacto` | ContactoView |
| `/directorio` | DirectorioView |
| `/blog` | BlogView |
| `*` | NotFoundView |

---

## Internacionalización (i18n)
- `vue-i18n` en modo `legacy: false` (Composition API, `useI18n()` / `$t()` en templates).
- Locale por defecto: el guardado en `localStorage.locale`, o el del navegador si es `es`/`pt`, o `es` como fallback.
- Las claves de traducción viven en `src/i18n/locales/es.json` y `pt.json` — mantenerlas espejadas en estructura.
- **Tests que montan componentes con `$t()` deben incluir el plugin `i18n`** en `global.plugins` (ver `src/components/__tests__/NavBar.test.js`), si no `$t` queda `undefined` y el test falla.

---

## Imágenes
- Las fuentes originales (PNG pesados) viven en `images/`; las versiones optimizadas para producción en `images/optimized/*.webp`, generadas con `optimize-images.mjs` (usa `sharp`).
- **Siempre importar las imágenes con `import x from '/images/optimized/archivo.webp'`** dentro del `<script setup>`, nunca como string literal (`image: '/images/foo.png'`) — los strings literales no pasan por el bundler y `images/` no es la carpeta `public/`, así que romperían en producción aunque funcionen en `npm run dev`.
- Logo principal: `LOGO_ASCAD10.webp` (importado en NavBar y FooterBar).
- Al agregar una imagen nueva, sumarla al array `images` en `optimize-images.mjs` y correr `node optimize-images.mjs`.

---

## Configuración Importante

### NavBar.vue
- **Estilo**: Fondo azul oscuro `--primary` (#0a2540), texto blanco
- **Logo**: Importa `LOGO_ASCAD10.webp` desde `images/optimized/`
- **Selector de idioma**: cambia `locale` de vue-i18n y lo persiste en `localStorage`
- **Mobile menu**: Fondo `--primary-dark`, texto blanco

### FooterBar.vue
- **Estilo**: Fondo oscuro `--text` (#0a1628), texto blanco
- **Descripción**: "Consorcio Latinoamericano de Certificación en Adicciones"
- **Redes sociales**: Botones con hover `--accent`

### CertificacionesView.vue
- Las competencias se muestran por **ejes de formación** (Saber Conocer, Saber Hacer, Saber Ser)
- Cada cert tiene un `cert-body` con `max-height: 3000px` cuando está expandido
- Los botones "Aplicar ahora" y "Más información" aparecen al expandir cada cert

### SolicitudView.vue
- Flujo multi-step con `StepIndicator.vue`
- Los datos de cada certificación para el formulario vienen de `data/solicitudForms.js` (derivado de `certificacionesFull.js`)

### v-html
- `vue/no-v-html` está deshabilitado puntualmente en `HomeView.vue`, `CertificacionesView.vue` y `ConocimientoView.vue` (ver `eslint.config.js`) porque ahí solo se renderizan SVGs propios y strings de los locales — nunca contenido de usuario o de una API externa. Si se agrega contenido dinámico/externo en esas vistas, sanitizarlo antes de usar `v-html`.

---

## Variables de Entorno (.env)
```env
VITE_FORMSPREE_CONTACT_ID=id_para_formulario_contacto
VITE_FORMSPREE_SOLICITUD_ID=id_para_formulario_solicitud
```

---

## Errores Conocidos y Soluciones

### `$t is not a function` en tests
- **Causa**: el componente usa `$t()`/`useI18n()` pero el wrapper de test no instaló el plugin i18n.
- **Solución**: agregar el `i18n` exportado por `src/i18n/index.js` a `global.plugins` al montar con `@vue/test-utils`.

### Botones no visibles en CertificacionesView
- **Problema**: `max-height: 1200px` en `.cert-body.is-open` era insuficiente.
- **Solución**: Cambiar a `max-height: 3000px`.

---

## Dependencias Principales
```json
{
  "vue": "^3.4.0",
  "vue-router": "^4.3.0",
  "pinia": "^2.1.0",
  "vue-i18n": "^9.14.5"
}
```

---

## Notas de Desarrollo
- Las vistas usan `<script setup>` con Composition API.
- Los datos de certificaciones vienen del Pinia store `useCertificacionesStore`.
- El router usa rutas con parámetros query (ej: `/solicitud?nivel=CCAAD III`).
- Deploy automático a Vercel vía GitHub Actions al pushear a `main` — ver `DEPLOY.md`.
