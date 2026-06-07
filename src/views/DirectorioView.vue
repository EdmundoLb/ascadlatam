<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Información</div>
        <h1>Países miembros del<br><em class="gold">consorcio</em></h1>
        <p class="lead" style="margin-top:18px;">
          Conocé los países que forman parte de ASCAD LATAM y las organizaciones que respaldan la certificación en adicciones en América Latina.
        </p>
      </div>
    </section>

    <!-- PAÍSES MIEMBROS -->
    <section class="section countries-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">América Latina</div>
          <h2>Países <em class="gold">participantes</em></h2>
        </div>
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.name" class="country-card">
            <div class="country-flag">{{ country.flag }}</div>
            <div class="country-info">
              <h4>{{ country.name }}</h4>
              <p>{{ country.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOBRE FLACT -->
    <section class="section flact-section">
      <div class="container">
        <div class="flact-inner">
          <div class="flact-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            FLACT
          </div>
          <h2>Federación Latinoamericana de<br><em class="gold">Comunidades Terapéuticas</em></h2>
          <p>FLACT es la Federación Latinoamericana de Comunidades Terapéuticas, una organización que agrupa y representa a comunidades terapéuticas en toda América Latina, promoviendo estándares de calidad en el tratamiento de adicciones y el desarrollo profesional continuo de quienes trabajan en este campo.</p>
          <div class="flact-features">
            <div class="flact-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
              <div>
                <strong>Cobertura Regional</strong>
                <p>Presencia en más de 10 países de América Latina con comunidades terapéuticas asociadas.</p>
              </div>
            </div>
            <div class="flact-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
              <div>
                <strong>Estándares de Calidad</strong>
                <p>Lineamientos y protocolos para garantizar la calidad en el tratamiento de adicciones.</p>
              </div>
            </div>
            <div class="flact-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <div>
                <strong>Trabajo Colaborativo</strong>
                <p>Red de organizaciones y profesionales unidos para mejorar la atención en adicciones.</p>
              </div>
            </div>
          </div>
          <router-link to="/flact" class="btn btn-gold">Conocer más sobre FLACT</router-link>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header centered">
          <div class="eyebrow">Preguntas frecuentes</div>
          <h2>Preguntas <em class="gold">frecuentes</em></h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ 'is-open': openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openFaq = ref(null)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

const countries = [
  { name: 'Costa Rica', flag: '🇨🇷', description: 'Sede fundacional del consorcio ASCAD LATAM. Pionero en la implementación de estándares de certificación profesional en comunidades terapéuticas de América Central.' },
  { name: 'Brasil', flag: '🇧🇷', description: 'Mayor cobertura de profesionales certificados en el región. Certificaciones disponibles en portugués con adaptación cultural a contextos latinoamericanos.' },
  { name: 'Argentina', flag: '🇦🇷', description: 'Desarrollo de programas de certificación y formación continua. Red de comunidades terapéuticas asociadas a FLACT con estándares internacionales.' },
  { name: 'Colombia', flag: '🇨🇴', description: 'Integración de comunidades terapéuticas y programas de formación. Representación de FLACT en el norte de Suramérica.' },
  { name: 'Paraguay', flag: '🇵🇾', description: 'Participación activa en la red de profesionales certificados. Alianzas estratégicas para la expansión de estándares de certificación.' },
  { name: 'México', flag: '🇲🇽', description: 'Punto de conexión con América del Norte. Desarrollo de programas de certificación con adaptación a contextos multiculturales.' },
]

const faqs = [
  { question: '¿Qué es ASCAD LATAM?', answer: 'ASCAD LATAM es el Consorcio Latinoamericano de Certificación en Adicciones, una organización que establece estándares internacionales para la formación y certificación de profesionales en el campo de las adicciones en toda América Latina.' },
  { question: '¿Cuáles son los niveles de certificación disponibles?', answer: 'Existen 6 niveles de certificación: OST (Operador Socioterapéutico), ER (Entrenador de Recuperación), CCAAD I, CCAAD II, CCAAD III y CCAAD IV (Supervisor Profesional). Cada nivel tiene requisitos específicos de formación y experiencia.' },
  { question: '¿Las certificaciones ASCAD LATAM son reconocidas internacionalmente?', answer: 'Sí, las certificaciones están basadas en estándares internacionales como TAP 21, TIP 64 y TIP 52 de SAMHSA (Substance Abuse and Mental Health Services Administration) de Estados Unidos.' },
  { question: '¿Cuánto tiempo es válida la certificación?', answer: 'La certificación ASCAD LATAM tiene validez de 2 años (bianual). Para renovar es necesario acumular horas de educación continua específicas por nivel y presentar la documentación de renovación.' },
  { question: '¿Puedo trabajar en cualquier país de América Latina con la certificación?', answer: 'La certificación ASCAD LATAM está reconocida en los países miembros del Consorcio. Cada país puede tener requisitos adicionales de validación local. Se recomienda consultar con la oficina de certificación de su país.' },
]
</script>

<style scoped>
.countries-section { background: var(--white); }
.countries-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.country-card {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all .3s ease;
}
.country-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}
.country-flag { font-size: 2.5rem; flex-shrink: 0; }
.country-info h4 { font-size: 1.125rem; color: var(--text); margin-bottom: 8px; }
.country-info p { font-size: .875rem; color: var(--text-muted); line-height: 1.6; }

.flact-section { background: var(--bg-light); }
.flact-inner { max-width: 800px; margin: 0 auto; text-align: center; }
.flact-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  color: var(--accent-dark);
  background: var(--accent-light);
  border: 1px solid rgba(201,168,76,0.3);
  padding: 8px 18px;
  border-radius: 999px;
  margin-bottom: 24px;
}
.flact-inner h2 { margin-bottom: 20px; }
.flact-inner > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 40px; font-size: 1rem; }
.flact-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: left;
  margin-bottom: 40px;
}
.flact-feature { display: flex; gap: 14px; align-items: flex-start; }
.feature-icon { font-size: 1.5rem; flex-shrink: 0; }
.flact-feature strong { display: block; color: var(--text); font-size: .9375rem; margin-bottom: 4px; }
.flact-feature p { font-size: .8125rem; color: var(--text-muted); line-height: 1.6; }

.faq-section { background: var(--white); }
.faq-list { max-width: 800px; margin: 48px auto 0; }
.faq-item {
  border: 1px solid var(--line-light);
  border-radius: var(--radius);
  margin-bottom: 12px;
  overflow: hidden;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  background: var(--surface);
  border: none;
  cursor: pointer;
  font-size: .9375rem;
  font-weight: 500;
  color: var(--text);
  text-align: left;
  transition: background .2s;
}
.faq-question:hover { background: var(--bg-light); }
.faq-icon { color: var(--accent-dark); transition: transform .3s; flex-shrink: 0; }
.is-open .faq-icon { transform: rotate(180deg); }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease;
}
.is-open .faq-answer { max-height: 200px; }
.faq-answer p { padding: 0 24px 20px; font-size: .875rem; color: var(--text-muted); line-height: 1.7; }

@media (max-width: 900px) {
  .countries-grid { grid-template-columns: repeat(2, 1fr); }
  .flact-features { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .countries-grid { grid-template-columns: 1fr; }
  .country-card { flex-direction: column; }
}
</style>