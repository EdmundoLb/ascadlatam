import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCertificacionesStore } from '../../stores/certificaciones'

describe('useCertificacionesStore', () => {
  it('has levels defined', () => {
    setActivePinia(createPinia())
    const store = useCertificacionesStore()
    expect(store.levels.length).toBeGreaterThan(0)
  })

  it('has origins defined', () => {
    setActivePinia(createPinia())
    const store = useCertificacionesStore()
    expect(store.origins.length).toBeGreaterThan(0)
  })

  it('has stats defined', () => {
    setActivePinia(createPinia())
    const store = useCertificacionesStore()
    expect(store.stats.length).toBeGreaterThan(0)
  })

  it('levels have required properties', () => {
    setActivePinia(createPinia())
    const store = useCertificacionesStore()
    const firstLevel = store.levels[0]
    expect(firstLevel).toHaveProperty('code')
    expect(firstLevel).toHaveProperty('name')
    expect(firstLevel).toHaveProperty('fee')
  })

  it('can get level by code', () => {
    setActivePinia(createPinia())
    const store = useCertificacionesStore()
    const level = store.getLevelByCode('OST')
    expect(level).toBeDefined()
    expect(level?.code).toBe('OST')
  })
})