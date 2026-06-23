<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('solicitud.aplicacionLinea') }}</div>
        <h1>{{ $t('solicitud.titulo') }}</h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('solicitud.subtitulo') }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <StepIndicator :steps="steps" :current-step="currentStep" @step-click="goToStep" />

        <div class="tabs">
          <button
            v-for="cert in certs"
            :key="cert.code"
            class="tab"
            :class="{ active: activeTab === cert.code }"
            @click="changeTab(cert.code)"
          >
            {{ cert.code }}
          </button>
        </div>

        <div v-for="cert in certs" :key="cert.code" v-show="activeTab === cert.code" class="form-panel">
          <div class="panel-header">
            <div>
              <h2>{{ cert.name }}</h2>
              <p class="muted" style="margin-top:6px;">{{ cert.description }}</p>
            </div>
            <div class="panel-fee">
              <span class="fee-amount">USD ${{ cert.fee }}</span>
              <span class="fee-note">{{ $t('solicitud.cuotaBianual') }}</span>
            </div>
          </div>

          <form
            :ref="el => setFormRef(cert.code, el)"
            :action="`https://formspree.io/f/${formId}`"
            method="POST"
            enctype="multipart/form-data"
            @submit.prevent="handleSubmit($event, cert.code)"
            class="solicitud-form"
          >
            <input type="hidden" name="nivel_certificacion" :value="`${cert.code} – ${cert.name}`" />

            <div class="step-content">
                <fieldset v-show="currentStep === 1" class="fieldset">
                  <legend>{{ $t('solicitud.datosPersonales') }}</legend>
                  <div class="form-grid">
                    <div class="form-group">
                      <label>{{ $t('solicitud.campos.nombre') }} *</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        autocomplete="name"
                        :placeholder="$t('solicitud.placeholders.nombre')"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-nombre`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-nombre`])"
                        :aria-describedby="errors[`${cert.code}-nombre`] ? `${cert.code}-nombre-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-nombre`]" :id="`${cert.code}-nombre-error`" class="field-error">{{ errors[`${cert.code}-nombre`] }}</span>
                    </div>
                    <div class="form-group">
                      <label>{{ $t('solicitud.documentoIdentidad') }} *</label>
                      <input
                        type="text"
                        name="documento"
                        required
                        :placeholder="$t('solicitud.placeholders.documento')"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-documento`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-documento`])"
                        :aria-describedby="errors[`${cert.code}-documento`] ? `${cert.code}-documento-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-documento`]" :id="`${cert.code}-documento-error`" class="field-error">{{ errors[`${cert.code}-documento`] }}</span>
                    </div>
                    <div class="form-group">
                      <label for="fecha_nacimiento">{{ $t('solicitud.fechaNacimiento') }} *</label>
                      <input
                        id="fecha_nacimiento"
                        type="date"
                        name="fecha_nacimiento"
                        required
                        autocomplete="bday"
                        :min="minDate"
                        :max="maxDate"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        @change="validateField('fecha_nacimiento', $event.target.value, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-fecha_nacimiento`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-fecha_nacimiento`])"
                        :aria-describedby="errors[`${cert.code}-fecha_nacimiento`] ? `${cert.code}-fecha_nacimiento-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-fecha_nacimiento`]" :id="`${cert.code}-fecha_nacimiento-error`" class="field-error">{{ errors[`${cert.code}-fecha_nacimiento`] }}</span>
                    </div>
                    <div class="form-group">
                      <label>{{ $t('solicitud.campos.pais') }} *</label>
                      <select
                        name="pais"
                        required
                        autocomplete="country-name"
                        @change="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-pais`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-pais`])"
                        :aria-describedby="errors[`${cert.code}-pais`] ? `${cert.code}-pais-error` : null"
                      >
                        <option value="">{{ $t('solicitud.placeholders.pais') || 'Seleccionar…' }}</option>
                        <option v-for="p in paises" :key="p">{{ p }}</option>
                      </select>
                      <span v-if="errors[`${cert.code}-pais`]" :id="`${cert.code}-pais-error`" class="field-error">{{ errors[`${cert.code}-pais`] }}</span>
                    </div>
                    <div class="form-group">
                      <label>{{ $t('solicitud.ciudad') }} *</label>
                      <input
                        type="text"
                        name="ciudad"
                        required
                        autocomplete="address-level2"
                        :placeholder="$t('solicitud.placeholders.ciudad')"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-ciudad`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-ciudad`])"
                        :aria-describedby="errors[`${cert.code}-ciudad`] ? `${cert.code}-ciudad-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-ciudad`]" :id="`${cert.code}-ciudad-error`" class="field-error">{{ errors[`${cert.code}-ciudad`] }}</span>
                    </div>
                    <div class="form-group">
                      <label>{{ $t('solicitud.telefonoWhatsapp') }} *</label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        autocomplete="tel"
                        :placeholder="$t('solicitud.placeholders.telefono')"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-telefono`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-telefono`])"
                        :aria-describedby="errors[`${cert.code}-telefono`] ? `${cert.code}-telefono-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-telefono`]" :id="`${cert.code}-telefono-error`" class="field-error">{{ errors[`${cert.code}-telefono`] }}</span>
                    </div>
                    <div class="form-group form-full">
                      <label>{{ $t('solicitud.campos.email') }} *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        autocomplete="email"
                        :placeholder="$t('solicitud.placeholders.email')"
                        @input="clearError($event, cert.code)"
                        @blur="handleBlur($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-email`] }"
                        :aria-invalid="Boolean(errors[`${cert.code}-email`])"
                        :aria-describedby="errors[`${cert.code}-email`] ? `${cert.code}-email-error` : null"
                      />
                      <span v-if="errors[`${cert.code}-email`]" :id="`${cert.code}-email-error`" class="field-error">{{ errors[`${cert.code}-email`] }}</span>
                    </div>
                  </div>
                </fieldset>

                <fieldset v-show="currentStep === 2" class="fieldset">
                  <legend>{{ $t('solicitud.infoProfesional') }}</legend>
                  <div class="form-grid">
                    <div class="form-group" v-if="cert.needsDegree">
                      <label>{{ $t('solicitud.tituloUniversitario') }} *</label>
                      <input
                        type="text"
                        name="titulo"
                        required
                        :placeholder="cert.degreePlaceholder"
                        @input="clearError($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-titulo`] }"
                      />
                      <span v-if="errors[`${cert.code}-titulo`]" class="field-error">{{ errors[`${cert.code}-titulo`] }}</span>
                    </div>
                    <div class="form-group">
                      <label>{{ $t('solicitud.institucionPrograma') }}</label>
                      <input type="text" name="institucion" placeholder="Centro o programa actual" />
                    </div>
                    <div class="form-group" v-for="horas in cert.horasFields" :key="horas.name">
                      <label>{{ horas.label }}</label>
                      <input type="number" :name="horas.name" :placeholder="horas.placeholder" min="0" />
                    </div>
                    <div class="form-group" v-if="cert.code === 'EPR'">
                      <label>{{ $t('solicitud.aniosRecuperacion') }} *</label>
                      <input
                        type="number"
                        name="anios_recuperacion"
                        required
                        placeholder="Mínimo 2 años"
                        min="2"
                        @input="clearError($event, cert.code)"
                        :class="{ 'input-error': errors[`${cert.code}-anios_recuperacion`] }"
                      />
                      <span v-if="errors[`${cert.code}-anios_recuperacion`]" class="field-error">{{ errors[`${cert.code}-anios_recuperacion`] }}</span>
                    </div>
                  </div>
                </fieldset>

                <fieldset v-show="currentStep === 3" class="fieldset">
                  <legend>Revisión y Envío</legend>
                  <div class="review-section">
                    <div class="review-header">
                      <div class="review-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
                      </div>
                      <h4>Resumen de tu solicitud</h4>
                    </div>
                    <div class="review-grid">
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.campos.nombre') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'nombre') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.campos.email') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'email') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.telefonoWhatsapp') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'telefono') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.documentoIdentidad') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'documento') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.fechaNacimiento') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'fecha_nacimiento') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">{{ $t('solicitud.campos.pais') }}</span>
                        <span class="review-value">{{ fieldValue(cert.code, 'pais') }}, {{ fieldValue(cert.code, 'ciudad') }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">Certificación</span>
                        <span class="review-value">{{ cert.code }} – {{ cert.name }}</span>
                      </div>
                      <div class="review-item">
                        <span class="review-label">Cuota bianual</span>
                        <span class="review-value highlight">USD ${{ cert.fee }}</span>
                      </div>
                    </div>
                    <p class="review-note">¿Algo no es correcto? Volvé a "Anterior" para corregirlo. {{ $t('solicitud.cuotaNoReembolsable') }}</p>
                  </div>
                </fieldset>
            </div>

            <div class="form-footer">
              <div class="form-nav">
                <button v-if="currentStep > 1" type="button" class="btn btn-outline" @click="prevStep">
                  ← Anterior
                </button>
                <button v-if="currentStep < 3" type="button" class="btn btn-gold" @click="nextStep(cert.code)">
                  Siguiente →
                </button>
                <button v-else type="submit" class="btn btn-gold" :disabled="sending[cert.code]">
                  {{ sending[cert.code] ? $t('solicitud.btnEnviarProcesando') : `${$t('solicitud.btnEnviar')} ${cert.code} →` }}
                </button>
              </div>
            </div>

            <div v-if="messages[cert.code]" class="form-msg" :class="messages[cert.code].type" role="status" aria-live="polite">
              {{ messages[cert.code].text }}
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { showToast } from '@/composables/toast.js'
import { useCertificacionesStore } from '@/stores/certificaciones'
import StepIndicator from '@/components/forms/StepIndicator.vue'
import { supabase } from '@/lib/supabase'
import { trackEvent } from '@/composables/analytics.js'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const store = useCertificacionesStore()

const formId = import.meta.env.VITE_FORMSPREE_SOLICITUD_ID || 'placeholder'
const activeTab = ref('OST')
const currentStep = ref(1)
const sending = ref({})
const messages = ref({})
const errors = ref({})
const formRefs = ref({})

const steps = [
  { id: 'datos', label: 'Datos Personales' },
  { id: 'profesional', label: 'Info Profesional' },
  { id: 'revision', label: 'Revisión' },
]

const paises = [
  'Argentina','Bolivia','Brasil','Chile','Colombia','Costa Rica','Cuba',
  'Ecuador','El Salvador','Guatemala','Honduras','México','Nicaragua',
  'Panamá','Paraguay','Perú','República Dominicana','Uruguay','Venezuela','Otro'
]

const certs = store.formCertifications

function setFormRef(code, el) {
  if (el) formRefs.value[code] = el
}

function fieldValue(code, name) {
  const form = formRefs.value[code]
  if (!form) return ''
  const input = form.querySelector(`[name="${name}"]`)
  return input ? input.value : ''
}

function changeTab(code) {
  const oldCode = activeTab.value
  activeTab.value = code
  currentStep.value = 1
  if (errors.value[oldCode]) {
    Object.keys(errors.value).forEach(k => {
      if (k.startsWith(oldCode)) delete errors.value[k]
    })
  }
  messages.value[code] = null
}

function goToStep(step) {
  currentStep.value = step
}

function nextStep(code) {
  if (currentStep.value === 1 && !validateStep1(code)) {
    showToast('Completá los campos obligatorios', 'error')
    return
  }
  if (currentStep.value === 2 && !validateStep2(code)) {
    showToast('Completá los campos obligatorios en información profesional', 'error')
    return
  }
  currentStep.value++
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function prevStep() {
  currentStep.value--
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function clearError(event, code) {
  const key = `${code}-${event.target.name}`
  if (errors.value[key]) {
    delete errors.value[key]
  }
}

function validateStep1(code) {
  const form = formRefs.value[code]
  if (!form) return true

  const required = ['nombre', 'documento', 'fecha_nacimiento', 'pais', 'ciudad', 'telefono', 'email']
  let isValid = true

  Object.keys(errors.value).forEach(k => {
    if (k.startsWith(code)) delete errors.value[k]
  })

  for (const field of required) {
    const input = form.querySelector(`[name="${field}"]`)
    if (!input) continue

    if (!input.value.trim()) {
      errors.value[`${code}-${field}`] = 'Este campo es obligatorio'
      isValid = false
    } else {
      const fieldValid = validateField(field, input.value, code)
      if (!fieldValid) isValid = false
    }
  }

  return isValid
}

function validateStep2(code) {
  const form = formRefs.value[code]
  if (!form) return true

  const cert = certs.find(c => c.code === code)
  if (!cert) return true

  if (cert.needsDegree) {
    const tituloInput = form.querySelector('[name="titulo"]')
    if (tituloInput && !tituloInput.value.trim()) {
      errors.value[`${code}-titulo`] = 'Este campo es obligatorio'
      return false
    }
  }

  if (code === 'EPR') {
    const aniosInput = form.querySelector('[name="anios_recuperacion"]')
    if (aniosInput && (!aniosInput.value || parseInt(aniosInput.value) < 2)) {
      errors.value[`${code}-anios_recuperacion`] = 'Mínimo 2 años de recuperación requeridos'
      return false
    }
  }

  return true
}

onMounted(() => {
  const nivel = route.query.nivel
  if (nivel) {
    const found = certs.find(c => c.code === nivel)
    if (found) {
      activeTab.value = nivel
    }
  }
})

watch(activeTab, (newTab) => {
  router.replace({ query: { nivel: newTab } })
})

const today = new Date()
const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate()).toISOString().split('T')[0]
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()).toISOString().split('T')[0]

function validateField(name, value, code) {
  const key = `${code}-${name}`
  let error = ''

  if (name === 'fecha_nacimiento') {
    if (!value) {
      error = 'La fecha de nacimiento es obligatoria'
    } else {
      const birthDate = new Date(value)
      const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000))
      if (age < 18) {
        error = 'Debes tener al menos 18 años'
      } else if (age > 100) {
        error = 'La fecha de nacimiento no es válida'
      }
    }
  }

  if (name === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      error = 'Ingresá un correo electrónico válido'
    }
  }

  if (name === 'telefono' && value) {
    const phoneRegex = /^[\d\s+\-()]{7,20}$/
    if (!phoneRegex.test(value)) {
      error = 'Ingresá un teléfono válido'
    }
  }

  if (error) {
    errors.value[key] = error
  } else {
    delete errors.value[key]
  }
  return !error
}

function handleBlur(event, code) {
  const { name, value } = event.target
  validateField(name, value, code)
}

const SOLICITUD_CORE_FIELDS = {
  nombre: 'full_name',
  email: 'email',
  telefono: 'phone',
  pais: 'country',
  ciudad: 'city',
  documento: 'document_id',
  fecha_nacimiento: 'birth_date'
}

function buildSolicitudRow(form, code) {
  const data = new FormData(form)
  const row = { certification_code: code, details: {} }

  for (const [key, value] of data.entries()) {
    if (key === 'nivel_certificacion') continue
    const column = SOLICITUD_CORE_FIELDS[key]
    if (column) {
      row[column] = value
    } else {
      row.details[key] = value
    }
  }

  return row
}

async function submitToSupabase(form, code) {
  if (!supabase) return false
  const { error } = await supabase.from('solicitudes').insert(buildSolicitudRow(form, code))
  return !error
}

async function submitToFormspree(form) {
  const res = await fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  })
  if (!res.ok) throw new Error('formspree submission failed')
}

async function handleSubmit(event, code) {
  const form = formRefs.value[code]

  if (!validateAllFields(code)) {
    showToast('Corregí los errores en el formulario antes de enviar.', 'error')
    return
  }

  sending.value[code] = true
  messages.value[code] = null
  try {
    const [supabaseResult, formspreeResult] = await Promise.allSettled([
      submitToSupabase(form, code),
      submitToFormspree(form)
    ])
    const supabaseOk = supabaseResult.status === 'fulfilled' && supabaseResult.value
    const formspreeOk = formspreeResult.status === 'fulfilled'

    if (supabaseOk || formspreeOk) {
      messages.value[code] = { type: 'success', text: t('solicitud.mensajes.exito') }
      showToast('Solicitud enviada correctamente', 'success')
      trackEvent('generate_lead', { form_name: 'solicitud', certification_code: code })
      form.reset()
      currentStep.value = 1
    } else {
      throw new Error()
    }
  } catch {
    messages.value[code] = { type: 'error', text: t('solicitud.mensajes.error') }
    showToast('Error al enviar la solicitud', 'error')
  } finally {
    sending.value[code] = false
  }
}

function validateAllFields(code) {
  const form = formRefs.value[code]
  if (!form) return false

  const fieldsToValidate = [
    { name: 'nombre', label: 'Nombre' },
    { name: 'documento', label: 'Documento' },
    { name: 'fecha_nacimiento', label: 'Fecha de nacimiento' },
    { name: 'pais', label: 'País' },
    { name: 'ciudad', label: 'Ciudad' },
    { name: 'telefono', label: 'Teléfono' },
    { name: 'email', label: 'Email' },
  ]

  let isValid = true

  for (const field of fieldsToValidate) {
    const input = form.querySelector(`[name="${field.name}"]`)
    if (!input) continue

    const value = input.value

    if (!value.trim()) {
      errors.value[`${code}-${field.name}`] = 'Este campo es obligatorio'
      isValid = false
    } else {
      delete errors.value[`${code}-${field.name}`]
      if (!validateField(field.name, value, code)) {
        isValid = false
      }
    }
  }

  return isValid
}
</script>

<style scoped>
.tabs {
  display: flex; gap: 2px; flex-wrap: wrap;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius); padding: 4px; width: fit-content;
  margin-bottom: 36px;
}
.tab {
  padding: 10px 22px; border-radius: var(--radius-sm);
  font-family: var(--font-mono); font-size: .78rem;
  letter-spacing: .1em; color: var(--text-muted); cursor: pointer;
  transition: .2s; background: none; border: none;
}
.tab.active { background: var(--accent); color: var(--white); font-weight: 700; }
.tab:hover:not(.active) { color: var(--text); background: var(--surface-alt); }

.panel-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 24px; flex-wrap: wrap; margin-bottom: 36px;
  padding-bottom: 28px; border-bottom: 1px solid var(--line);
}
.panel-header h2 { color: var(--text); }
.panel-fee { text-align: right; }
.fee-amount { display: block; font-family: var(--font-display); font-size: 2.2rem; color: var(--accent); font-weight: 700; line-height: 1; }
.fee-note { font-size: .8rem; color: var(--text-muted); }

.solicitud-form { display: flex; flex-direction: column; gap: 32px; }
.step-content { min-height: 400px; }
.fieldset { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px; }
.fieldset legend { font-family: var(--font-mono); font-size: .72rem; letter-spacing: .2em; color: var(--accent); text-transform: uppercase; padding: 0 10px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.form-full { grid-column: 1/-1; }

.review-section {
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 28px;
}
.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.review-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
}
.review-header h4 { margin: 0; color: var(--text); }
.review-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.review-item {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 16px;
}
.review-label { display: block; font-size: .75rem; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase; letter-spacing: .05em; }
.review-value { font-weight: 600; color: var(--text); }
.review-value.highlight { color: var(--accent); font-size: 1.125rem; }
.review-note { font-size: .8rem; color: var(--text-muted); text-align: center; }

.form-footer {
  display: flex; justify-content: space-between; align-items: center;
  gap: 20px; padding: 24px 0; border-top: 1px solid var(--line); flex-wrap: wrap;
}
.form-nav { display: flex; gap: 12px; }
.form-msg {
  padding: 16px 20px; border-radius: var(--radius-sm);
  font-size: .9rem; font-weight: 500;
}
.form-msg.success { background: rgba(52,211,153,.1); border: 1px solid rgba(52,211,153,.3); color: var(--success); }
.form-msg.error   { background: rgba(239,68,68,.1);  border: 1px solid rgba(239,68,68,.3);  color: var(--danger);  }

button:disabled { opacity: .6; cursor: not-allowed; }

.input-error { border-color: var(--danger) !important; }
.field-error {
  display: block;
  font-size: .75rem;
  color: var(--danger);
  margin-top: 4px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .form-grid { grid-template-columns: 1fr; }
  .form-full { grid-column: auto; }
  .panel-header { flex-direction: column; }
  .tabs { width: 100%; }
  .tab { flex: 1; text-align: center; padding: 10px 8px; font-size: .72rem; }
  .form-footer { flex-direction: column; align-items: flex-start; }
  .form-nav { width: 100%; flex-direction: column; }
  .form-nav .btn { width: 100%; }
  .review-grid { grid-template-columns: 1fr; }
}
</style>