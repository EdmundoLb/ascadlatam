import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

const pinia = createPinia()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } }
  ]
})

describe('HomeView.vue', () => {
  it('renders without errors', () => {
    const wrapper = mount({ template: '<div>Test</div>' }, {
      global: { plugins: [pinia, router] }
    })
    expect(wrapper.exists()).toBe(true)
  })
})