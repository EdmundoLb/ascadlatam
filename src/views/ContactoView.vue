<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Contacto</div>
        <h1>¿Preguntas sobre tu <em class="gold">certificación</em>?</h1>
        <p class="lead" style="margin-top:18px;">
          Consultá sobre requisitos, procesos, vigencia de certificaciones o alianzas institucionales.
          Nuestro equipo responde en un plazo de 2 a 3 días hábiles.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <h3>Información de contacto</h3>
          <p class="muted" style="margin-top:12px; line-height:1.8;">
            Para consultas sobre el proceso de certificación, requisitos por nivel, verificación de credenciales o para establecer alianzas institucionales.
          </p>
          <div class="contact-items">
            <div v-for="item in contactItems" :key="item.label" class="contact-item">
              <div class="contact-icon">
                <svg v-if="item.icon === 'user'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <svg v-else-if="item.icon === 'globe'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <svg v-else-if="item.icon === 'clock'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <strong>{{ item.label }}</strong>
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
          <div class="quick-links">
            <p class="eyebrow" style="margin-bottom:14px;">Accesos rápidos</p>
            <router-link to="/solicitud" class="btn btn-outline" style="margin-bottom:10px; display:flex;">Iniciar solicitud de certificación</router-link>
            <router-link to="/directorio" class="btn btn-ghost" style="display:flex;">Verificar un certificado</router-link>
          </div>
        </div>

        <div class="contact-form-wrap">
          <h3>Enviar consulta</h3>
          <form
            :action="`https://formspree.io/f/${formId}`"
            method="POST"
            @submit.prevent="handleSubmit"
            class="contact-form"
          >
            <div class="cf-grid">
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input id="nombre" type="text" name="nombre" required placeholder="Tu nombre" autofocus />
              </div>
              <div class="form-group">
                <label for="pais">País</label>
                <select id="pais" name="pais">
                  <option value="">Seleccionar país…</option>
                  <option v-for="p in paises" :key="p">{{ p }}</option>
                </select>
              </div>
              <div class="form-group form-full">
                <label for="email">Correo electrónico *</label>
                <input id="email" type="email" name="email" required placeholder="correo@ejemplo.com" />
              </div>
              <div class="form-group form-full">
                <label for="asunto">Asunto</label>
                <select id="asunto" name="asunto">
                  <option value="">Seleccionar tema…</option>
                  <option>Requisitos de certificación</option>
                  <option>Estado de mi solicitud</option>
                  <option>Verificar certificado</option>
                  <option>Alianza institucional</option>
                  <option>Otro</option>
                </select>
              </div>
              <div class="form-group form-full">
                <label for="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" required placeholder="Escribí tu consulta aquí…" style="min-height:130px;"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-gold" style="width:100%; margin-top:8px; justify-content:center;" :disabled="sending">
              {{ sending ? 'Enviando…' : 'Enviar mensaje →' }}
            </button>
            <div v-if="message" class="form-msg" :class="message.type" style="margin-top:14px;">
              {{ message.text }}
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from '@/composables/toast.js'

const formId = import.meta.env.VITE_FORMSPREE_CONTACT_ID
const sending = ref(false)
const message = ref(null)

const paises = [
  'Argentina','Bolivia','Brasil','Chile','Colombia','Costa Rica','Cuba',
  'Ecuador','El Salvador','Guatemala','Honduras','México','Nicaragua',
  'Panamá','Paraguay','Perú','República Dominicana','Uruguay','Venezuela','Otro'
]

const contactItems = [
  { icon: 'user', label: 'Gonzalo Esquivel (Costa Rica)', value: '+506 8374 3617 · ascadcr@gmail.com' },
  { icon: 'user', label: 'Adriano Shuster (Paraguay)', value: '0984430915 · adrianoschuster2014@gmail.com' },
  { icon: 'globe', label: 'Cobertura', value: 'América Latina y Brasil' },
  { icon: 'clock', label: 'Horario de atención', value: 'Lun – Vie · 8:00 – 17:00 (hora Costa Rica)' },
]

async function handleSubmit(event) {
  const form = event.target
  sending.value = true
  message.value = null
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
    if (res.ok) {
      message.value = { type: 'success', text: '✓ Mensaje enviado. Le responderemos en 2 a 3 días hábiles.' }
      showToast('Mensaje enviado correctamente', 'success')
      form.reset()
    } else throw new Error()
  } catch {
    message.value = { type: 'error', text: '✗ Error al enviar. Por favor, escriba directamente a info@ascadlatam.org' }
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
