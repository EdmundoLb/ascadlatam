import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyLoad(options = {}) {
  const { threshold = 0.1, rootMargin = '50px' } = options
  const isLoaded = ref(false)
  const elementRef = ref(null)
  let observer = null

  onMounted(() => {
    if ('IntersectionObserver' in window && elementRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isLoaded.value = true
              if (observer && elementRef.value) {
                observer.unobserve(elementRef.value)
              }
            }
          })
        },
        { threshold, rootMargin }
      )
      observer.observe(elementRef.value)
    } else {
      isLoaded.value = true
    }
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return { elementRef, isLoaded }
}

export function useLazyImage(src) {
  const isLoaded = ref(false)
  const isError = ref(false)
  const img = new Image()

  img.onload = () => {
    isLoaded.value = true
  }

  img.onerror = () => {
    isError.value = true
  }

  if (src) {
    img.src = src
  }

  return { isLoaded, isError }
}