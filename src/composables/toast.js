import { ref } from 'vue'

const toast = ref(null)
let timer = null

export function showToast(text, type = 'success', duration = 5000) {
  if (timer) clearTimeout(timer)
  toast.value = { text, type }
  timer = setTimeout(() => {
    toast.value = null
  }, duration)
}

export function useToast() {
  return { toast, dismiss }
}

function dismiss() {
  if (timer) clearTimeout(timer)
  toast.value = null
}
