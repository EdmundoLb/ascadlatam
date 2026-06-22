import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import pt from './locales/pt.json'

const savedLocale = localStorage.getItem('locale')
const browserLocale = navigator.language.split('-')[0]
const defaultLocale = savedLocale || (['es', 'pt'].includes(browserLocale) ? browserLocale : 'es')

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'es',
  messages: { es, pt }
})

document.documentElement.lang = defaultLocale
watch(i18n.global.locale, (newLocale) => {
  document.documentElement.lang = newLocale
})

export default i18n