<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('certificaciones.disponibles') || 'Certificaciones disponibles' }}</div>
        <h1>{{ $t('certificaciones.titulo') }}<br><em class="gold">{{ $t('certificaciones.distinto') || 'distinto' }}</em></h1>
        <p class="lead" style="margin-top:20px;">
          {{ $t('certificaciones.descripcion') }}
        </p>
      </div>
    </section>

    <section class="section toc-section">
      <div class="container">
        <p class="toc-intro">{{ $t('certificaciones.tocIntro') || 'Navegá rápidamente a la sección que necesites' }}</p>
        <div class="toc-grid">
          <a href="#comparativa" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </span>
            <span class="toc-label">{{ $t('certificaciones.vistaComparativa') || 'Vista comparativa' }}</span>
            <span class="toc-desc">{{ $t('certificaciones.comparaNiveles') || 'Compará todos los niveles' }}</span>
          </a>
          <a href="#detalles" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </span>
            <span class="toc-label">{{ $t('certificaciones.requisitosNivel') || 'Requisitos por nivel' }}</span>
            <span class="toc-desc">{{ $t('certificaciones.competenciasHoras') || 'Competencias y horas requeridas' }}</span>
          </a>
          <a href="#proceso" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <span class="toc-label">{{ $t('certificaciones.procesoCertificacion') || 'Proceso de certificación' }}</span>
            <span class="toc-desc">{{ $t('certificaciones.comoObtener') || 'Cómo obtener tu certificación' }}</span>
          </a>
          <a href="#faq" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </span>
            <span class="toc-label">{{ $t('certificaciones.preguntasFrecuentes') || 'Preguntas frecuentes' }}</span>
            <span class="toc-desc">{{ $t('certificaciones.resolviDudas') || 'Resolvé tus dudas' }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section id="comparativa" class="section comparison-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">{{ $t('certificaciones.comparativaRapida') || 'Comparativa rápida' }}</div>
          <h2>{{ $t('certificaciones.todosNiveles') || 'Todos los niveles' }} <em class="gold">{{ $t('certificaciones.ladoLado') || 'lado a lado' }}</em></h2>
        </div>

        <div class="table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('certificaciones.certificacion') || 'Certificación' }}</th>
                <th>{{ $t('certificaciones.descripcionBreve') || 'Descripción breve' }}</th>
                <th>{{ $t('certificaciones.formacion') || 'Formación' }}</th>
                <th>{{ $t('certificaciones.experiencia') || 'Experiencia' }}</th>
                <th>{{ $t('certificaciones.supervision') || 'Supervisión' }}</th>
                <th class="text-right">{{ $t('certificaciones.cuotaBianual') || 'Cuota bianual' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cert in comparisonData" :key="cert.code" :class="{ 'row-highlight': cert.highlight }">
                <td>
                  <div class="cert-cell">
                    <span class="cert-code-badge">{{ cert.code }}</span>
                    <strong>{{ cert.name }}</strong>
                  </div>
                </td>
                <td class="td-desc">{{ cert.desc }}</td>
                <td class="td-center">{{ cert.formacion }}</td>
                <td class="td-center">{{ cert.experiencia }}</td>
                <td class="td-center">{{ cert.supervision }}</td>
                <td class="td-price">${{ cert.fee }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-legend">
          <div class="legend-item">
            <span class="legend-dot"></span>
            <span>{{ $t('certificaciones.incluyeFirma') || 'Todas las certificaciones incluyen firma del código de ética y examen de evaluación' }}</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot"></span>
            <span>{{ $t('certificaciones.montosUSD') || 'Los montos están en USD y no son reembolsables' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROFESIONALES CERTIFICADOS -->
    <section id="certificados" class="section certified-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">{{ $t('certificaciones.redProfesional') }}</div>
          <h2>{{ $t('certificaciones.profesionalesTitulo') }} <em class="gold">{{ $t('certificaciones.certificados') }}</em></h2>
        </div>

        <div v-if="certifiedLoading" class="certified-empty">
          <p class="muted">{{ $t('certificaciones.cargandoCertificados') }}</p>
        </div>

        <div v-else-if="certifiedProfessionals.length === 0" class="certified-empty">
          <div class="certified-empty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>{{ $t('certificaciones.sinCertificadosTitulo') }}</h3>
          <p class="muted">{{ $t('certificaciones.sinCertificadosDesc') }}</p>
          <router-link to="/solicitud" class="btn btn-gold">{{ $t('certificaciones.sinCertificadosCta') }}</router-link>
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

    <!-- CERTIFICATION DETAILS -->
    <section id="detalles" class="section details-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">{{ $t('certificaciones.nivelesCertificacion') || 'Niveles de certificación' }}</div>
          <h2>{{ $t('certificaciones.conoceCada') || 'Conocé cada' }} <em class="gold">{{ $t('certificaciones.certificacion') || 'certificación' }}</em></h2>
          <p class="lead" style="margin-top:16px; max-width: 600px;">{{ $t('certificaciones.hazClick') || 'Hacé click en cada nivel para ver los requisitos completos, competencias y horas requeridas.' }}</p>
        </div>

        <div class="cert-grid">
          <article
            v-for="(cert, index) in certifications"
            :key="cert.code"
            class="cert-card"
            :style="{ '--delay': `${index * 0.08}s` }"
            role="button"
            tabindex="0"
            :aria-label="`${$t('certificaciones.verMasSobre') || 'Ver más sobre'} ${cert.name}`"
            @click="openModal(cert.code)"
            @keydown.enter="openModal(cert.code)"
            @keydown.space.prevent="openModal(cert.code)"
          >
            <div class="cert-header">
              <div class="cert-level">
                <span class="cert-code">{{ cert.code }}</span>
                <!-- v-html: SVG fijo definido en data/certificaciones.js -->
                <span class="cert-icon" v-html="getLevelIcon(cert.code)"></span>
              </div>
              <div class="cert-title-area">
                <h3>{{ cert.name }}</h3>
                <p class="cert-summary">{{ cert.summary }}</p>
              </div>
              <div class="cert-meta">
                <div class="cert-price">
                  <span class="price-amount">${{ cert.fee }}</span>
                  <span class="price-period">/{{ $t('certificaciones.bianual') || 'bianual' }}</span>
                </div>
                <button class="expand-btn" tabindex="-1" aria-hidden="true">
                  <svg class="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESS STEPS -->
    <section id="proceso" class="section process-section">
      <div class="container">
        <div class="section-header centered">
          <div class="eyebrow">{{ $t('certificaciones.procesoTitulo') || 'Proceso de certificación' }}</div>
          <h2>{{ $t('certificaciones.comoFunciona') || '¿Cómo funciona la' }} <em class="gold">{{ $t('certificaciones.certificacion') || 'certificación' }}</em>?</h2>
        </div>

        <div class="process-track">
          <div v-for="(step, i) in processSteps" :key="i" class="process-step">
            <div class="step-number">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="step-connector" v-if="i < processSteps.length - 1"></div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.desc }}</p>
              <span v-if="step.note" class="step-note">{{ step.note }}</span>
            </div>
          </div>
        </div>

        <div class="process-cta">
          <router-link to="/solicitud" class="btn btn-gold btn-lg">{{ $t('certificaciones.comenzarSolicitud') || 'Comenzar mi solicitud' }}</router-link>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section faq-section">
      <div class="container">
        <div class="section-header centered">
          <div class="eyebrow">{{ $t('certificaciones.preguntasFrecuentes') || 'Preguntas frecuentes' }}</div>
          <h2>{{ $t('certificaciones.resuelveDudas') || 'Resolved tus' }} <em class="gold">{{ $t('certificaciones.dudas') || 'dudas' }}</em></h2>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'is-open': openFaq === i }"
          >
            <button class="faq-question" @click="toggleFaq(i)" :aria-expanded="openFaq === i">
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="faq-cta">
          <p>{{ $t('certificaciones.noEncontraste') || '¿No encontraste la respuesta que buscabas?' }}</p>
          <router-link to="/contacto" class="btn btn-outline">{{ $t('contacto.contactanos') || 'Contactanos' }}</router-link>
        </div>
      </div>
    </section>

    <!-- ALLIANCE STRIP -->
    <section class="section alliance-section">
      <div class="container">
        <div class="alliance-inner">
          <div class="alliance-text">
            <span class="eyebrow">{{ $t('certificaciones.consorcioLatinoamericano') || 'Consorcio Latinoamericano de Certificación' }}</span>
            <h2>{{ $t('certificaciones.certificacionGarantiza') || 'Una certificación que' }} <em class="gold">{{ $t('certificaciones.garantizaCalidad') || 'garantiza calidad' }}</em></h2>
            <p>{{ $t('certificaciones.ascadAsegura') || 'ASCAD LATAM asegura que cada profesional certificado cumpla con los más altos estándares de calidad, ética y competencia en el campo de las adicciones, basados en TAP 21, TIP 64 y TIP 52.' }}</p>
            <router-link to="/contacto" class="btn btn-gold btn-lg" style="margin-top:24px;">{{ $t('contacto.contactanos') || 'Contactanos' }}</router-link>
          </div>
          <div class="alliance-visual">
            <div class="consorcio-grid">
              <div class="consorcio-item" v-for="org in consortium" :key="org.name">
                <span class="org-icon">{{ org.icon }}</span>
                <span class="org-name">{{ org.name }}</span>
                <span class="org-role">{{ org.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FULLSCREEN MODAL -->
    <div v-if="activeModal" class="cert-modal-overlay" @click="closeModal" role="presentation">
      <div class="cert-modal" role="dialog" aria-modal="true" :aria-label="$t('certificaciones.detallesDe', { name: certData?.name })" ref="modalRef" tabindex="-1" @click.stop>
        <button class="modal-close" @click="closeModal" :aria-label="$t('common.close') || 'Cerrar'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="modal-header">
          <div class="modal-flact">{{ $t('certificaciones.programaAscad') || 'Programa ASCAD LATAM de Formación en Adicciones' }}</div>
          <div class="modal-cert-title">
            <span class="modal-code">{{ certData?.code }}</span>
            <h2>{{ certData?.name }}</h2>
          </div>
          <p class="modal-summary">{{ certData?.summary }}</p>
        </div>
        <div class="modal-body">
          <div v-if="certData" class="modal-content-inner">
            <div class="technical-foundation" v-if="certData.technicalDescription">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <h4>{{ $t('certificaciones.fundamentacionTecnica') || 'Fundamentación Técnica' }}</h4>
              </div>
              <p class="technical-text">{{ certData.technicalDescription }}</p>
            </div>
            <div class="professional-profile" v-if="certData.professionalProfile">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <h4>{{ $t('certificaciones.perfilProfesional') || 'Perfil Profesional' }}</h4>
              </div>
              <p class="profile-text">{{ certData.professionalProfile }}</p>
            </div>
            <div class="training-axes" v-if="certData.trainingAxes?.length">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <h4>{{ $t('certificaciones.ejesFormacion') || 'Ejes de Formación' }}</h4>
              </div>
              <p v-if="certData.basedOn" class="based-on-text">{{ certData.basedOn }}</p>
              <div class="axes-tags">
                <span v-for="(axis, i) in certData.trainingAxes" :key="i" class="axis-tag">{{ axis }}</span>
              </div>
            </div>
            <div class="competencies-section">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <h4>{{ $t('certificaciones.competenciasEje') || 'Competencias por Eje' }}</h4>
              </div>
              <div class="axis-blocks">
                <div v-for="axis in certData.competencies" :key="axis.axis" class="axis-block" :class="{ 'is-expanded': expandedAxis === axis.axis }">
                  <button class="axis-header" @click="toggleAxis(axis.axis)">
                    <span class="axis-name" :style="{ background: axis.color }">{{ axis.axis }}</span>
                    <svg class="axis-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  <ul class="axis-items">
                    <li v-for="item in axis.items" :key="item">
                      <span class="comp-dot"></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-meta">
              <div class="modal-section" v-if="certData.areas?.length">
                <h5>{{ $t('certificaciones.ambitosDesempeno') || 'Ámbitos de desempeño' }}</h5>
                <div class="areas-tags">
                  <span v-for="area in certData.areas" :key="area" class="area-tag">{{ area }}</span>
                </div>
              </div>
              <div class="modal-section" v-if="certData.requirements?.length">
                <h5>{{ $t('certificaciones.requisitos') || 'Requisitos' }}</h5>
                <ul class="req-list">
                  <li v-for="req in certData.requirements" :key="req">{{ req }}</li>
                </ul>
              </div>
              <div class="modal-section" v-if="certData.hours?.length">
                <h5>{{ $t('certificaciones.horasRequeridas') || 'Horas requeridas' }}</h5>
                <div class="hours-grid">
                  <div v-for="h in certData.hours" :key="h.label" class="hour-badge">
                    <span class="hour-value">{{ h.value }}</span>
                    <span class="hour-label">{{ h.label }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="cert-actions">
              <button @click="goToSolicitud(certData.code)" class="btn btn-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
                {{ $t('certificaciones.aplicar') }}
              </button>
              <button @click="goToContacto()" class="btn btn-ghost">{{ $t('certificaciones.masInfo') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted, nextTick, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { levelIcons } from '@/data/certificaciones'
import { getCertificationsFull } from '@/data/certificacionesFull'
import { supabase } from '@/lib/supabase'
import Pagination from '@/components/ui/Pagination.vue'

const router = useRouter()
const { locale, t } = useI18n()
const modalRef = ref(null)

const activeModal = ref(null)
const openFaq = ref(null)
const expandedAxis = ref(null)
let lastFocusedElement = null

const certData = computed(() => {
  const cert = getCertificationsFull(locale.value).find(c => c.code === activeModal.value)
  if (!cert) return null
  return {
    ...cert,
    competencies: transformCompetencies(cert.competencies)
  }
})

const saberLabels = {
  es: { saberConocer: 'Saber Conocer', saberHacer: 'Saber Hacer', saberSer: 'Saber Ser' },
  pt: { saberConocer: 'Saber Conhecer', saberHacer: 'Saber Fazer', saberSer: 'Saber Ser' }
}

function transformCompetencies(comp) {
  const labels = saberLabels[locale.value] || saberLabels.es
  const axes = []
  if (comp.saberConocer) {
    axes.push({ axis: labels.saberConocer, color: '#1565c0', items: comp.saberConocer })
  }
  if (comp.saberHacer) {
    axes.push({ axis: labels.saberHacer, color: '#2e7d32', items: comp.saberHacer })
  }
  if (comp.saberSer) {
    axes.push({ axis: labels.saberSer, color: '#c9a84c', items: comp.saberSer })
  }
  return axes
}

function openModal(code) {
  lastFocusedElement = document.activeElement
  activeModal.value = code
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    modalRef.value?.focus()
  }, 100)
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
  expandedAxis.value = null
  nextTick(() => {
    lastFocusedElement?.focus()
  })
}

function handleKeydown(e) {
  if (!activeModal.value) return

  if (e.key === 'Escape') {
    e.preventDefault()
    closeModal()
    return
  }

  if (e.key === 'Tab') {
    const modal = modalRef.value
    if (!modal) return

    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
    if (focusableElements.length === 0) return

    const firstEl = focusableElements[0]
    const lastEl = focusableElements[focusableElements.length - 1]

    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault()
      lastEl.focus()
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault()
      firstEl.focus()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

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

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})

function goToSolicitud(code) {
  closeModal()
  router.push(`/solicitud?nivel=${code}`)
}

function goToContacto() {
  closeModal()
  router.push('/contacto')
}

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

function toggleAxis(axis) {
  expandedAxis.value = expandedAxis.value === axis ? null : axis
}

function getLevelIcon(code) {
  return levelIcons[code] || levelIcons['OST']
}

const comparisonDescriptions = {
  es: {
    OST: 'Nivel inicial de acompañamiento supervisado',
    EPR: 'Apoyo desde la experiencia vivida en recuperación',
    'CCAAD I': 'Primer nivel técnico profesional',
    'CCAAD II': 'Competencias avanzadas en consejería',
    'CCAAD III': 'Nivel avanzado profesional con autonomía',
    'CCAAD IV': 'Máximo nivel: supervisión y liderazgo',
  },
  pt: {
    OST: 'Nível inicial de acompanhamento supervisionado',
    EPR: 'Apoio a partir da experiência vivida em recuperação',
    'CCAAD I': 'Primeiro nível técnico profissional',
    'CCAAD II': 'Competências avançadas em aconselhamento',
    'CCAAD III': 'Nível avançado profissional com autonomia',
    'CCAAD IV': 'Nível máximo: supervisão e liderança',
  },
}

const comparisonMeta = [
  { code: 'OST',       formacion: '80h',  experiencia: '1.000h', supervision: '100h', fee: 30,  highlight: false },
  { code: 'EPR',       formacion: '80h',  experiencia: '100h',   supervision: '100h', fee: 30,  highlight: false },
  { code: 'CCAAD I',   formacion: '120h', experiencia: '1.500h', supervision: '60h',  fee: 50,  highlight: false },
  { code: 'CCAAD II',  formacion: '150h', experiencia: '2.000h', supervision: '96h',  fee: 75,  highlight: false },
  { code: 'CCAAD III', formacion: '170h', experiencia: '3.000h', supervision: '120h', fee: 100, highlight: true  },
  { code: 'CCAAD IV',  formacion: '40h',  experiencia: '6.000h', supervision: '120h', fee: 125, highlight: false },
]

const comparisonData = computed(() => {
  const certs = getCertificationsFull(locale.value)
  const descs = comparisonDescriptions[locale.value] || comparisonDescriptions.es
  return comparisonMeta.map(meta => ({
    ...meta,
    name: certs.find(c => c.code === meta.code)?.name || meta.code,
    desc: descs[meta.code] || '',
  }))
})

const certifications = computed(() => getCertificationsFull(locale.value))

const processStepsContent = {
  es: [
    { title: 'Completá la solicitud', desc: 'Formulario en línea con tus datos personales y profesionales.', note: 'Adjuntá toda la documentación requerida' },
    { title: 'Evaluación del expediente', desc: 'Nuestro equipo revisa tu documentación en 4 a 6 semanas.', note: '90 días para subsanar observaciones' },
    { title: 'Examen de certificación', desc: 'Evaluación según el nivel de certificación elegido.', note: 'Presencial o en línea según disponibilidad' },
    { title: 'Aprobación y pago', desc: 'Cuota bianual según nivel (USD $30 a $125).', note: 'No reembolsable' },
    { title: 'Tu certificación', desc: 'Nombre publicado en el directorio público verificable.', note: 'Válido por 2 años' }
  ],
  pt: [
    { title: 'Complete a solicitação', desc: 'Formulário on-line com seus dados pessoais e profissionais.', note: 'Anexe toda a documentação exigida' },
    { title: 'Avaliação do processo', desc: 'Nossa equipe revisa sua documentação em 4 a 6 semanas.', note: '90 dias para corrigir observações' },
    { title: 'Exame de certificação', desc: 'Avaliação de acordo com o nível de certificação escolhido.', note: 'Presencial ou on-line conforme disponibilidade' },
    { title: 'Aprovação e pagamento', desc: 'Taxa bianual conforme o nível (USD $30 a $125).', note: 'Não reembolsável' },
    { title: 'Sua certificação', desc: 'Nome publicado no diretório público verificável.', note: 'Válida por 2 anos' }
  ]
}

const processSteps = computed(() => processStepsContent[locale.value] || processStepsContent.es)

const faqsContent = {
  es: [
    { question: '¿Qué es ASCAD LATAM?', answer: 'ASCAD LATAM es una entidad internacional de certificación profesional especializada en el desarrollo, evaluación y acreditación de competencias en consejería, recuperación, supervisión clínica y atención de las adicciones en América Latina. Sus estándares están fundamentados en los modelos internacionales TAP 21, TIP 64 y TIP 52 de SAMHSA, promoviendo una formación basada en evidencia, ética profesional y mejora continua. Las certificaciones de ASCAD LATAM validan que el profesional ha demostrado competencias específicas de acuerdo con estándares internacionales reconocidos para el trabajo en prevención, tratamiento, recuperación y apoyo a personas con trastornos por uso de sustancias. La validez y reconocimiento legal de cada certificación puede variar según las leyes, regulaciones y requisitos profesionales de cada país. Por ello, se recomienda consultar con el representante nacional de ASCAD LATAM o con las autoridades competentes del país donde se pretende ejercer profesionalmente. Lo que ASCAD LATAM garantiza es que la persona certificada ha demostrado las competencias, conocimientos, habilidades y estándares éticos necesarios para desempeñarse profesionalmente dentro del campo de las adicciones en cualquier país de América Latina, de acuerdo con los criterios internacionales de certificación establecidos por la organización.' },
    { question: '¿Quiénes pueden certificarse en ASCAD LATAM?', answer: 'Las certificaciones ASCAD LATAM están abiertas a profesionales, técnicos, operadores, entrenadores de recuperación, estudiantes avanzados y especialistas que cumplan con los requisitos académicos, de experiencia supervisada, formación específica y evaluación correspondientes a cada nivel de certificación.' },
    { question: '¿Cuáles son los niveles de certificación disponibles?', answer: 'ASCAD LATAM ofrece una ruta progresiva de desarrollo profesional: OST – Operador Socioterapéutico. EPR/ER – Entrenador de Recuperación (Recovery Coach). CCAAD I – Consejero Asociado en Adicciones. CCAAD II – Técnico en Counselling en Adicciones. CCAAD III – Licenciado Profesional en Counselling Avanzada No Clínica. CCAAD IV – Supervisor Clínico Certificado en Adicciones.' },
    { question: '¿Cuál es la vigencia de la certificación?', answer: 'La certificación tiene una vigencia de dos (2) años. Al finalizar ese período, el profesional deberá realizar el proceso de recertificación para mantener activa su credencial profesional.' },
    { question: '¿Cuál es el procedimiento de recertificación?', answer: 'La recertificación se realiza cada dos años y requiere demostrar participación en actividades de actualización profesional mediante la presentación de horas de educación continua, capacitación especializada, congresos, seminarios o programas de formación relacionados con el campo de las adicciones y la recuperación.' },
    { question: '¿Qué sucede si no aprobo el examen de certificación?', answer: 'La aprobación del examen internacional es un requisito para obtener la certificación. Si el candidato no alcanza la puntuación requerida, podrá volver a presentar el examen de acuerdo con las políticas y procedimientos vigentes establecidos por ASCAD LATAM.' },
    { question: '¿Se reconoce la experiencia obtenida en otros países?', answer: 'Sí. La experiencia profesional obtenida en otros países puede ser reconocida siempre que esté debidamente documentada, sea verificable y cumpla con los requisitos de experiencia supervisada establecidos para el nivel de certificación solicitado.' },
    { question: '¿Puedo trabajar en cualquier país de América Latina con una certificación ASCAD LATAM?', answer: 'La certificación ASCAD LATAM acredita competencias profesionales con estándares internacionales reconocidos para el trabajo en adicciones y recuperación en América Latina. Sin embargo, el ejercicio profesional puede estar sujeto a las leyes, regulaciones y requisitos específicos de cada país. Por ello, se recomienda consultar con el representante nacional de ASCAD LATAM o con las autoridades competentes del país donde se pretende ejercer. La certificación garantiza que el profesional posee las competencias necesarias para desempeñarse conforme a estándares internacionales, pero no sustituye los requisitos legales que puedan existir en cada jurisdicción.' },
    { question: '¿Puedo certificarme en más de un nivel al mismo tiempo?', answer: 'Sí. Un candidato puede solicitar más de una certificación simultáneamente, siempre que cumpla con todos los requisitos académicos, de experiencia, formación específica y práctica supervisada establecidos para cada nivel.' },
    { question: '¿Existen beneficios para personas asociadas y organizaciones afiliadas?', answer: 'Sí. Las personas asociadas y las organizaciones afiliadas pueden acceder a beneficios como: descuentos en procesos de certificación y recertificación, acceso preferencial a capacitaciones, congresos y eventos académicos, participación en redes profesionales nacionales e internacionales, acceso a recursos educativos especializados, oportunidades de desarrollo profesional continuo, reconocimiento institucional dentro de la red ASCAD LATAM, oportunidades de colaboración académica y profesional.' },
    { question: '¿Por qué es importante la certificación ASCAD LATAM?', answer: 'La certificación ASCAD LATAM permite validar competencias profesionales mediante estándares internacionales reconocidos, fortaleciendo la credibilidad profesional, la calidad de los servicios, la ética de la práctica y el desarrollo continuo de la fuerza laboral especializada en adicciones y recuperación. Además, proporciona una ruta estructurada de crecimiento profesional que facilita el desarrollo progresivo de competencias desde niveles de entrada y apoyo hasta niveles avanzados de supervisión clínica y liderazgo.' },
    { question: '¿Cómo inicio mi proceso de certificación?', answer: 'El candidato debe seleccionar el nivel de certificación correspondiente a su formación y experiencia, completar la documentación requerida, presentar las referencias profesionales, acreditar las horas de experiencia y formación exigidas, firmar el Código de Ética Profesional y aprobar el examen internacional correspondiente. Para obtener información específica sobre requisitos, fechas de aplicación y procedimientos administrativos, puede comunicarse con el representante de ASCAD LATAM en su país.' }
  ],
  pt: [
    { question: 'O que é a ASCAD LATAM?', answer: 'A ASCAD LATAM é uma entidade internacional de certificação profissional especializada no desenvolvimento, avaliação e credenciamento de competências em aconselhamento, recuperação, supervisão clínica e atendimento às adições na América Latina. Seus padrões são fundamentados nos modelos internacionais TAP 21, TIP 64 e TIP 52 da SAMHSA, promovendo uma formação baseada em evidências, ética profissional e melhoria contínua. As certificações da ASCAD LATAM validam que o profissional demonstrou competências específicas de acordo com padrões internacionais reconhecidos para o trabalho em prevenção, tratamento, recuperação e apoio a pessoas com transtornos por uso de substâncias. A validade e o reconhecimento legal de cada certificação podem variar de acordo com as leis, regulamentações e requisitos profissionais de cada país. Por isso, recomenda-se consultar o representante nacional da ASCAD LATAM ou as autoridades competentes do país onde se pretende exercer profissionalmente. O que a ASCAD LATAM garante é que a pessoa certificada demonstrou as competências, conhecimentos, habilidades e padrões éticos necessários para atuar profissionalmente no campo das adições em qualquer país da América Latina, de acordo com os critérios internacionais de certificação estabelecidos pela organização.' },
    { question: 'Quem pode se certificar na ASCAD LATAM?', answer: 'As certificações da ASCAD LATAM estão abertas a profissionais, técnicos, operadores, treinadores de recuperação, estudantes avançados e especialistas que cumpram os requisitos acadêmicos, de experiência supervisionada, formação específica e avaliação correspondentes a cada nível de certificação.' },
    { question: 'Quais são os níveis de certificação disponíveis?', answer: 'A ASCAD LATAM oferece uma trajetória progressiva de desenvolvimento profissional: OST – Operador Socioterapêutico. EPR/ER – Treinador de Recuperação (Recovery Coach). CCAAD I – Conselheiro Associado em Adições. CCAAD II – Técnico em Counselling em Adições. CCAAD III – Licenciado Profissional em Counselling Avançada Não Clínica. CCAAD IV – Supervisor Clínico Certificado em Adições.' },
    { question: 'Qual é a validade da certificação?', answer: 'A certificação tem validade de dois (2) anos. Ao final desse período, o profissional deverá realizar o processo de recertificação para manter ativa sua credencial profissional.' },
    { question: 'Qual é o procedimento de recertificação?', answer: 'A recertificação é realizada a cada dois anos e exige comprovar a participação em atividades de atualização profissional mediante a apresentação de horas de educação continuada, capacitação especializada, congressos, seminários ou programas de formação relacionados ao campo das adições e da recuperação.' },
    { question: 'O que acontece se eu não for aprovado no exame de certificação?', answer: 'A aprovação no exame internacional é um requisito para obter a certificação. Se o candidato não alcançar a pontuação exigida, poderá realizar novamente o exame de acordo com as políticas e procedimentos vigentes estabelecidos pela ASCAD LATAM.' },
    { question: 'A experiência obtida em outros países é reconhecida?', answer: 'Sim. A experiência profissional obtida em outros países pode ser reconhecida desde que esteja devidamente documentada, seja verificável e cumpra os requisitos de experiência supervisionada estabelecidos para o nível de certificação solicitado.' },
    { question: 'Posso trabalhar em qualquer país da América Latina com uma certificação ASCAD LATAM?', answer: 'A certificação ASCAD LATAM credencia competências profissionais com padrões internacionais reconhecidos para o trabalho em adições e recuperação na América Latina. No entanto, o exercício profissional pode estar sujeito às leis, regulamentações e requisitos específicos de cada país. Por isso, recomenda-se consultar o representante nacional da ASCAD LATAM ou as autoridades competentes do país onde se pretende exercer. A certificação garante que o profissional possui as competências necessárias para atuar de acordo com padrões internacionais, mas não substitui os requisitos legais que possam existir em cada jurisdição.' },
    { question: 'Posso me certificar em mais de um nível ao mesmo tempo?', answer: 'Sim. Um candidato pode solicitar mais de uma certificação simultaneamente, desde que cumpra todos os requisitos acadêmicos, de experiência, formação específica e prática supervisionada estabelecidos para cada nível.' },
    { question: 'Existem benefícios para pessoas associadas e organizações afiliadas?', answer: 'Sim. As pessoas associadas e as organizações afiliadas podem acessar benefícios como: descontos em processos de certificação e recertificação, acesso preferencial a capacitações, congressos e eventos acadêmicos, participação em redes profissionais nacionais e internacionais, acesso a recursos educacionais especializados, oportunidades de desenvolvimento profissional contínuo, reconhecimento institucional dentro da rede ASCAD LATAM, oportunidades de colaboração acadêmica e profissional.' },
    { question: 'Por que a certificação ASCAD LATAM é importante?', answer: 'A certificação ASCAD LATAM permite validar competências profissionais por meio de padrões internacionais reconhecidos, fortalecendo a credibilidade profissional, a qualidade dos serviços, a ética da prática e o desenvolvimento contínuo da força de trabalho especializada em adições e recuperação. Além disso, oferece uma trajetória estruturada de crescimento profissional que facilita o desenvolvimento progressivo de competências desde níveis de entrada e apoio até níveis avançados de supervisão clínica e liderança.' },
    { question: 'Como inicio meu processo de certificação?', answer: 'O candidato deve selecionar o nível de certificação correspondente à sua formação e experiência, preencher a documentação exigida, apresentar as referências profissionais, comprovar as horas de experiência e formação exigidas, assinar o Código de Ética Profissional e ser aprovado no exame internacional correspondente. Para obter informações específicas sobre requisitos, datas de inscrição e procedimentos administrativos, pode entrar em contato com o representante da ASCAD LATAM em seu país.' }
  ]
}

const faqs = computed(() => faqsContent[locale.value] || faqsContent.es)

const consortium = computed(() => [
  { name: 'ASCAD LATAM', icon: '🏛️', role: t('nav.brandLabel') },
])
</script>

<style scoped>
/* TABLE OF CONTENTS */
.toc-section { background: var(--bg-light); padding: 48px 0; }
.toc-intro {
  text-align: center;
  font-size: .875rem;
  color: var(--text-muted);
  margin-bottom: 28px;
}
.toc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.toc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toc-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
}
.toc-item:hover .toc-icon {
  background: var(--accent);
  color: var(--white);
}
.toc-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
  margin-bottom: 14px;
  transition: all 0.3s ease;
}
.toc-label { font-weight: 600; color: var(--text); font-size: .9375rem; }
.toc-desc { font-size: .8rem; color: var(--text-muted); margin-top: 4px; }

/* COMPARISON TABLE */
.comparison-section { background: var(--white); }
.table-wrap { overflow-x: auto; margin-bottom: 24px; }
.comparison-table { width: 100%; border-collapse: collapse; min-width: 800px; }
.comparison-table thead { background: var(--primary); }
.comparison-table th {
  padding: 18px 16px;
  text-align: left;
  font-family: var(--font-mono);
  font-size: .625rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
}
.comparison-table th.text-right { text-align: right; }
.comparison-table td { padding: 18px 16px; border-bottom: 1px solid var(--line-light); font-size: .875rem; vertical-align: middle; }
.comparison-table .row-highlight { background: var(--accent-light); }
.comparison-table .row-highlight td:first-child { border-left: 3px solid var(--accent); }

.cert-cell { display: flex; align-items: center; gap: 12px; }
.cert-code-badge {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  padding: 4px 8px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.row-highlight .cert-code-badge { background: var(--accent-dark); }
.cert-cell strong { color: var(--text); font-size: .875rem; }
.td-desc { color: var(--text-muted); font-size: .8125rem; max-width: 220px; }
.td-center { text-align: center; color: var(--text-secondary); font-size: .8125rem; }
.td-price { text-align: right; font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--accent-dark); }

.table-legend { display: flex; gap: 24px; flex-wrap: wrap; }
.legend-item { display: flex; align-items: center; gap: 8px; font-size: .8rem; color: var(--text-muted); }
.legend-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

/* CERTIFIED PROFESSIONALS */
.certified-section { background: var(--bg-light); }
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
  margin-top: 40px;
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

/* DETAILS SECTION */
.details-section { background: var(--bg-light); }
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.cert-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  border: 1px solid var(--line-light);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
  animation: fadeInUp 0.5s ease backwards;
  animation-delay: var(--delay);
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.cert-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
  transform: translateY(-2px);
}
.cert-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease;
}
.cert-header:hover { background: var(--bg-light); }

.cert-level { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; }
.cert-code {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .1em;
  color: var(--accent-dark);
  background: var(--accent-light);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
}
.cert-icon { font-size: 1.75rem; }
.cert-title-area { flex: 1; min-width: 0; }
.cert-title-area h3 { font-family: var(--font-display); font-size: 1.125rem; color: var(--text); margin-bottom: 4px; line-height: 1.2; display: flex; align-items: center; gap: 8px; }
.cert-summary { font-size: .8125rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.cert-meta { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
.cert-price { text-align: right; }
.price-amount { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--accent-dark); }
.price-period { font-size: .6875rem; color: var(--text-muted); }

.expand-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--bg-light);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: pointer;
}
.expand-btn:hover { background: var(--accent-light); border-color: var(--accent); color: var(--accent-dark); }
.expand-icon { transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.is-expanded .expand-icon { transform: rotate(180deg); }

.cert-body { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.cert-body.is-open { max-height: 3000px; }

.cert-body-inner { padding: 0 24px 28px; border-top: 1px solid var(--line-light); }
.cert-description { padding: 20px 0; border-bottom: 1px solid var(--line-light); margin-bottom: 20px; }
.cert-description p { font-size: .9375rem; color: var(--text-secondary); line-height: 1.75; }

.cert-details { display: flex; flex-direction: column; gap: 20px; }
.detail-section h5 {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: .625rem; font-weight: 600;
  letter-spacing: .15em; text-transform: uppercase; color: var(--accent-dark); margin-bottom: 12px;
}

.competencies-list { display: flex; flex-direction: column; gap: 8px; }
.competencies-list li { display: flex; align-items: flex-start; gap: 10px; font-size: .8375rem; color: var(--text-secondary); line-height: 1.5; }
.comp-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; margin-top: 6px; }

.axis-blocks { display: flex; flex-direction: column; gap: 12px; }
.axis-block {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius);
  overflow: hidden;
}
.axis-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
.axis-header:hover { background: rgba(201,168,76,0.1); }
.axis-chevron {
  color: var(--text-muted);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}
.axis-block.is-expanded .axis-chevron { transform: rotate(180deg); }
.axis-name {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--white);
  background: var(--accent-dark);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.axis-desc { font-size: .75rem; color: var(--text-muted); }
.axis-items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  padding: 0 16px;
}
.axis-block.is-expanded .axis-items {
  max-height: 2000px;
  padding: 0 16px 16px;
}
.axis-items li { display: flex; align-items: flex-start; gap: 8px; font-size: .8125rem; color: var(--text-secondary); line-height: 1.5; padding: 6px 0; border-bottom: 1px solid var(--line-light); }
.axis-items li:last-child { border-bottom: none; }

.areas-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.area-tag {
  font-size: .75rem; padding: 5px 12px;
  background: var(--accent-light); border: 1px solid rgba(201,168,76,0.2);
  border-radius: 999px; color: var(--accent-dark); font-weight: 500; transition: all 0.2s ease;
}
.area-tag:hover { background: var(--accent); color: var(--white); }

.detail-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.req-list { display: flex; flex-direction: column; gap: 6px; }
.req-list li { font-size: .8rem; color: var(--text-muted); padding-left: 14px; position: relative; }
.req-list li::before { content: '—'; position: absolute; left: 0; color: var(--accent); font-size: .7rem; }

.hours-grid { display: flex; flex-direction: column; gap: 8px; }
.hour-badge { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-light); border-radius: var(--radius); border: 1px solid var(--line-light); }
.hour-value { font-family: var(--font-display); font-size: 1.125rem; font-weight: 700; color: var(--accent-dark); }
.hour-label { font-size: .75rem; color: var(--text-muted); }

.cert-actions { display: flex; gap: 12px; padding-top: 16px; border-top: 1px solid var(--line-light); margin-top: 8px; }
.cert-actions .btn { flex: 1; justify-content: center; }

/* PROCESS SECTION */
.process-section { background: var(--primary); }
.process-track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
  margin: 56px 0;
}
.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 0 12px;
}
.step-number {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--white);
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(201,168,76,0.5);
  margin-bottom: 24px;
  border: 3px solid rgba(255,255,255,0.3);
}
.step-connector {
  position: absolute;
  top: 32px;
  left: calc(50% + 40px);
  right: calc(-50% + 40px);
  height: 3px;
  background: linear-gradient(90deg, var(--accent), rgba(255,255,255,0.2));
  z-index: 1;
}
.step-content h4 { font-family: var(--font-display); color: var(--white); font-size: 1rem; margin-bottom: 8px; }
.step-content p { font-size: .8125rem; color: rgba(255,255,255,0.7); line-height: 1.6; }
.step-note {
  display: inline-block;
  margin-top: 10px;
  font-size: .6875rem;
  padding: 4px 10px;
  background: rgba(201,168,76,0.2);
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: 999px;
  color: var(--accent);
  font-weight: 500;
}

.process-cta { text-align: center; }

/* FAQ SECTION */
.faq-section { background: var(--white); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}
.faq-item.is-open { border-color: var(--accent-light); box-shadow: var(--shadow-sm); }

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: .9375rem;
  font-weight: 600;
  color: var(--text);
  gap: 16px;
  transition: background 0.2s;
}
.faq-question:hover { background: var(--accent-light); }
.faq-item.is-open .faq-question { background: var(--accent-light); color: var(--accent-dark); }
.faq-icon { flex-shrink: 0; transition: transform 0.3s ease; color: var(--text-muted); }
.faq-item.is-open .faq-icon { transform: rotate(180deg); color: var(--accent-dark); }

.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.faq-item.is-open .faq-answer { max-height: 2000px; }
.faq-answer-inner { padding: 0 24px 20px; }
.faq-answer-inner p { font-size: .9rem; color: var(--text-secondary); line-height: 1.75; }

.faq-cta { text-align: center; margin-top: 48px; padding-top: 48px; border-top: 1px solid var(--line-light); }
.faq-cta p { color: var(--text-muted); margin-bottom: 16px; }

/* ALLIANCE */
.alliance-section { background: var(--bg-light); }
.alliance-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.alliance-text .eyebrow { margin-bottom: 16px; }
.alliance-text h2 { margin-bottom: 20px; }
.alliance-text p { color: var(--text-secondary); line-height: 1.8; }
.alliance-visual { background: var(--white); border-radius: var(--radius-xl); padding: 48px; border: 1px solid var(--line-light); }
.consorcio-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.consorcio-item {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: 8px; padding: 24px 16px;
  background: var(--bg-light); border-radius: var(--radius-lg);
  border: 1px solid var(--line-light); transition: all 0.3s ease;
}
.consorcio-item:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: var(--accent-light); }
.org-icon { font-size: 2rem; }
.org-name { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--text); }
.org-role { font-size: .72rem; color: var(--text-muted); }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .toc-grid { grid-template-columns: repeat(2, 1fr); }
  .cert-grid { grid-template-columns: repeat(2,1fr); }
  .process-track { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .step-connector { display: none; }
  .alliance-inner { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 768px) {
  .toc-grid { grid-template-columns: 1fr; }
  .cert-grid { grid-template-columns: 1fr; }
  .process-track { grid-template-columns: 1fr; }
  .detail-row { grid-template-columns: 1fr; }
  .cert-header { flex-wrap: wrap; }
  .cert-meta { width: 100%; justify-content: space-between; margin-top: 12px; }
  .consorcio-grid { grid-template-columns: 1fr; }
}

/* FULLSCREEN MODAL */
.cert-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 37, 64, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.cert-modal {
  background: var(--white);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-xl);
  outline: none;
}
.cert-modal:focus-visible {
  box-shadow: var(--shadow-xl), 0 0 0 3px var(--accent);
}
.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-light);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  cursor: pointer;
  transition: all .2s;
  z-index: 10;
}
.modal-close:hover { background: var(--primary); color: var(--white); border-color: var(--primary); }
.modal-header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  padding: 48px 40px 40px;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  color: var(--white);
}
.modal-flact {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.modal-cert-title {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.modal-code {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .1em;
  background: var(--accent);
  color: var(--primary);
  padding: 8px 16px;
  border-radius: var(--radius);
  flex-shrink: 0;
}
.modal-header h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  margin-bottom: 8px;
  color: var(--white);
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.modal-summary { font-size: .9375rem; color: rgba(255,255,255,0.75); }
.modal-body { padding: 40px; }
.modal-content-inner { display: flex; flex-direction: column; gap: 32px; }
.modal-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.modal-section h5 {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 12px;
}
.modal-content-inner .cert-description p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}
.modal-standard-badge {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.standard-tap { background: #1565c0; color: #fff; }
.standard-tip64 { background: #2e7d32; color: #fff; }
.standard-tip52 { background: #6a1b9a; color: #fff; }
.standard-combined { background: var(--accent); color: var(--primary); }

.section-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line-light);
}
.section-divider svg { color: var(--accent); flex-shrink: 0; }
.section-divider h4 {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text);
  margin: 0;
}
.technical-foundation, .professional-profile, .training-axes, .competencies-section {
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  padding: 24px;
}
.technical-text, .profile-text {
  font-size: .9375rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}
.axes-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.axis-tag {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 8px 14px;
  font-size: .8125rem;
  color: var(--text);
  font-weight: 500;
}
.axis-tag:hover { border-color: var(--accent); background: var(--accent-light); }
.based-on-text {
  font-size: .8125rem;
  color: var(--text-muted);
  font-style: italic;
  margin-bottom: 12px;
  padding-left: 4px;
}

@media (max-width: 768px) {
  .cert-modal { max-height: 100vh; border-radius: 0; }
  .modal-header { padding: 36px 24px 28px; }
  .modal-body { padding: 24px; }
  .modal-meta { grid-template-columns: 1fr; }
  .cert-modal-overlay { padding: 0; }
  .modal-cert-title { flex-wrap: wrap; }
  .modal-standard-badge { order: -1; width: 100%; text-align: center; margin-bottom: 8px; }
}
</style>
