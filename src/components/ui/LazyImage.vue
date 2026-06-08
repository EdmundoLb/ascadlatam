<template>
  <img
    ref="imgRef"
    :src="isVisible || !lazy ? src : undefined"
    :data-src="lazy ? src : undefined"
    :alt="alt"
    :width="width"
    :height="height"
    :class="{ 'lazy-loaded': isLoaded }"
    @load="onLoad"
    @error="onError"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: [Number, String], default: undefined },
  height: { type: [Number, String], default: undefined },
  lazy: { type: Boolean, default: true }
})

const imgRef = ref(null)
const isVisible = ref(false)
const isLoaded = ref(false)

let observer = null

onMounted(() => {
  if (props.lazy && imgRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '100px' }
    )
    observer.observe(imgRef.value)
  } else if (!props.lazy) {
    isVisible.value = true
  }
})

onUnmounted(() => {
  observer?.disconnect()
})

function onLoad() {
  isLoaded.value = true
}

function onError(e) {
  console.warn('LazyImage: failed to load', props.src, e)
}
</script>

<style scoped>
img {
  transition: opacity 0.3s ease;
}
img:not(.lazy-loaded) {
  opacity: 0;
}
img.lazy-loaded {
  opacity: 1;
}
</style>