const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID
let loaded = false

export function isAnalyticsConfigured() {
  return Boolean(GA_MEASUREMENT_ID)
}

export function loadAnalytics() {
  if (loaded || !GA_MEASUREMENT_ID) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function trackPageview(path, title) {
  if (!loaded) return
  window.gtag('event', 'page_view', { page_path: path, page_title: title })
}

export function trackEvent(name, params = {}) {
  if (!loaded) return
  window.gtag('event', name, params)
}
