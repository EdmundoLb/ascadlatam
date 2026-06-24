import { defineStore } from 'pinia'
import { getOrigins, getLevels, getStats, levelIcons } from '@/data/certificaciones'
import { getCertificationsFull } from '@/data/certificacionesFull'
import { getFormCertifications } from '@/data/solicitudForms'
import i18n from '@/i18n'

export const useCertificacionesStore = defineStore('certificaciones', {
  state: () => ({
    levelIcons,
  }),

  getters: {
    origins() {
      return getOrigins(i18n.global.locale.value)
    },
    levels() {
      return getLevels(i18n.global.locale.value)
    },
    stats() {
      return getStats(i18n.global.locale.value)
    },
    certifications() {
      return getCertificationsFull(i18n.global.locale.value)
    },
    formCertifications() {
      return getFormCertifications(i18n.global.locale.value)
    },
    getLevelByCode() {
      return (code) => this.levels.find(l => l.code === code)
    },
    getCertByCode() {
      return (code) => this.certifications.find(c => c.code === code)
    },
    getFormCertByCode() {
      return (code) => this.formCertifications.find(c => c.code === code)
    },
    levelsCount() {
      return this.levels.length
    },
    certificationsCount() {
      return this.certifications.length
    },
    minFee() {
      return Math.min(...this.certifications.map(c => c.fee))
    },
    maxFee() {
      return Math.max(...this.certifications.map(c => c.fee))
    },
    getLevelIcon: (state) => (code) => {
      return state.levelIcons[code] || state.levelIcons['OST']
    },
  },
})