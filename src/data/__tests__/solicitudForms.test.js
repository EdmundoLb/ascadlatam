import { describe, it, expect } from 'vitest'
import { getFormCertifications } from '../solicitudForms'
import { getCertificationsFull } from '../certificacionesFull'

const formCertifications = getFormCertifications('es')
const certificationsFull = getCertificationsFull('es')

describe('data/solicitudForms.js', () => {
  it('has one form entry per certification level', () => {
    expect(formCertifications).toHaveLength(certificationsFull.length)
    expect(formCertifications.map((c) => c.code)).toEqual(certificationsFull.map((c) => c.code))
  })

  it('every entry has the base fields and at least one horasFields entry', () => {
    formCertifications.forEach((cert) => {
      expect(cert).toMatchObject({
        code: expect.any(String),
        name: expect.any(String),
        fee: expect.any(Number),
        description: expect.any(String)
      })
      expect(cert.horasFields.length).toBeGreaterThan(0)
      expect(cert.docs.length).toBeGreaterThan(0)
    })
  })

  it('only requires a degree for CCAAD III and CCAAD IV', () => {
    const byCode = Object.fromEntries(formCertifications.map((c) => [c.code, c]))
    expect(byCode['OST'].needsDegree).toBe(false)
    expect(byCode['EPR'].needsDegree).toBe(false)
    expect(byCode['CCAAD I'].needsDegree).toBe(false)
    expect(byCode['CCAAD II'].needsDegree).toBe(false)
    expect(byCode['CCAAD III'].needsDegree).toBe(true)
    expect(byCode['CCAAD IV'].needsDegree).toBe(true)
    expect(byCode['CCAAD III'].degreePlaceholder).toBeTruthy()
    expect(byCode['CCAAD IV'].degreePlaceholder).toBeTruthy()
  })
})
