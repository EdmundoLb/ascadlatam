# ASCAD LATAM

Certificación Internacional en Adicciones - Sitio web institucional.

## Stack Tecnológico

- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para routing
- **Pinia** para state management
- **Vite 5** como build tool

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Auto-fixing lint
npm run lint:fix

# Tests
npm run test

# Tests con UI
npm run test:ui

# Coverage
npm run test:coverage
```

## Estructura del Proyecto

```
src/
├── main.js              # Entry point
├── App.vue              # Root component
├── assets/
│   └── css/
│       └── main.css     # Estilos globales y variables CSS
├── components/
│   └── layout/
│       ├── NavBar.vue   # Navegación principal
│       └── FooterBar.vue # Pie de página
├── views/
│   ├── HomeView.vue         # Página principal
│   ├── CertificacionesView.vue  # Certificaciones
│   ├── SolicitudView.vue   # Formulario de solicitud
│   ├── DirectorioView.vue   # Directorio de certificados
│   ├── BlogView.vue         # Blog/Noticias
│   └── ContactoView.vue    # Formulario de contacto
├── stores/
│   └── certificaciones.js   # Pinia store
├── router/
│   └── index.js            # Configuración de rutas
└── data/
    └── certificaciones.js   # Datos estáticos
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/certificaciones` | Listado de certificaciones |
| `/solicitud` | Formulario de solicitud |
| `/directorio` | Directorio de profesionales certificados |
| `/blog` | Blog y noticias |
| `/contacto` | Formulario de contacto |

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_FORMSPREE_CONTACT_ID=tu_contact_form_id
VITE_FORMSPREE_SOLICITUD_ID=tu_solicitud_form_id
```

## Deployment

Ver `DEPLOY.md` para instrucciones detalladas de deploy en DigitalOcean.

## Licencia

Privado - ASCAD LATAM