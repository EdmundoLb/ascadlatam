<template>
  <Teleport to="body">
    <transition name="toast">
      <div v-if="toast" class="toast" :class="[toast.type, { 'above-cookie-banner': !consentDecided }]" role="alert" aria-live="polite">
        <span class="toast-icon">
          <svg v-if="toast.type === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <svg v-else-if="toast.type === 'error'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          <svg v-else-if="toast.type === 'warning'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </span>
        <span class="toast-text">{{ toast.text }}</span>
        <button class="toast-close" @click="dismiss" :aria-label="$t('common.cerrarNotificacion')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { useToast } from '@/composables/toast.js'
import { useConsent } from '@/composables/consent.js'

const { toast, dismiss } = useToast()
const { consentDecided } = useConsent()
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: var(--z-toast);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: var(--radius);
  font-size: .875rem;
  font-weight: 500;
  box-shadow: var(--shadow-xl);
  max-width: 400px;
}
.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.toast-text { flex: 1; }
.toast-close {
  background: none;
  border: none;
  color: inherit;
  opacity: .6;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity .2s;
}
.toast-close:hover { opacity: 1; }

.toast.success { background: var(--toast-success-bg); color: var(--toast-success-text); border: 1px solid var(--toast-success-border); }
.toast.error   { background: var(--toast-error-bg);   color: var(--toast-error-text);   border: 1px solid var(--toast-error-border);   }
.toast.warning { background: var(--toast-warning-bg); color: var(--toast-warning-text); border: 1px solid var(--toast-warning-border); }
.toast.info    { background: var(--toast-info-bg);    color: var(--toast-info-text);    border: 1px solid var(--toast-info-border);    }

.toast-enter-active { animation: toastIn .3s ease; }
.toast-leave-active { animation: toastOut .2s ease; }
@keyframes toastIn {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes toastOut {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(10px) scale(0.95); }
}

@media (max-width: 480px) {
  .toast {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
  .toast.above-cookie-banner {
    bottom: 230px;
  }
}
</style>