import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StepIndicator from '../StepIndicator.vue'

const steps = [
  { id: 1, label: 'Datos' },
  { id: 2, label: 'Documentos' },
  { id: 3, label: 'Pago' }
]

describe('StepIndicator.vue', () => {
  it('renders a label for each step', () => {
    const wrapper = mount(StepIndicator, { props: { steps, currentStep: 1 } })
    expect(wrapper.findAll('.step-label').map((l) => l.text())).toEqual(['Datos', 'Documentos', 'Pago'])
  })

  it('marks past steps as completed and the current step as active', () => {
    const wrapper = mount(StepIndicator, { props: { steps, currentStep: 2 } })
    const items = wrapper.findAll('.step-item')
    expect(items[0].classes()).toContain('is-completed')
    expect(items[1].classes()).toContain('is-active')
    expect(items[2].classes()).not.toContain('is-active')
    expect(items[2].classes()).not.toContain('is-completed')
  })

  it('emits step-click when clicking a completed step while clickable', async () => {
    const wrapper = mount(StepIndicator, { props: { steps, currentStep: 3, clickable: true } })
    await wrapper.findAll('.step-item')[0].trigger('click')
    expect(wrapper.emitted('step-click')).toEqual([[1]])
  })

  it('does not emit step-click for the current or a future step', async () => {
    const wrapper = mount(StepIndicator, { props: { steps, currentStep: 2, clickable: true } })
    await wrapper.findAll('.step-item')[1].trigger('click')
    await wrapper.findAll('.step-item')[2].trigger('click')
    expect(wrapper.emitted('step-click')).toBeUndefined()
  })

  it('does not emit step-click when clickable is false', async () => {
    const wrapper = mount(StepIndicator, { props: { steps, currentStep: 3, clickable: false } })
    await wrapper.findAll('.step-item')[0].trigger('click')
    expect(wrapper.emitted('step-click')).toBeUndefined()
  })
})
