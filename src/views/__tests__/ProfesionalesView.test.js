import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import ProfesionalesView from '../ProfesionalesView.vue'
import i18n from '@/i18n'

// Independiente de si .env tiene credenciales reales de Supabase: este test
// cubre específicamente el estado vacío cuando el cliente no está configurado.
vi.mock('@/lib/supabase', () => ({ supabase: null }))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/profesionales', component: ProfesionalesView },
    { path: '/solicitud', component: { template: '<div>Solicitud</div>' } }
  ]
})

describe('ProfesionalesView.vue - sección de profesionales certificados', () => {
  it('muestra el estado vacío cuando Supabase no está configurado', async () => {
    const wrapper = mount(ProfesionalesView, {
      global: { plugins: [createPinia(), router, i18n] }
    })
    await flushPromises()

    expect(wrapper.find('.certified-empty').exists()).toBe(true)
    expect(wrapper.find('.certified-grid').exists()).toBe(false)
    expect(wrapper.find('.certified-empty a, .certified-empty .btn').attributes('href')).toBe('/solicitud')
  })
})
