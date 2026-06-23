<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('contacto.titulo') }}</div>
        <h1>{{ $t('contacto.preguntas') }} <em class="gold">{{ $t('solicitud.certificacion') }}</em>?</h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('contacto.descripcion') }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <h3>{{ $t('contacto.infoTitulo') }}</h3>
          <p class="muted" style="margin-top:12px; line-height:1.8;">
            {{ $t('contacto.consultaDescripcion') }}
          </p>
          <div class="contact-items">
            <div v-for="person in contactPeople" :key="person.email" class="contact-item">
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <strong>{{ person.name }} ({{ person.location }})</strong>
                <span>
                  <a :href="`tel:${person.phone.replace(/\s+/g, '')}`">{{ person.phone }}</a>
                  · <a :href="`mailto:${person.email}`">{{ person.email }}</a>
                </span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <strong>{{ $t('contacto.cobertura') }}</strong>
                <span>{{ $t('contacto.coberturaValor') }}</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <strong>{{ $t('contacto.horario') }}</strong>
                <span>{{ $t('contacto.horarioValor') }}</span>
              </div>
            </div>
          </div>
          <div class="quick-links">
            <p class="eyebrow" style="margin-bottom:14px;">{{ $t('contacto.accesosRapidos') }}</p>
            <router-link to="/solicitud" class="btn btn-outline" style="margin-bottom:10px; display:flex;">{{ $t('contacto.iniciarSolicitudCert') }}</router-link>
            <router-link to="/directorio" class="btn btn-ghost" style="display:flex;">{{ $t('contacto.verificarCertificado') }}</router-link>
          </div>
        </div>

        <div class="contact-form-wrap">
          <h3>{{ $t('contacto.enviarConsulta') }}</h3>
          <form
            :action="`https://formspree.io/f/${formId}`"
            method="POST"
            @submit.prevent="handleSubmit"
            class="contact-form"
          >
            <div class="cf-grid">
              <div class="form-group">
                <label for="nombre">{{ $t('contacto.nombre') }} *</label>
                <input id="nombre" type="text" name="nombre" required autocomplete="name" :placeholder="$t('contacto.placeholders.nombre')" />
              </div>
              <div class="form-group">
                <label for="pais">{{ $t('contacto.pais') }}</label>
                <select id="pais" name="pais" autocomplete="country-name">
                  <option value="">{{ $t('contacto.placeholders.pais') }}</option>
                  <option v-for="p in paises" :key="p">{{ p }}</option>
                </select>
              </div>
              <div class="form-group form-full">
                <label for="email">{{ $t('contacto.email') }} *</label>
                <input id="email" type="email" name="email" required autocomplete="email" :placeholder="$t('contacto.placeholders.email')" />
              </div>
              <div class="form-group form-full">
                <label for="asunto">{{ $t('contacto.asunto') }}</label>
                <select id="asunto" name="asunto">
                  <option value="">{{ $t('contacto.placeholders.asunto') }}</option>
                  <option>{{ $t('contacto.requisitosCertificacion') }}</option>
                  <option>{{ $t('contacto.estadoSolicitud') }}</option>
                  <option>{{ $t('contacto.verificarCertificado') }}</option>
                  <option>{{ $t('contacto.alianzaInstitucional') }}</option>
                  <option>{{ $t('common.other') }}</option>
                </select>
              </div>
              <div class="form-group form-full">
                <label for="mensaje">{{ $t('contacto.mensaje') }} *</label>
                <textarea id="mensaje" name="mensaje" required :placeholder="$t('contacto.placeholders.mensaje')" style="min-height:130px;"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-gold" style="width:100%; margin-top:8px; justify-content:center;" :disabled="sending">
              {{ sending ? $t('contacto.btnEnviarProcesando') : $t('contacto.btnEnviar') + ' →' }}
            </button>
            <div v-if="message" class="form-msg" :class="message.type" style="margin-top:14px;" role="status" aria-live="polite">
              {{ message.text }}
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { showToast } from '@/composables/toast.js'
import { supabase } from '@/lib/supabase'
import { trackEvent } from '@/composables/analytics.js'

const { t } = useI18n()

const formId = import.meta.env.VITE_FORMSPREE_CONTACT_ID || 'placeholder'
const sending = ref(false)
const message = ref(null)

const paises = [
  'Argentina','Bolivia','Brasil','Chile','Colombia','Costa Rica','Cuba',
  'Ecuador','El Salvador','Guatemala','Honduras','México','Nicaragua',
  'Panamá','Paraguay','Perú','República Dominicana','Uruguay','Venezuela','Otro'
]

const contactPeople = computed(() => [
  { name: 'Gonzalo Esquivel', location: 'Costa Rica', phone: '+506 8374 3617', email: 'ascadcr@gmail.com' },
  { name: 'Adriano Schuster', location: t('contacto.paraguay'), phone: '+595984430915', email: 'adrianoschuster2014@gmail.com' },
])

async function submitToSupabase(form) {
  if (!supabase) return false
  const data = new FormData(form)
  const row = {
    nombre: data.get('nombre'),
    email: data.get('email'),
    pais: data.get('pais') || null,
    asunto: data.get('asunto') || null,
    mensaje: data.get('mensaje')
  }
  const { error } = await supabase.from('contactos').insert(row)
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

async function handleSubmit(event) {
  const form = event.target
  sending.value = true
  message.value = null
  try {
    const [supabaseResult, formspreeResult] = await Promise.allSettled([
      submitToSupabase(form),
      submitToFormspree(form)
    ])
    const supabaseOk = supabaseResult.status === 'fulfilled' && supabaseResult.value
    const formspreeOk = formspreeResult.status === 'fulfilled'

    if (supabaseOk || formspreeOk) {
      message.value = { type: 'success', text: t('contacto.mensajes.exito') }
      showToast('Mensaje enviado correctamente', 'success')
      trackEvent('generate_lead', { form_name: 'contacto', subject: form.asunto.value || 'sin_asunto' })
      form.reset()
    } else throw new Error()
  } catch {
    message.value = { type: 'error', text: t('contacto.mensajes.error') }
    showToast('Error al enviar el mensaje', 'error')
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.3fr;
  gap: 60px; align-items: start;
}
.contact-info h3 { color: var(--accent-dark); font-family: var(--font-display); font-size: 1.6rem; }
.contact-items { margin-top: 32px; display: flex; flex-direction: column; gap: 18px; }
.contact-item { display: flex; align-items: flex-start; gap: 14px; }
.contact-icon {
  width: 42px; height: 42px; border-radius: var(--radius-sm);
  background: var(--accent-light); border: 1px solid rgba(201,168,76,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}
.contact-item strong { display: block; color: var(--text); font-size: .9rem; margin-bottom: 2px; }
.contact-item span { font-size: .84rem; color: var(--text-muted); }
.quick-links { margin-top: 36px; }

.contact-form-wrap {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius-lg); padding: 40px;
}
.contact-form-wrap h3 { color: var(--text); font-family: var(--font-display); font-size: 1.6rem; margin-bottom: 28px; }
.cf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-full { grid-column: 1/-1; }

.form-msg {
  padding: 14px 18px; border-radius: var(--radius-sm); font-size: .88rem; font-weight: 500;
}
.form-msg.success { background: rgba(52,211,153,.1); border: 1px solid rgba(52,211,153,.3); color: var(--success); }
.form-msg.error   { background: rgba(239,68,68,.1);  border: 1px solid rgba(239,68,68,.3);  color: var(--danger); }
button:disabled { opacity: .6; cursor: not-allowed; }

@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
@media (max-width: 600px) { .cf-grid { grid-template-columns: 1fr; } .form-full { grid-column: auto; } .contact-form-wrap { padding: 28px; } }
</style>
