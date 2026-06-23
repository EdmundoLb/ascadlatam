import { ref } from 'vue'
import { loadAnalytics } from '@/composables/analytics.js'

const STORAGE_KEY = 'cookie_consent'

const storedValue = localStorage.getItem(STORAGE_KEY)
const consentGiven = ref(storedValue === 'accepted')
const consentDecided = ref(storedValue === 'accepted' || storedValue === 'rejected')

if (consentGiven.value) {
  loadAnalytics()
}

function acceptConsent() {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  consentGiven.value = true
  consentDecided.value = true
  loadAnalytics()
}

function rejectConsent() {
  localStorage.setItem(STORAGE_KEY, 'rejected')
  consentGiven.value = false
  consentDecided.value = true
}

export function useConsent() {
  return { consentGiven, consentDecided, acceptConsent, rejectConsent }
}
