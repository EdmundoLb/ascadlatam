import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import CertificacionesView from '../CertificacionesView.vue'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/certificaciones', component: CertificacionesView },
    { path: '/solicitud', component: { template: '<div>Solicitud</div>' } }
  ]
})

describe('CertificacionesView.vue - sección de profesionales certificados', () => {
  it('muestra el estado vacío cuando Supabase no está configurado', async () => {
    const wrapper = mount(CertificacionesView, {
      global: { plugins: [createPinia(), router, i18n] }
    })
    await flushPromises()

    expect(wrapper.find('.certified-empty').exists()).toBe(true)
    expect(wrapper.find('.certified-grid').exists()).toBe(false)
    expect(wrapper.find('.certified-empty a, .certified-empty .btn').attributes('href')).toBe('/solicitud')
  })
})
