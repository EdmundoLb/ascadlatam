<template>
  <div v-if="!consentDecided" class="cookie-consent" role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
    <p class="cookie-text">{{ $t('cookieConsent.mensaje') }}</p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-outline btn-sm" @click="rejectConsent">{{ $t('cookieConsent.rechazar') }}</button>
      <button type="button" class="btn btn-gold btn-sm" @click="acceptConsent">{{ $t('cookieConsent.aceptar') }}</button>
    </div>
  </div>
</template>

<script setup>
import { useConsent } from '@/composables/consent.js'

const { consentDecided, acceptConsent, rejectConsent } = useConsent()
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  max-width: 560px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.cookie-text {
  font-size: .85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}
.cookie-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

@media (max-width: 480px) {
  .cookie-consent { left: 12px; right: 12px; bottom: 12px; padding: 18px; }
  .cookie-actions { flex-direction: column; }
  .cookie-actions .btn { width: 100%; }
}
</style>
