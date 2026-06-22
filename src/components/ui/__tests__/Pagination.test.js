import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '../Pagination.vue'

describe('Pagination.vue', () => {
  it('does not render when there is a single page', () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 1, totalPages: 1 }
    })
    expect(wrapper.find('.pagination').exists()).toBe(false)
  })

  it('renders one button per page when total fits within maxVisible', () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 1, totalPages: 3, maxVisible: 5 }
    })
    const pageButtons = wrapper.findAll('.page-btn').filter((b) => !b.attributes('aria-label'))
    expect(pageButtons.map((b) => b.text())).toEqual(['1', '2', '3'])
  })

  it('shows an ellipsis when there are more pages than maxVisible', () => {
    const wrapper = mount(Pagination, {
      props: { currentPage: 1, totalPages: 10, maxVisible: 5 }
    })
    expect(wrapper.find('.page-btn.ellipsis').exists()).toBe(true)
  })

  it('disables the previous button on the first page and the next button on the last', () => {
    const first = mount(Pagination, { props: { currentPage: 1, totalPages: 3 } })
    expect(first.find('[aria-label="Página anterior"]').attributes('disabled')).toBeDefined()
    expect(first.find('[aria-label="Página siguiente"]').attributes('disabled')).toBeUndefined()

    const last = mount(Pagination, { props: { currentPage: 3, totalPages: 3 } })
    expect(last.find('[aria-label="Página siguiente"]').attributes('disabled')).toBeDefined()
  })

  it('emits page-change with the clicked page', async () => {
    const wrapper = mount(Pagination, { props: { currentPage: 1, totalPages: 3 } })
    const pageButtons = wrapper.findAll('.page-btn').filter((b) => !b.attributes('aria-label'))
    await pageButtons[1].trigger('click')
    expect(wrapper.emitted('page-change')).toEqual([[2]])
  })

  it('emits page-change when clicking next/prev', async () => {
    const wrapper = mount(Pagination, { props: { currentPage: 2, totalPages: 3 } })
    await wrapper.find('[aria-label="Página siguiente"]').trigger('click')
    await wrapper.find('[aria-label="Página anterior"]').trigger('click')
    expect(wrapper.emitted('page-change')).toEqual([[3], [1]])
  })
})
