import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '../layout/NavBar.vue'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/certificaciones', component: { template: '<div>Certificaciones</div>' } },
    { path: '/directorio', component: { template: '<div>Directorio</div>' } },
    { path: '/blog', component: { template: '<div>Blog</div>' } },
    { path: '/contacto', component: { template: '<div>Contacto</div>' } },
    { path: '/solicitud', component: { template: '<div>Solicitud</div>' } }
  ]
})

describe('NavBar.vue', () => {
  it('renders the brand name', () => {
    const wrapper = mount(NavBar, {
      global: { plugins: [router, i18n] }
    })
    expect(wrapper.find('strong').text()).toContain('ASCAD')
  })

  it('has navigation links', () => {
    const wrapper = mount(NavBar, {
      global: { plugins: [router, i18n] }
    })
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const wrapper = mount(NavBar, {
      global: { plugins: [router, i18n] }
    })
    const mobileMenu = wrapper.find('.mobile-menu')
    expect(mobileMenu.classes()).not.toContain('open')

    await wrapper.find('.hamburger').trigger('click')
    expect(mobileMenu.classes()).toContain('open')
  })
})