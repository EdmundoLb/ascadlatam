# AGENTS.md - ASCAD LATAM

## Proyecto
Sitio web institucional del **Consorcio Latinoamericano de Certificación en Adicciones**.
Certificación profesional con estándares internacionales TAP 21 y TIP 64.

---

## Stack Tecnológico
- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para routing
- **Pinia** para state management
- **Vite 8** como build tool
- **Vitest** para tests
- **ESLint** para linting

---

## Scripts Disponibles
```bash
npm run dev        # Desarrollo
npm run build      # Build producción
npm run preview    # Preview del build
npm run lint       # Linting
npm run lint:fix   # Auto-fixing lint
npm run test       # Tests
npm run test:ui    # Tests con UI
npm run coverage   # Coverage
```

---

## Estructura del Proyecto
```
src/
├── main.js                      # Entry point
├── App.vue                      # Root component (NavBar + RouterView + FooterBar)
├── assets/css/main.css          # Estilos globales, variables CSS, diseño tokens
├── components/
│   ├── Toast.vue                # Componente de notificaciones toast
│   ├── layout/
│   │   ├── NavBar.vue           # Navegación principal (AZUL OSCURO con texto blanco)
│   │   └── FooterBar.vue        # Pie de página (texto blanco, fondo oscuro)
├── views/
│   ├── HomeView.vue             # Página principal (Hero + About + Path + Aliados + CTA)
│   ├── CertificacionesView.vue  # Certificaciones (comparativa + detalles expandibles + FAQ)
│   ├── SolicitudView.vue        # Formulario de solicitud de certificación
│   ├── DirectorioView.vue       # Directorio de profesionales certificados
│   ├── BlogView.vue             # Blog y noticias
│   ├── ContactoView.vue         # Formulario de contacto (Formspree)
│   ├── FlactView.vue            # ELIMINADO - Ver EticaView.vue
│   ├── EticaView.vue            # Página de Ética y Calidad Profesional
│   ├── AliadosView.vue          # Página de aliados estratégicos
│   └── NotFoundView.vue         # Página 404
├── stores/
│   └── certificaciones.js       # Pinia store (origins, levels, stats)
├── router/
│   └── index.js                 # Configuración de rutas
└── data/
    └── certificaciones.js       # Datos estáticos (levels, origins, stats)
```

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
| `/solicitud` | SolicitudView (query param: ?nivel=OST) |
| `/directorio` | DirectorioView |
| `/blog` | BlogView |
| `/contacto` | ContactoView |
| `/flact` | ELIMINADO |
| `/etica` | EticaView |
| `/aliados` | AliadosView |

---

## Imágenes
```
images/
├── LOGO.png      # Logo antiguo
├── LOGO2.png     # Logo PRINCIPAL (usar este)
├── ASCAD.png     # Logo ASCAD
├── FLACT.png     # ELIMINADO
├── AFORING.jpg   # Logo Aforind
```

**Logo principal**: NavBar y FooterBar importan `LOGO2.png`.

---

## Configuración Importante

### NavBar.vue
- **Estilo**: Fondo azul oscuro `--primary` (#0a2540), texto blanco
- **Logo**: Importa `LOGO2.png`, borde blanco, fondo blanco
- **Brand text**: "ASCAD-LATAM" en blanco
- **Links de navegación**: Texto blanco con hover rgba(255,255,255,0.1)
- **Mobile menu**: Fondo `--primary-dark`, texto blanco

### FooterBar.vue
- **Estilo**: Fondo oscuro `--text` (#0a1628), texto blanco
- **Logo**: Importa `LOGO2.png`
- **Descripción**: "Consorcio Latinoamericano de Certificación en Adicciones"
- **Redes sociales**: Botones con hover `--accent`

### CertificacionesView.vue
- Las competencias se muestran por **ejes de formación** (Saber Conocer, Saber Hacer, Saber Ser)
- Cada cert tiene un `cert-body` con `max-height: 3000px` cuando está expandido
- Los botones "Aplicar ahora" y "Más información" aparecen al expandir cada cert

### HomeView.vue - Hero
- Badge: "Estándares Internacionales · TAP 21 y TIP 64"
- Título: "Consorcio Latinoamericano de Certificación en Adicciones"
- Descripción menciona TAP 21, TIP 64, y los tres ejes: Saber Conocer, Saber Hacer, Saber Ser

---

## Variables de Entorno (.env)
```env
VITE_FORMSPREE_CONTACT_ID=id_para_formulario_contacto
VITE_FORMSPREE_SOLICITUD_ID=id_para_formulario_solicitud
```

---

## Errores Conocidos y Soluciones

### `certs` is not defined
- **Solución**: El array `certs` debe estar definido en el `<script setup>` de `SolicitudView.vue` con los 6 niveles de certificación.

### Botones no visibles en CertificacionesView
- **Problema**: `max-height: 1200px` en `.cert-body.is-open` era insuficiente.
- **Solución**: Cambiar a `max-height: 3000px`.

---

## Dependencias Principales
```json
{
  "vue": "^3.4.0",
  "vue-router": "^4.3.0",
  "pinia": "^2.1.0"
}
```

---

## Notas de Desarrollo
- Las vistas usan `<script setup>` con Composition API
- Los datos de certificaciones vienen del Pinia store `useCertificacionesStore`
- Las imágenes se importan con paths directos desde `/images/`
- El router usa rutas con parámetros query (ej: `/solicitud?nivel=CCAAD III`)