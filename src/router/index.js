import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'ASCAD LATAM | Certificación Internacional en Adicciones - FLACT, Universidad Gestalt, Aforind' }
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
    path: '/flact',
    name: 'flact',
    component: () => import('@/views/FlactView.vue'),
    meta: { title: 'FLACT - Federación Latinoamericana de Comunidades Terapéuticas | ASCAD LATAM' }
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

export default router