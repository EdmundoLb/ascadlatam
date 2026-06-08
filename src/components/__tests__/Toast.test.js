import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Toast from '../Toast.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

describe('Toast.vue', () => {
  it('renders nothing when no toast', () => {
    const wrapper = mount(Toast, {
      global: { plugins: [pinia] }
    })
    expect(wrapper.find('.toast').exists()).toBe(false)
  })
})