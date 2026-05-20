import { defineStore } from 'pinia'
import { origins, levels, stats } from '@/data/certificaciones'

export const useCertificacionesStore = defineStore('certificaciones', {
  state: () => ({
    origins,
    levels,
    stats,
  }),

  getters: {
    getLevelByCode: (state) => (code) => {
      return state.levels.find(l => l.code === code)
    },
    levelsCount: (state) => state.levels.length,
    minFee: (state) => Math.min(...state.levels.map(l => l.fee)),
    maxFee: (state) => Math.max(...state.levels.map(l => l.fee)),
  },
})