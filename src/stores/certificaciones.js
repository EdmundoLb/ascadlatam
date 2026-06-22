import { defineStore } from 'pinia'
import { origins, levels, stats, levelIcons } from '@/data/certificaciones'
import { certificationsFull } from '@/data/certificacionesFull'
import { formCertifications } from '@/data/solicitudForms'

export const useCertificacionesStore = defineStore('certificaciones', {
  state: () => ({
    origins,
    levels,
    stats,
    levelIcons,
    certifications: certificationsFull,
    formCertifications,
  }),

  getters: {
    getLevelByCode: (state) => (code) => {
      return state.levels.find(l => l.code === code)
    },
    getCertByCode: (state) => (code) => {
      return state.certifications.find(c => c.code === code)
    },
    getFormCertByCode: (state) => (code) => {
      return state.formCertifications.find(c => c.code === code)
    },
    levelsCount: (state) => state.levels.length,
    certificationsCount: (state) => state.certifications.length,
    minFee: (state) => Math.min(...state.certifications.map(c => c.fee)),
    maxFee: (state) => Math.max(...state.certifications.map(c => c.fee)),
    getLevelIcon: (state) => (code) => {
      return state.levelIcons[code] || state.levelIcons['OST']
    },
  },
})