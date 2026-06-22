import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'ASCAD LATAM | Certificación Internacional en Adicciones' }
  },
  {
    path: '/certificaciones',
    name: 'certificaciones',
    component: () => import('@/views/CertificacionesView.vue'),
    meta: { title: 'Certificaciones | ASCAD LATAM - Consortium Latinoamericano' }
  },
  {
    path: '/solicitud',
    name: 'solicitud',
    component: () => import('@/views/SolicitudView.vue'),
    meta: { title: 'Solicitud de Certificación | ASCAD LATAM' }
  },
  {
    path: '/etica',
    name: 'etica',
    component: () => import('@/views/EticaView.vue'),
    meta: { title: 'Ética y Calidad Profesional | ASCAD LATAM' }
  },
  {
    path: '/ascadlatam',
    name: 'ascadlatam',
    component: () => import('@/views/AscadLatamView.vue'),
    meta: { title: 'ASCAD-LATAM | Nuestra Historia' }
  },
  {
    path: '/formacion',
    name: 'formacion',
    component: () => import('@/views/FormacionView.vue'),
    meta: { title: 'Educación y Formación Continua | ASCAD LATAM' }
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('@/views/ConocimientoView.vue'),
    meta: { title: 'Noticias | ASCAD LATAM' }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/ContactoView.vue'),
    meta: { title: 'Contacto | ASCAD LATAM' }
  },
  {
    path: '/directorio',
    name: 'directorio',
    component: () => import('@/views/DirectorioView.vue'),
    meta: { title: 'Directorio | ASCAD LATAM' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: { title: 'Blog | ASCAD LATAM' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Página no encontrada | ASCAD LATAM' }
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

router.afterEach((to) => {
  document.title = to.meta.title || 'ASCAD LATAM'
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