<template>
  <Teleport to="body">
    <div v-if="toast" class="toast" :class="toast.type" role="alert" aria-live="polite">
      <span>{{ toast.text }}</span>
      <button class="toast-close" @click="dismiss" aria-label="Cerrar notificación">&times;</button>
    </div>
  </Teleport>
</template>

<script setup>
import { useToast } from '@/composables/toast.js'

const { toast, dismiss } = useToast()
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-radius: var(--radius);
  font-size: .9rem;
  font-weight: 500;
  box-shadow: var(--shadow-xl);
  max-width: 420px;
  animation: fadeInUp .3s ease;
}
.toast.success { background: #065f46; color: #d1fae5; border: 1px solid #059669; }
.toast.error   { background: #7f1d1d; color: #fee2e2; border: 1px solid #dc2626; }
.toast-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  opacity: .6;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
}
.toast-close:hover { opacity: 1; }
</style>
