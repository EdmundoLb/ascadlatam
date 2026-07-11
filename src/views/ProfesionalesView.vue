<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('profesionales.redProfesional') }}</div>
        <h1>{{ $t('profesionales.tituloHero') }}<br><em class="gold">{{ $t('profesionales.certificados') }}</em></h1>
        <p class="lead" style="margin-top:20px;">{{ $t('profesionales.descripcion') }}</p>
      </div>
    </section>

    <section id="certificados" class="section certified-section">
      <div class="container">
        <div v-if="certifiedLoading" class="certified-empty">
          <p class="muted">{{ $t('profesionales.cargandoCertificados') }}</p>
        </div>

        <div v-else-if="certifiedProfessionals.length === 0" class="certified-empty">
          <div class="certified-empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>{{ $t('profesionales.sinCertificadosTitulo') }}</h3>
          <p class="muted">{{ $t('profesionales.sinCertificadosDesc') }}</p>
          <router-link to="/solicitud" class="btn btn-gold">{{ $t('profesionales.sinCertificadosCta') }}</router-link>
        </div>

        <template v-else>
          <div class="certified-grid">
            <div v-for="person in paginatedCertified" :key="person.id" class="certified-card">
              <div class="certified-avatar">{{ initials(person.full_name) }}</div>
              <div class="certified-info">
                <strong>{{ person.full_name }}</strong>
                <span class="certified-meta">{{ person.certification_code }} · {{ person.country }}</span>
                <span class="certified-date">{{ formatCertifiedDate(person.certified_at) }}</span>
              </div>
            </div>
          </div>
          <Pagination
            v-if="certifiedTotalPages > 1"
            :current-page="certifiedPage"
            :total-pages="certifiedTotalPages"
            @page-change="(page) => (certifiedPage = page)"
          />
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import Pagination from '@/components/ui/Pagination.vue'

const certifiedProfessionals = ref([])
const certifiedLoading = ref(true)
const certifiedPage = ref(1)
const CERTIFIED_PER_PAGE = 9

const certifiedTotalPages = computed(() => Math.ceil(certifiedProfessionals.value.length / CERTIFIED_PER_PAGE))

const paginatedCertified = computed(() => {
  const start = (certifiedPage.value - 1) * CERTIFIED_PER_PAGE
  return certifiedProfessionals.value.slice(start, start + CERTIFIED_PER_PAGE)
})

function initials(fullName) {
  return fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

function formatCertifiedDate(dateString) {
  return new Date(dateString).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
}

onMounted(async () => {
  if (!supabase) {
    certifiedLoading.value = false
    return
  }
  const { data, error } = await supabase
    .from('certified_professionals')
    .select('id, full_name, certification_code, country, certified_at')
    .eq('status', 'active')
    .order('certified_at', { ascending: false })

  if (!error && data) {
    certifiedProfessionals.value = data
  }
  certifiedLoading.value = false
})
</script>

<style scoped>
.certified-empty {
  text-align: center;
  max-width: 460px;
  margin: 0 auto;
  padding: 48px 24px;
}
.certified-empty-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent-light);
  color: var(--accent-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.certified-empty h3 { margin-bottom: 10px; }
.certified-empty p { margin-bottom: 24px; }
.certified-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.certified-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all .3s ease;
}
.certified-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--accent-light); }
.certified-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  font-weight: 700;
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.certified-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.certified-info strong { font-size: .9375rem; color: var(--text); }
.certified-meta { font-size: .8125rem; color: var(--accent-dark); font-weight: 600; }
.certified-date { font-size: .75rem; color: var(--text-muted); }

@media (max-width: 900px) {
  .certified-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .certified-grid { grid-template-columns: 1fr; }
}
</style>
