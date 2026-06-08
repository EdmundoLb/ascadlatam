import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

describe('Router configuration', () => {
  it('creates router with routes', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/certificaciones', component: { template: '<div>Certificaciones</div>' } },
        { path: '/:pathMatch(.*)*', component: { template: '<div>404</div>' } }
      ]
    })
    expect(router).toBeDefined()
  })
})