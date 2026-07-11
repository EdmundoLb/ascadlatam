import { createRouter, createWebHistory } from 'vue-router'
import { trackPageview } from '@/composables/analytics.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'ASCAD LATAM | Certificación Internacional en Adicciones',
      description: 'Consorcio Latinoamericano de Certificación en Adicciones. Certificaciones OST, EPR, CCAAD I-IV con estándares internacionales TAP 21 y TIP 64, en español y portugués.'
    }
  },
  {
    path: '/certificaciones',
    name: 'certificaciones',
    component: () => import('@/views/CertificacionesView.vue'),
    meta: {
      title: 'Certificaciones | ASCAD LATAM - Consortium Latinoamericano',
      description: 'Conocé los 6 niveles de certificación profesional en adicciones de ASCAD LATAM: OST, EPR y CCAAD I a IV, con competencias, ejes de formación y perfil profesional de cada nivel.'
    }
  },
  {
    path: '/solicitud',
    name: 'solicitud',
    component: () => import('@/views/SolicitudView.vue'),
    meta: {
      title: 'Solicitud de Certificación | ASCAD LATAM',
      description: 'Iniciá tu solicitud de certificación profesional en adicciones con ASCAD LATAM. Elegí tu nivel (OST, EPR, CCAAD I-IV) y completá el formulario en pocos pasos.'
    }
  },
  {
    path: '/etica',
    name: 'etica',
    component: () => import('@/views/EticaView.vue'),
    meta: {
      title: 'Ética y Calidad Profesional | ASCAD LATAM',
      description: 'Estándares éticos y de calidad profesional que rigen la certificación y el ejercicio de los profesionales certificados por ASCAD LATAM.'
    }
  },
  {
    path: '/ascadlatam',
    name: 'ascadlatam',
    component: () => import('@/views/AscadLatamView.vue'),
    meta: {
      title: 'ASCAD-LATAM | Nuestra Historia',
      description: 'Conocé la historia, misión y alianzas institucionales del Consorcio Latinoamericano de Certificación en Adicciones (ASCAD LATAM).'
    }
  },
  {
    path: '/formacion',
    name: 'formacion',
    component: () => import('@/views/FormacionView.vue'),
    meta: {
      title: 'Educación y Formación Continua | ASCAD LATAM',
      description: 'Programas de educación y formación continua para profesionales en adicciones en América Latina, alineados a los estándares de certificación de ASCAD LATAM.'
    }
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('@/views/ConocimientoView.vue'),
    meta: {
      title: 'Noticias | ASCAD LATAM',
      description: 'Centro de conocimiento de ASCAD LATAM: biblioteca, infografías, artículos y preguntas frecuentes sobre certificación profesional en adicciones.'
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/ContactoView.vue'),
    meta: {
      title: 'Contacto | ASCAD LATAM',
      description: 'Contactate con ASCAD LATAM para consultas sobre el proceso de certificación, requisitos por nivel, verificación de credenciales o alianzas institucionales.'
    }
  },
  {
    path: '/directorio',
    name: 'directorio',
    component: () => import('@/views/DirectorioView.vue'),
    meta: {
      title: 'Cobertura Regional | ASCAD LATAM',
      description: 'Países miembros y delegados regionales de ASCAD LATAM en América Latina. El listado de profesionales certificados está disponible en la sección de Profesionales.'
    }
  },
  {
    path: '/profesionales',
    name: 'profesionales',
    component: () => import('@/views/ProfesionalesView.vue'),
    meta: {
      title: 'Profesionales Certificados | ASCAD LATAM',
      description: 'Conocé a los profesionales certificados por ASCAD LATAM en toda Latinoamérica, verificados y con certificación vigente.'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: {
      title: 'Blog | ASCAD LATAM',
      description: 'Blog institucional de ASCAD LATAM con artículos sobre certificación profesional, adicciones y formación continua en América Latina.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Página no encontrada | ASCAD LATAM',
      description: 'La página que buscás no existe o fue movida.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

function setMetaContent(selector, content) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

router.afterEach((to) => {
  document.title = to.meta.title || 'ASCAD LATAM'

  const description = to.meta.description
  if (description) {
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[name="twitter:description"]', description)
  }

  const canonicalUrl = `https://ascadlatam.org${to.path}`
  setMetaContent('meta[property="og:url"]', canonicalUrl)
  setMetaContent('meta[property="og:title"]', to.meta.title || 'ASCAD LATAM')
  setMetaContent('meta[name="twitter:title"]', to.meta.title || 'ASCAD LATAM')

  const canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl)

  trackPageview(to.fullPath, to.meta.title)
})

// Tras un deploy, los chunks lazy de rutas vistas en una pestaña vieja
// quedan apuntando a archivos que ya no existen en el servidor. En vez de
// dejar la navegación colgada, forzamos una recarga completa a la ruta
// destino para que tome los archivos nuevos.
router.onError((error, to) => {
  const chunkLoadFailed = /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i
  if (chunkLoadFailed.test(error.message)) {
    window.location.href = to.fullPath
  }
})

export default router