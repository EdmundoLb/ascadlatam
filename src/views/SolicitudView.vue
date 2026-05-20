<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Aplicación en línea</div>
        <h1>Solicitud de <em class="gold">certificación</em></h1>
        <p class="lead" style="margin-top:18px;">
          Completá el formulario del nivel al que estás aplicando. Las solicitudes incompletas no serán procesadas.
          El administrador recibirá tu solicitud con toda la documentación adjunta.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Tabs -->
        <div class="tabs">
          <button
            v-for="cert in certs"
            :key="cert.code"
            class="tab"
            :class="{ active: activeTab === cert.code }"
            @click="activeTab = cert.code"
          >
            {{ cert.code }}
          </button>
        </div>

        <!-- Form panel -->
        <div v-for="cert in certs" :key="cert.code" v-show="activeTab === cert.code" class="form-panel">
          <div class="panel-header">
            <div>
              <h2>{{ cert.name }}</h2>
              <p class="muted" style="margin-top:6px;">{{ cert.description }}</p>
            </div>
            <div class="panel-fee">
              <span class="fee-amount">USD ${{ cert.fee }}</span>
              <span class="fee-note">Cuota bianual · No reembolsable</span>
            </div>
          </div>

          <form
            :action="`https://formspree.io/f/${formId}`"
            method="POST"
            enctype="multipart/form-data"
            @submit.prevent="handleSubmit($event, cert.code)"
            class="solicitud-form"
          >
            <input type="hidden" name="nivel_certificacion" :value="`${cert.code} – ${cert.name}`" />

            <fieldset class="fieldset">
              <legend>Datos personales</legend>
              <div class="form-grid">
                <div class="form-group">
                  <label>Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej. María González Pérez"
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-nombre`] }"
                  />
                  <span v-if="errors[`${cert.code}-nombre`]" class="field-error">{{ errors[`${cert.code}-nombre`] }}</span>
                </div>
                <div class="form-group">
                  <label>Documento de identidad *</label>
                  <input
                    type="text"
                    name="documento"
                    required
                    placeholder="Número de cédula o pasaporte"
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-documento`] }"
                  />
                  <span v-if="errors[`${cert.code}-documento`]" class="field-error">{{ errors[`${cert.code}-documento`] }}</span>
                </div>
                <div class="form-group">
                  <label>Fecha de nacimiento *</label>
                  <input
                    type="date"
                    name="fecha_nacimiento"
                    required
                    :min="minDate"
                    :max="maxDate"
                    @blur="handleBlur($event, cert.code)"
                    @change="validateField('fecha_nacimiento', $event.target.value, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-fecha_nacimiento`] }"
                  />
                  <span v-if="errors[`${cert.code}-fecha_nacimiento`]" class="field-error">{{ errors[`${cert.code}-fecha_nacimiento`] }}</span>
                </div>
                <div class="form-group">
                  <label>País de residencia *</label>
                  <select
                    name="pais"
                    required
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-pais`] }"
                  >
                    <option value="">Seleccionar…</option>
                    <option v-for="p in paises" :key="p">{{ p }}</option>
                  </select>
                  <span v-if="errors[`${cert.code}-pais`]" class="field-error">{{ errors[`${cert.code}-pais`] }}</span>
                </div>
                <div class="form-group">
                  <label>Ciudad *</label>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    placeholder="Ciudad donde ejerce"
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-ciudad`] }"
                  />
                  <span v-if="errors[`${cert.code}-ciudad`]" class="field-error">{{ errors[`${cert.code}-ciudad`] }}</span>
                </div>
                <div class="form-group">
                  <label>Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+00 0000 0000"
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-telefono`] }"
                  />
                  <span v-if="errors[`${cert.code}-telefono`]" class="field-error">{{ errors[`${cert.code}-telefono`] }}</span>
                </div>
                <div class="form-group form-full">
                  <label>Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="correo@ejemplo.com"
                    @blur="handleBlur($event, cert.code)"
                    :class="{ 'input-error': errors[`${cert.code}-email`] }"
                  />
                  <span v-if="errors[`${cert.code}-email`]" class="field-error">{{ errors[`${cert.code}-email`] }}</span>
                </div>
              </div>
            </fieldset>

            <fieldset class="fieldset">
              <legend>Información profesional</legend>
              <div class="form-grid">
                <div class="form-group" v-if="cert.needsDegree">
                  <label>Título universitario *</label>
                  <input type="text" name="titulo" required :placeholder="cert.degreePlaceholder" />
                </div>
                <div class="form-group">
                  <label>Institución / Programa donde ejerce</label>
                  <input type="text" name="institucion" placeholder="Centro o programa actual" />
                </div>
                <div class="form-group" v-for="horas in cert.horasFields" :key="horas.name">
                  <label>{{ horas.label }}</label>
                  <input type="number" :name="horas.name" :placeholder="horas.placeholder" min="0" />
                </div>
                <div class="form-group" v-if="cert.code === 'EPR'">
                  <label>Años en proceso de recuperación *</label>
                  <input type="number" name="anios_recuperacion" required placeholder="Mínimo 2 años" min="2" />
                </div>
              </div>
            </fieldset>

            <fieldset class="fieldset">
              <legend>Documentación</legend>
              <div class="docs-info">
                <h4>Documentos requeridos para {{ cert.code }}</h4>
                <ul>
                  <li v-for="doc in cert.docs" :key="doc">{{ doc }}</li>
                </ul>
              </div>
              <div class="file-drop" @click="triggerFile(cert.code)">
                <div class="file-icon">📎</div>
                <p><strong>Clic para adjuntar archivos</strong></p>
                <p class="muted" style="font-size:.82rem; margin-top:4px;">PDF, JPG, PNG — podés seleccionar múltiples archivos a la vez</p>
              </div>
              <input
                :id="`file-${cert.code}`"
                type="file"
                name="documentos"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                style="display:none"
                @change="onFileChange($event, cert.code)"
              />
              <p v-if="fileLabels[cert.code]" class="file-label">{{ fileLabels[cert.code] }}</p>
              <div class="form-group" style="margin-top:16px;">
                <label>Observaciones adicionales</label>
                <textarea name="observaciones" placeholder="Información adicional relevante para su solicitud…"></textarea>
              </div>
            </fieldset>

            <div class="form-footer">
              <div class="fee-display">
                <span class="fee-big">USD ${{ cert.fee }}</span>
                <span class="muted" style="font-size:.84rem;">Cuota bianual no reembolsable</span>
              </div>
              <button type="submit" class="btn btn-gold" :disabled="sending[cert.code]">
                {{ sending[cert.code] ? 'Enviando…' : `Enviar solicitud ${cert.code} →` }}
              </button>
            </div>

            <div v-if="messages[cert.code]" class="form-msg" :class="messages[cert.code].type">
              {{ messages[cert.code].text }}
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { showToast } from '@/composables/toast.js'

const route = useRoute()

const formId = import.meta.env.VITE_FORMSPREE_SOLICITUD_ID
const activeTab = ref('OST')
const fileLabels = ref({})
const sending = ref({})
const messages = ref({})
const errors = ref({})

const paises = [
  'Argentina','Bolivia','Brasil','Chile','Colombia','Costa Rica','Cuba',
  'Ecuador','El Salvador','Guatemala','Honduras','México','Nicaragua',
  'Panamá','Paraguay','Perú','República Dominicana','Uruguay','Venezuela','Otro'
]

const certs = [
  {
    code: 'OST', fee: 30,
    name: 'Operador Socio-Terapéutico',
    description: 'Nivel inicial de la ruta. Acompañamiento supervisado en comunidades terapéuticas y centros de tratamiento.',
    needsDegree: false,
    horasFields: [
      { name: 'horas_formacion',    label: 'Horas de formación completadas',       placeholder: 'Mín. 80 horas'    },
      { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 1.000 horas' },
      { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 100 horas'   },
    ],
    docs: ['Copia de documento de identidad','Certificado de estudios (secundaria)','Certificados de formación (80h)','Constancia de experiencia supervisada (1.000h)','Constancia de entrenamiento práctico (100h)','Tres (3) cartas de referencia profesional','Código de ética firmado'],
  },
  {
    code: 'EPR', fee: 30,
    name: 'Entrenador de Pares en Recuperación',
    description: 'Para personas con experiencia vivida en recuperación que brindan apoyo desde un enfoque no clínico y empático.',
    needsDegree: false,
    horasFields: [
      { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 80 horas' },
      { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 80 horas' },
    ],
    docs: ['Copia de documento de identidad','Certificado de estudios','Certificados de formación por ejes (80h)','Constancia de entrenamiento práctico (80h)','Declaración de experiencia vivida en recuperación','2 a 3 cartas de referencia','Código de ética firmado'],
  },
  {
    code: 'CCAAD I', fee: 50,
    name: 'Consejero en Adicciones Nivel I',
    description: 'Primer nivel técnico profesional para la atención de personas con trastornos por uso de sustancias.',
    needsDegree: false,
    horasFields: [
      { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 120 horas'   },
      { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 1.500 horas' },
      { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 60 horas'    },
    ],
    docs: ['Documento de identidad','Certificado de estudios','Certificados de formación (120h)','Constancia de experiencia supervisada (1.500h)','Constancia de entrenamiento práctico (60h)','Tres (3) cartas de referencia profesional','Código de ética firmado'],
  },
  {
    code: 'CCAAD II', fee: 75,
    name: 'Consejero en Adicciones Nivel II',
    description: 'Competencias avanzadas en consejería con mayor responsabilidad clínica y coordinación de casos.',
    needsDegree: false,
    horasFields: [
      { name: 'horas_formacion',    label: 'Horas de formación específica',        placeholder: 'Mín. 150 horas'   },
      { name: 'horas_experiencia',  label: 'Horas de experiencia supervisada',     placeholder: 'Mín. 2.000 horas' },
      { name: 'horas_entrenamiento',label: 'Horas de entrenamiento práctico',      placeholder: 'Mín. 96 horas'    },
    ],
    docs: ['Documento de identidad','Certificado de estudios','Certificados de formación (150h)','Constancia de experiencia supervisada (2.000h)','Constancia de entrenamiento práctico (96h)','Tres (3) cartas de referencia profesional','Código de ética firmado'],
  },
  {
    code: 'CCAAD III', fee: 100,
    name: 'Consejero en Adicciones Nivel III',
    description: 'Nivel clínico avanzado. Evaluación biopsicosocial, diagnósticos funcionales y manejo de casos complejos.',
    needsDegree: true,
    degreePlaceholder: 'Ej. Licenciatura en Psicología – Universidad de…',
    horasFields: [
      { name: 'horas_formacion',   label: 'Horas de formación especializada',     placeholder: 'Mín. 170 horas'   },
      { name: 'horas_experiencia', label: 'Horas de experiencia en consejería',   placeholder: 'Mín. 3.000 horas' },
      { name: 'horas_practica',    label: 'Horas de práctica supervisada',        placeholder: 'Mín. 120 horas'   },
    ],
    docs: ['Documento de identidad','Título universitario (Psicología, Trabajo Social o afines)','Certificados de formación (170h)','Constancia de experiencia en consejería (3.000h)','Certificado de práctica supervisada (120h)','Tres (3) cartas de referencia profesional','Código de ética firmado'],
  },
  {
    code: 'CCAAD IV', fee: 125,
    name: 'Supervisor Clínico – Nivel IV',
    description: 'Máximo nivel de la ruta. Supervisión clínica, liderazgo y formación de equipos de tratamiento.',
    needsDegree: true,
    degreePlaceholder: 'Ej. Maestría en Salud Mental – Universidad de…',
    horasFields: [
      { name: 'horas_consejero',   label: 'Horas como consejero en adicciones',   placeholder: 'Mín. 2.000 horas' },
      { name: 'horas_supervision', label: 'Horas de supervisión clínica',          placeholder: 'Mín. 4.000 horas' },
      { name: 'horas_formacion',   label: 'Horas de formación en supervisión',     placeholder: 'Mín. 40 horas'    },
      { name: 'horas_recibida',    label: 'Horas de supervisión recibida',          placeholder: 'Mín. 120 horas'   },
    ],
    docs: ['Documento de identidad','Título universitario (Licenciatura o superior)','Certificados de formación en supervisión (40h)','Constancia como consejero (2.000h)','Constancia de supervisión clínica (4.000h)','Certificado de supervisión recibida (120h)','Tres (3) cartas de referencia profesional','Código de ética firmado'],
  },
]

onMounted(() => {
  const nivel = route.query.nivel
  if (nivel) {
    const found = certs.find(c => c.code === nivel)
    if (found) {
      activeTab.value = nivel
    }
  }
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

function triggerFile(code) {
  document.getElementById(`file-${code}`)?.click()
}

function onFileChange(event, code) {
  const files = Array.from(event.target.files)
  fileLabels.value[code] = files.length
    ? `${files.length} archivo(s) seleccionado(s): ${files.map(f => f.name).join(', ')}`
    : ''
}

async function handleSubmit(event, code) {
  const form = event.target

  if (!validateAllFields(form, code)) {
    showToast('Corregí los errores en el formulario antes de enviar.', 'error')
    return
  }

  sending.value[code] = true
  messages.value[code] = null
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
    if (res.ok) {
      messages.value[code] = { type: 'success', text: '✓ Solicitud enviada correctamente. Le contactaremos en los próximos días hábiles.' }
      showToast('Solicitud enviada correctamente', 'success')
      form.reset()
      fileLabels.value[code] = ''
    } else {
      throw new Error()
    }
  } catch {
    messages.value[code] = { type: 'error', text: '✗ Error al enviar. Por favor, intente nuevamente o escriba a info@ascadlatam.org' }
    showToast('Error al enviar la solicitud', 'error')
  } finally {
    sending.value[code] = false
  }
}

function validateAllFields(form, code) {
  let valid = true
  const requiredFields = form.querySelectorAll('[required]')
  requiredFields.forEach(field => {
    const key = `${code}-${field.name}`
    if (field.type === 'file') return
    if (!field.value || !field.value.trim()) {
      errors.value[key] = 'Este campo es obligatorio'
      valid = false
    } else {
      validateField(field.name, field.value, code)
      if (errors.value[key]) valid = false
    }
  })
  return valid
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
.fieldset { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px; }
.fieldset legend { font-family: var(--font-mono); font-size: .72rem; letter-spacing: .2em; color: var(--accent); text-transform: uppercase; padding: 0 10px; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.form-full { grid-column: 1/-1; }

.docs-info {
  background: var(--surface-alt); border: 1px solid var(--line);
  border-left: 3px solid var(--accent); border-radius: var(--radius-sm);
  padding: 20px 24px; margin-bottom: 20px;
}
.docs-info h4 { color: var(--accent-dark); font-family: var(--font-display); margin-bottom: 12px; }
.docs-info ul { display: flex; flex-direction: column; gap: 6px; }
.docs-info li { font-size: .86rem; color: var(--text-muted); padding-left: 16px; position: relative; }
.docs-info li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }

.file-drop {
  border: 1px dashed rgba(201,168,76,0.3); border-radius: var(--radius);
  padding: 28px; text-align: center; cursor: pointer; transition: .2s;
  background: var(--accent-light);
}
.file-drop:hover { border-color: var(--accent); background: rgba(201,168,76,.1); }
.file-icon { font-size: 1.8rem; margin-bottom: 8px; }
.file-drop p { color: var(--text); }
.file-label { font-size: .8rem; color: var(--accent-dark); margin-top: 8px; }

.form-footer {
  display: flex; justify-content: space-between; align-items: center;
  gap: 20px; padding: 24px 0; border-top: 1px solid var(--line); flex-wrap: wrap;
}
.fee-big { display: block; font-family: var(--font-display); font-size: 2rem; color: var(--accent); font-weight: 700; line-height: 1; }
.form-msg {
  padding: 16px 20px; border-radius: var(--radius-sm);
  font-size: .9rem; font-weight: 500;
}
.form-msg.success { background: rgba(52,211,153,.1); border: 1px solid rgba(52,211,153,.3); color: #34d399; }
.form-msg.error   { background: rgba(239,68,68,.1);  border: 1px solid rgba(239,68,68,.3);  color: #ef4444;  }

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
}
</style>
