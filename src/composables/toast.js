import { ref } from 'vue'

const toast = ref(null)
let timer = null

function dismiss() {
  if (timer) clearTimeout(timer)
  timer = null
  toast.value = null
}

export function showToast(text, type = 'success', duration = 5000) {
  if (timer) clearTimeout(timer)
  toast.value = { text, type }
  timer = setTimeout(() => {
    dismiss()
  }, duration)
}

export function useToast() {
  return { toast, dismiss }
}