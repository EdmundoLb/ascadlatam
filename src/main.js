import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/css/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(
        (registration) => { console.log('SW registered:', registration.scope) },
        (error) => { console.log('SW registration failed:', error) }
      )
    })
  } else {
    // Un service worker cacheando /dev rompe el WebSocket de HMR de Vite y puede
    // servir chunks JS viejos junto a los nuevos. Se desregistra cualquier SW
    // activo de una sesión previa para que el dev server funcione normal.
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister())
    })
  }
}
