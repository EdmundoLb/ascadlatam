<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Certificaciones disponibles</div>
        <h1>Cada nivel,<br>un estándar <em class="gold">distinto</em></h1>
        <p class="lead" style="margin-top:20px;">
          Seis niveles de certificación progresivos, desde el acompañamiento inicial hasta la supervisión profesional especializada. Todos alineados con estándares internacionales adaptados culturalmente a la región.
        </p>
      </div>
    </section>

    <section class="section toc-section">
      <div class="container">
        <p class="toc-intro">Navegá rápidamente a la sección que necesites</p>
        <div class="toc-grid">
          <a href="#comparativa" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </span>
            <span class="toc-label">Vista comparativa</span>
            <span class="toc-desc">Compará todos los niveles</span>
          </a>
          <a href="#detalles" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </span>
            <span class="toc-label">Requisitos por nivel</span>
            <span class="toc-desc">Competencias y horas requeridas</span>
          </a>
          <a href="#proceso" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <span class="toc-label">Proceso de certificación</span>
            <span class="toc-desc">Cómo obtener tu certificación</span>
          </a>
          <a href="#faq" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </span>
            <span class="toc-label">Preguntas frecuentes</span>
            <span class="toc-desc">Resolvé tus dudas</span>
          </a>
        </div>
      </div>
    </section>

    <!-- COMPARISON TABLE -->
    <section id="comparativa" class="section comparison-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Comparativa rápida</div>
          <h2>Todos los niveles <em class="gold">lado a lado</em></h2>
        </div>

        <div class="table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Certificación</th>
                <th>Descripción breve</th>
                <th>Formación</th>
                <th>Experiencia</th>
                <th>Supervisión</th>
                <th class="text-right">Cuota bianual</th>
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
            <span>Todas las certificaciones incluyen firma del código de ética y examen de evaluación</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot"></span>
            <span>Los montos están en USD y no son reembolsables</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATION DETAILS -->
    <section id="detalles" class="section details-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Niveles de certificación</div>
          <h2>Conocé cada <em class="gold">certificación</em></h2>
          <p class="lead" style="margin-top:16px; max-width: 600px;">Hacé click en cada nivel para ver los requisitos completos, competencias y horas requeridas.</p>
        </div>

        <div class="cert-grid">
          <article
            v-for="(cert, index) in certifications"
            :key="cert.code"
            class="cert-card"
            :style="{ '--delay': `${index * 0.08}s` }"
            @click="openModal(cert.code)"
          >
            <div class="cert-header">
              <div class="cert-level">
                <span class="cert-code">{{ cert.code }}</span>
                <span class="cert-icon" v-html="getLevelIcon(cert.code)"></span>
              </div>
              <div class="cert-title-area">
                <h3>{{ cert.name }}</h3>
                <p class="cert-summary">{{ cert.summary }}</p>
              </div>
              <div class="cert-meta">
                <div class="cert-price">
                  <span class="price-amount">${{ cert.fee }}</span>
                  <span class="price-period">/bianual</span>
                </div>
                <button class="expand-btn" :aria-label="`Ver más sobre ${cert.name}`">
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
          <div class="eyebrow">Proceso de certificación</div>
          <h2>¿Cómo funciona la <em class="gold">certificación</em>?</h2>
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
          <router-link to="/solicitud" class="btn btn-gold btn-lg">Comenzar mi solicitud</router-link>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section faq-section">
      <div class="container">
        <div class="section-header centered">
          <div class="eyebrow">Preguntas frecuentes</div>
          <h2>Resolved tus <em class="gold">dudas</em></h2>
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
          <p>¿No encontraste la respuesta que buscabas?</p>
          <router-link to="/contacto" class="btn btn-outline">Contactanos</router-link>
        </div>
      </div>
    </section>

    <!-- ALLIANCE STRIP -->
    <section class="section alliance-section">
      <div class="container">
        <div class="alliance-inner">
          <div class="alliance-text">
            <span class="eyebrow">Consorcio Latinoamericano de Certificación</span>
            <h2>Una certificación que <em class="gold">garantiza calidad</em></h2>
            <p>ASCAD LATAM asegura que cada profesional certificado cumpla con los más altos estándares de calidad, ética y competencia en el campo de las adicciones, basados en TAP 21, TIP 64 y TIP 52.</p>
            <router-link to="/contacto" class="btn btn-gold btn-lg" style="margin-top:24px;">Contactanos</router-link>
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
      <div class="cert-modal" role="dialog" aria-modal="true" :aria-label="`Detalles de ${certData?.name}`" ref="modalRef" tabindex="-1" @click.stop>
        <button class="modal-close" @click="closeModal" aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="modal-header">
          <div class="modal-flact">Programa ASCAD LATAM de Formación en Adicciones</div>
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
                <h4>Fundamentación Técnica</h4>
              </div>
              <p class="technical-text">{{ certData.technicalDescription }}</p>
            </div>
            <div class="professional-profile" v-if="certData.professionalProfile">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <h4>Perfil Profesional</h4>
              </div>
              <p class="profile-text">{{ certData.professionalProfile }}</p>
            </div>
            <div class="training-axes" v-if="certData.trainingAxes?.length">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <h4>Ejes de Formación</h4>
              </div>
              <p v-if="certData.basedOn" class="based-on-text">{{ certData.basedOn }}</p>
              <div class="axes-tags">
                <span v-for="(axis, i) in certData.trainingAxes" :key="i" class="axis-tag">{{ axis }}</span>
              </div>
            </div>
            <div class="competencies-section">
              <div class="section-divider">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <h4>Competencias por Eje</h4>
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
                <h5>Ámbitos de desempeño</h5>
                <div class="areas-tags">
                  <span v-for="area in certData.areas" :key="area" class="area-tag">{{ area }}</span>
                </div>
              </div>
              <div class="modal-section" v-if="certData.requirements?.length">
                <h5>Requisitos</h5>
                <ul class="req-list">
                  <li v-for="req in certData.requirements" :key="req">{{ req }}</li>
                </ul>
              </div>
              <div class="modal-section" v-if="certData.hours?.length">
                <h5>Horas requeridas</h5>
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
                Aplicar ahora
              </button>
              <button @click="goToContacto()" class="btn btn-ghost">Más información</button>
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
import { levelIcons } from '@/data/certificaciones'
import { certificationsFull } from '@/data/certificacionesFull'

const router = useRouter()
const modalRef = ref(null)

const activeModal = ref(null)
const openFaq = ref(null)
const expandedAxis = ref(null)
let lastFocusedElement = null

const certData = computed(() => {
  const cert = certificationsFull.find(c => c.code === activeModal.value)
  if (!cert) return null
  return {
    ...cert,
    competencies: transformCompetencies(cert.competencies)
  }
})

function transformCompetencies(comp) {
  const axes = []
  if (comp.saberConocer) {
    axes.push({ axis: 'Saber Conocer', color: '#1565c0', items: comp.saberConocer })
  }
  if (comp.saberHacer) {
    axes.push({ axis: 'Saber Hacer', color: '#2e7d32', items: comp.saberHacer })
  }
  if (comp.saberSer) {
    axes.push({ axis: 'Saber Ser', color: '#c9a84c', items: comp.saberSer })
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

const comparisonData = [
  { code: 'OST',      name: 'Operador Socioterapéutico',       desc: 'Nivel inicial de acompañamiento supervisado',     formacion: '80h',    experiencia: '1.000h',  supervision: '100h',    fee: 30,  highlight: false },
  { code: 'EPR',      name: 'Entrenador de Recuperación',       desc: 'Apoyo desde la experiencia vivida en recuperación', formacion: '80h',    experiencia: '100h',    supervision: '100h',   fee: 30,  highlight: false },
  { code: 'CCAAD I',  name: 'Consejero Asociado Junior',       desc: 'Primer nivel técnico profesional',                formacion: '120h',   experiencia: '1.500h',  supervision: '60h',    fee: 50,  highlight: false },
  { code: 'CCAAD II', name: 'Consejero Certificado',          desc: 'Competencias avanzadas en consejería',            formacion: '150h',   experiencia: '2.000h',  supervision: '96h',    fee: 75,  highlight: false },
  { code: 'CCAAD III',name: 'Consejero Senior',               desc: 'Nivel avanzado profesional con autonomía',          formacion: '170h',   experiencia: '3.000h',  supervision: '120h',   fee: 100, highlight: true  },
  { code: 'CCAAD IV', name: 'Supervisor Profesional',          desc: 'Máximo nivel: supervisión y liderazgo',          formacion: '40h',    experiencia: '6.000h',  supervision: '120h',   fee: 125, highlight: false },
]

const certColors = {
  'OST':      { primary: '#1a3a5c', accent: '#c9a84c' },
  'EPR':      { primary: '#2e7d32', accent: '#81c784' },
  'CCAAD I':  { primary: '#b85c1a', accent: '#e8a050' },
  'CCAAD II': { primary: '#6a1b9a', accent: '#ba68c8' },
  'CCAAD III':{ primary: '#1565c0', accent: '#64b5f6' },
  'CCAAD IV': { primary: '#0a2540', accent: '#c9a84c' },
}

const certifications = [
  {
    code: 'OST', fee: 30,
    name: 'Operador Socioterapéutico',
    summary: 'Nivel inicial de acompañamiento supervisado en comunidades terapéuticas.',
    description: 'Nivel inicial en el abordaje de las adicciones. Brinda acompañamiento supervisado en comunidades terapéuticas, centros de tratamiento y programas de intervención temprana.',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['OST'].primary, items: [
        'Comprensión integral de las adicciones desde enfoques médicos, psicológicos y sociales.',
        'Capacidad para identificar factores de riesgo, señales de consumo y necesidades de apoyo.',
        'Aplicación de estrategias de acompañamiento, orientación y seguimiento terapéutico.',
        'Trabajo colaborativo con equipos interdisciplinarios y redes de apoyo.',
        'Manejo ético y confidencial de la información.',
        'Desarrollo de habilidades de comunicación, escucha activa y empatía.',
        'Intervención básica en crisis y derivación oportuna.',
        'Promoción del bienestar, la inclusión y la recuperación integral de la persona.',
        'Compromiso con la formación continua, el autocuidado y la responsabilidad profesional.'
      ]},
      { axis: 'Ejes de Formación del Operador Socioterapéutico', color: certColors['OST'].primary, items: [
        'Comprensión de la Adicción',
        'Conocimiento sobre el Tratamiento',
        'Aplicación a la Práctica',
        'Preparación Profesional',
        'Funciones del Operador Socioterapéutico'
      ]},
      { axis: 'Perfil Profesional', color: certColors['OST'].accent, items: [
        'El operador socioterapéutico actúa con sensibilidad humana, respeto por la diversidad y vocación de servicio, fortaleciendo procesos de recuperación centrados en la persona y contribuyendo al desarrollo de entornos terapéuticos seguros y humanizados.'
      ]}
    ],
    areas: ['Comunidades Terapéuticas', 'Centros de Día', 'Programas de Prevención', 'Acompañamiento Familiar'],
    requirements: ['Secundaria completa o equivalente', '3 avales profesionales', 'Firma del código de ética', 'Aprobación del examen OST', 'Ejercicio laboral en el país de origen'],
    hours: [{ value: '80h', label: 'Formación' }, { value: '1.000h', label: 'Experiencia supervisada' }, { value: '100h', label: 'Entrenamiento práctico' }]
  },
  {
    code: 'EPR', fee: 30,
    name: 'Entrenador de Recuperación',
    summary: 'Apoyo desde la experiencia vivida en recuperación.',
    description: 'Para personas con experiencia vivida en recuperación de adicciones. Brinda apoyo emocional, motivacional e informativo desde la empatía de quien ha transitado el mismo camino.',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['EPR'].primary, items: [
        'Comprensión del proceso de recuperación y del trastorno por uso de sustancias.',
        'Capacidad para identificar señales de riesgo y necesidades de apoyo.',
        'Habilidades de escucha activa, comunicación empática y acompañamiento humano.',
        'Orientación y motivación basada en la experiencia compartida.',
        'Facilitación de grupos de apoyo y espacios seguros de recuperación.',
        'Promoción de hábitos saludables, bienestar y prevención de recaídas.',
        'Conexión de personas con recursos comunitarios y redes de recuperación.',
        'Aplicación de principios éticos, confidencialidad y límites profesionales.',
        'Sensibilidad cultural, inclusión y respeto por la diversidad.',
        'Compromiso con el autocuidado, la formación continua y el crecimiento personal.'
      ]},
      { axis: 'Ejes de Formación del Entrenador de Recuperación', color: certColors['EPR'].primary, items: [
        'Conocimiento sobre Recuperación y Trastorno por Uso de Sustancias',
        'Rol y Funciones del Entrenador de Recuperación',
        'Habilidades de Apoyo y Acompañamiento',
        'Ética y Límites Profesionales',
        'Diversidad, Inclusión y Sensibilidad Cultural',
        'Construcción Comunitaria y Redes de Recuperación',
        'Desarrollo Profesional y Autocuidado'
      ]},
      { axis: 'Perfil Profesional', color: certColors['EPR'].accent, items: [
        'El Entrenador de Recuperación actúa como modelo positivo y agente de esperanza, fortaleciendo procesos de recuperación desde el apoyo mutuo, la integración comunitaria y el acompañamiento no clínico, siempre desde una visión humana y libre de estigmas.'
      ]}
    ],
    areas: ['Programas de Recuperación', 'Comunidades Terapéuticas', 'Centros de Reinserción', 'Redes de Apoyo comunitario'],
    requirements: ['Experiencia vivida en recuperación (mín. 2 años)', 'Secundaria completa o equivalente', '2 a 3 avales personales o profesionales', 'Firma del código de ética', 'Aprobación del examen EPR'],
    hours: [{ value: '80h', label: 'Formación' }, { value: '80h', label: 'Entrenamiento práctico' }]
  },
  {
    code: 'CCAAD I', fee: 50,
    name: 'Consejero Asociado Junior',
    summary: 'Primer nivel técnico profesional con intervenciones supervisadas.',
    description: 'Primer nivel técnico profesional. Realiza intervenciones estructuradas y supervisadas para la atención de personas con trastornos por uso de sustancias (TUS).',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['CCAAD I'].primary, items: [
        'Comprensión integral del trastorno por uso de sustancias y sus efectos biopsicosociales.',
        'Identificación de factores de riesgo, protección, recaída y recuperación.',
        'Aplicación de procesos de tamizaje, admisión y evaluación inicial.',
        'Uso de entrevistas estructuradas y herramientas básicas de evaluación.',
        'Diseño de metas terapéuticas y seguimiento del proceso de recuperación.',
        'Coordinación de derivaciones y trabajo con redes de apoyo.',
        'Desarrollo de consejería individual, grupal y familiar.',
        'Aplicación de entrevista motivacional, psicoeducación y prevención de recaídas.',
        'Promoción de habilidades de afrontamiento, autocuidado y adherencia terapéutica.',
        'Manejo ético de la información, confidencialidad y responsabilidad profesional.',
        'Trabajo interdisciplinario con enfoque humano, empático y libre de estigmas.'
      ]},
      { axis: 'Ejes de Formación del Consejero Asociado Junior – CCAAD I', color: certColors['CCAAD I'].primary, items: [
        'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        'Selección, Evaluación y Participación',
        'Planificación, Colaboración y Derivación del Tratamiento',
        'Consejería',
        'Responsabilidad Profesional y Ética'
      ]},
      { axis: 'Perfil Profesional', color: certColors['CCAAD I'].accent, items: [
        'El Consejero Asociado Junior CCAAD I brinda apoyo estructurado y acompañamiento terapéutico desde una perspectiva ética, técnica y centrada en la persona, fortaleciendo procesos de recuperación y bienestar integral.'
      ]}
    ],
    areas: ['Centros de Tratamiento', 'Hospitales', 'Programas Ambulatorios', 'Comunidades Terapéuticas', 'Centros de Reinserción'],
    requirements: ['Secundaria completa o equivalente', '3 referencias profesionales', 'Firma del código de ética', 'Aprobación del examen internacional', 'Ejercicio en el país de origen'],
    hours: [{ value: '120h', label: 'Formación' }, { value: '1.500h', label: 'Experiencia supervisada' }, { value: '60h', label: 'Entrenamiento práctico' }]
  },
  {
    code: 'CCAAD II', fee: 75,
    name: 'Consejero Certificado',
    summary: 'Competencias avanzadas en consejería con mayor responsabilidad profesional.',
    description: 'Competencias avanzadas en consejería con mayor responsabilidad profesional. Realiza evaluaciones integrales, diseña planes de tratamiento individualizados y coordina redes de apoyo.',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['CCAAD II'].primary, items: [
        'Comprensión del trastorno por uso de sustancias desde un enfoque biopsicosocial.',
        'Identificación de factores de riesgo, recaída, recuperación y necesidades de apoyo.',
        'Aplicación de procesos de tamizaje, admisión, orientación y evaluación inicial.',
        'Uso de entrevistas estructuradas y herramientas básicas de detección.',
        'Participación en planes de tratamiento centrados en la persona.',
        'Coordinación de derivaciones y acceso a redes de apoyo comunitario.',
        'Desarrollo de consejería individual y grupal de apoyo.',
        'Aplicación de escucha activa, motivación y psicoeducación.',
        'Promoción de habilidades de afrontamiento y hábitos saludables.',
        'Registro técnico y seguimiento del proceso terapéutico.',
        'Aplicación de principios éticos, confidencialidad y responsabilidad profesional.',
        'Trabajo colaborativo dentro de equipos interdisciplinarios.'
      ]},
      { axis: 'Ejes de Formación del Consejero Certificado – CCAAD II', color: certColors['CCAAD II'].primary, items: [
        'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        'Selección, Evaluación y Participación',
        'Planificación, Colaboración y Derivación del Tratamiento',
        'Consejería',
        'Responsabilidad Profesional y Ética'
      ]},
      { axis: 'Perfil Profesional', color: certColors['CCAAD II'].accent, items: [
        'El Consejero Certificado CCAAD II actúa con empatía, responsabilidad y compromiso humano, contribuyendo al acompañamiento terapéutico y fortaleciendo procesos de recuperación desde una atención ética, organizada y centrada en la dignidad de la persona.'
      ]}
    ],
    areas: ['Centros de Tratamiento Especializado', 'Hospitales Generales', 'Programas de Rehabilitación', 'Consultoría en Políticas Públicas'],
    requirements: ['Bachillerato o secundaria completa', '3 referencias profesionales', 'Firma del código de ética', 'Aprobación del examen', 'Ejercicio en país miembro'],
    hours: [{ value: '150h', label: 'Formación' }, { value: '2.000h', label: 'Experiencia supervisada' }, { value: '96h', label: 'Entrenamiento práctico' }]
  },
  {
    code: 'CCAAD III', fee: 100,
    name: 'Consejero Senior',
    summary: 'Nivel avanzado profesional con evaluación biopsicosocial.',
    description: 'Nivel avanzado profesional con competencias para la evaluación biopsicosocial, diagnósticos funcionales y manejo de casos complejos.',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['CCAAD III'].primary, items: [
        'Comprensión avanzada del trastorno por uso de sustancias desde enfoques neurobiológicos, psicológicos y sociales.',
        'Identificación de factores de riesgo, protección y capital de recuperación.',
        'Aplicación de procesos avanzados de evaluación, admisión y entrevista profesional.',
        'Integración de información biopsicosocial para la planificación terapéutica.',
        'Diseño de planes de tratamiento estructurados y orientados a metas.',
        'Coordinación de recursos institucionales, comunitarios y redes de apoyo.',
        'Desarrollo de consejería individual, grupal y familiar educativa.',
        'Aplicación de entrevista motivacional y enfoques cognitivo-conductuales.',
        'Fortalecimiento de habilidades de afrontamiento, prevención de recaídas y empoderamiento personal.',
        'Seguimiento y evaluación continua del proceso de acompañamiento.',
        'Aplicación de principios éticos, legales y de confidencialidad.',
        'Participación en procesos de supervisión profesional, mejora continua y trabajo interdisciplinario.'
      ]},
      { axis: 'Ejes de Formación del Consejero Senior – CCAAD III', color: certColors['CCAAD III'].primary, items: [
        'Comprensión del Trastorno por Uso de Sustancias Psicoactivas',
        'Selección, Evaluación y Participación',
        'Planificación, Colaboración y Derivación del Tratamiento',
        'Consejería Avanzada',
        'Responsabilidad Profesional y Ética'
      ]},
      { axis: 'Perfil Profesional', color: certColors['CCAAD III'].accent, items: [
        'El profesional CCAAD III actúa como líder en procesos de acompañamiento avanzado, promoviendo la recuperación integral, el fortalecimiento de redes de apoyo y la atención centrada en la persona, siempre dentro de los límites éticos y profesionales de su competencia.'
      ]}
    ],
    areas: ['Centros de Alta Complejidad', 'Hospitales Psiquiátricos', 'Consultoría Privada', 'Formación y Docencia', 'Dirección de Programas'],
    requirements: ['Licenciatura en Psicología, Trabajo Social o carreras afines', '3 referencias profesionales', 'Firma del código de ética', 'Aprobación del examen', 'Ejercicio en país miembro'],
    hours: [{ value: '170h', label: 'Formación' }, { value: '3.000h', label: 'Experiencia en consejería' }, { value: '120h', label: 'Práctica supervisada' }]
  },
  {
    code: 'CCAAD IV', fee: 125,
    name: 'Supervisor Profesional en Adicciones',
    summary: 'Máximo nivel: supervisión profesional y liderazgo de equipos.',
    description: 'Máximo nivel de la ruta de certificación. Diseña sistemas de supervisión profesional, lidera equipos de trabajo, garantiza la calidad asistencial y promueve la formación continua.',
    competencies: [
      { axis: 'Competencias Principales', color: certColors['CCAAD IV'].primary, items: [
        'Comprensión de los fundamentos y modelos de supervisión profesional en adicciones.',
        'Gestión de procesos de supervisión, calidad asistencial y desarrollo profesional.',
        'Definición de roles, límites y alcances de la supervisión profesional.',
        'Desarrollo de relaciones de supervisión basadas en confianza, colaboración y aprendizaje reflexivo.',
        'Aplicación de modelos y enfoques integrativos de supervisión.',
        'Análisis de casos profesionales y acompañamiento profesional especializado.',
        'Evaluación objetiva del desempeño profesional y técnico.',
        'Diseño de planes de mejora, seguimiento y retroalimentación estructurada.',
        'Aplicación de principios éticos, legales y normativos en supervisión profesional.',
        'Gestión responsable de información confidencial y toma de decisiones éticas.',
        'Liderazgo profesional, trabajo interdisciplinario y fortalecimiento institucional.',
        'Promoción del aprendizaje continuo, innovación y mejora de la calidad profesional.'
      ]},
      { axis: 'Ejes de Formación del Supervisor Profesional – CCAAD IV', color: certColors['CCAAD IV'].primary, items: [
        'Fundamentos de la Supervisión Profesional',
        'Gestión del Alcance y Roles de la Supervisión',
        'Desarrollo de la Relación de Supervisión',
        'Aplicación de Modelos y Enfoques de Supervisión',
        'Ética, Legalidad y Responsabilidad Profesional',
        'Evaluación y Monitoreo del Desempeño'
      ]},
      { axis: 'Perfil Profesional', color: certColors['CCAAD IV'].accent, items: [
        'El profesional CCAAD IV posee capacidades avanzadas para supervisar, formar y fortalecer equipos de consejería y atención en adicciones, garantizando calidad técnica, ética profesional y desarrollo continuo del talento humano dentro de modelos orientados a la recuperación y estándares internacionales.'
      ]}
    ],
    areas: ['Dirección Clínica', 'Supervisión de Equipos', 'Consultoría Organizacional', 'Formación de Supervisores', 'Asesoría en Políticas de Salud'],
    requirements: ['Licenciatura o superior en salud mental', '3 referencias profesionales', 'Firma del código de ética', 'Aprobación del examen', 'Ejercicio en país miembro'],
    hours: [{ value: '40h', label: 'Formación en supervisión' }, { value: '2.000h', label: 'Como consejero' }, { value: '4.000h', label: 'Supervisión profesional' }, { value: '120h', label: 'Supervisión recibida' }]
  }
]

const processSteps = [
  { title: 'Completá la solicitud', desc: 'Formulario en línea con tus datos personales y profesionales.', note: 'Adjuntá toda la documentación requerida' },
  { title: 'Evaluación del expediente', desc: 'Nuestro equipo revisa tu documentación en 4 a 6 semanas.', note: '90 días para subsanar observaciones' },
  { title: 'Examen de certificación', desc: 'Evaluación según el nivel de certificación elegido.', note: 'Presencial o en línea según disponibilidad' },
  { title: 'Aprobación y pago', desc: 'Cuota bianual según nivel (USD $30 a $125).', note: 'No reembolsable' },
  { title: 'Tu certificación', desc: 'Nombre publicado en el directorio público verificable.', note: 'Válido por 2 años' }
]

const faqs = [
  { question: '¿Cuáles son los requisitos generales para todas las certificaciones?', answer: 'Todos los candidatos deben poseer educación mínima según el nivel, experiencia supervisada en el campo de las adicciones, avales profesionales, firma del código de ética de ASCAD LATAM y aprobar el examen de certificación correspondiente.' },
  { question: '¿Cuánto tiempo es válida la certificación?', answer: 'La certificación ASCAD LATAM tiene validez de 2 años (bianual). Para renovar, es necesario acumular un mínimo de horas de educación continua específicas por nivel y presentar la documentación de renovación antes del vencimiento.' },
  { question: '¿Puedo trabajar en cualquier país de América Latina con la certificación ASCAD LATAM?', answer: 'La certificación ASCAD LATAM está reconocida en los países miembros del Consorcio. Cada país puede tener requisitos adicionales de validación local. Recomendamos consultar con la oficina de certificación de su país para conocer los procesos de revalidación.' },
  { question: '¿Qué pasa si no paso el examen de certificación?', answer: 'Si no aprobás el examen en el primer intento, podés solicitar una nueva fecha de examen dentro de los 90 días siguientes. Se aplicarán fees de reagendamiento según el nivel de certificación. Se permite un máximo de 3 intentos en un período de 12 meses.' },
  { question: '¿Las horas de experiencia en el extranjero son reconocidas?', answer: 'Sí, las horas de experiencia acumuladas en otros países son válidas siempre que puedan ser documentadas adecuadamente y cumplan con los estándares de supervisión requeridos. Los avales profesionales deben provenir de profesionales certificados o instituciones reconocidas.' },
  { question: '¿Hay beneficios para profesionales afiliados a organizaciones miembros?', answer: 'Sí, los profesionales afiliados a organizaciones miembros del Consorcio ASCAD LATAM cuentan con tarifs preferenciales del 20% en la cuota de certificación, acceso a programas de formación continua exclusivos y un proceso de verificación de experiencia simplificado.' },
  { question: '¿Puedo certificarme en más de un nivel a la vez?', answer: 'No, la certificación se obtiene de forma progresiva. Debe completar y certificarse en un nivel antes de poder aplicar al siguiente. CCAAD III es el nivel máximo al que puede aplicar un consejero sin haber certificado niveles anteriores.' }
]

const consortium = [
  { name: 'ASCAD LATAM', icon: '🏛️', role: 'Certificación Internacional' },
]
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
.td-price { text-align: right; font-family: var(--font-display); font-size: 1.125rem; font-weight: 700; color: var(--accent-dark); }

.table-legend { display: flex; gap: 24px; flex-wrap: wrap; }
.legend-item { display: flex; align-items: center; gap: 8px; font-size: .8rem; color: var(--text-muted); }
.legend-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

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
.faq-answer.is-open { max-height: 400px; }
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