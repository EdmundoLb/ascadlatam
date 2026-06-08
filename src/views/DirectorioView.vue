<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Cobertura Regional</div>
        <h1>Países afiliados y<br><em class="gold">preafiliados</em></h1>
        <p class="lead" style="margin-top:18px;">
          La FLACT constituye una red de integración, cooperación y fortalecimiento institucional que reúne a organizaciones comprometidas con la promoción de la salud, la rehabilitación, la inclusión social y el desarrollo humano en toda América Latina.
        </p>
      </div>
    </section>

    <!-- PAÍSES MIEMBROS -->
    <section class="section countries-section">
      <div class="container">
        <div class="stats-summary">
          <div class="stat-item">
            <span class="stat-number">12</span>
            <span class="stat-label">Países afiliados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">7</span>
            <span class="stat-label">Países preafiliados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">19</span>
            <span class="stat-label">Total países</span>
          </div>
        </div>

        <!-- AFILIADOS -->
        <div class="section-header">
          <div class="eyebrow">Afiliados a la FLACT</div>
          <h2>Países afiliados <em class="gold">a la FLACT</em></h2>
        </div>
        <div class="countries-grid">
          <div v-for="country in affiliates" :key="country.name" class="country-card">
            <span class="country-flag">{{ country.flag }}</span>
            <div class="country-info">
              <h4>{{ country.name }}</h4>
              <p>{{ country.description }}</p>
            </div>
          </div>
        </div>

        <!-- PREAFILIADOS -->
        <div class="section-header preaffiliates-header">
          <div class="eyebrow">Preafiliados a la FLACT</div>
          <h2>Países preafiliados <em class="gold">a la FLACT</em></h2>
        </div>
        <div class="countries-grid">
          <div v-for="country in preAffiliates" :key="country.name" class="country-card preaffiliate">
            <span class="country-flag">{{ country.flag }}</span>
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
          <p>A través de sus países afiliados y preafiliados, la Federación impulsa el intercambio de conocimientos, la formación profesional, la investigación y la defensa de modelos de atención basados en la dignidad de la persona, el respeto por los derechos humanos y la construcción de comunidades saludables.</p>
          <div class="flact-features">
            <div class="flact-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
              <div>
                <strong>Cobertura Regional</strong>
                <p>19 países integrados en la red de comunidades terapéuticas de América Latina.</p>
              </div>
            </div>
            <div class="flact-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
              <div>
                <strong>Estándares de Calidad</strong>
                <p>Lineamientos y protocolos para garantizar la calidad en el tratamiento de adicciones basados en TAP 21 y TIP 64.</p>
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
  </div>
</template>

<script setup>
const affiliates = [
  { name: 'Argentina', flag: '🇦🇷', description: 'Reconocida por su amplia trayectoria en el desarrollo de comunidades terapéuticas y programas de inclusión social.' },
  { name: 'Uruguay', flag: '🇺🇾', description: 'Destacado por su compromiso con la innovación y el fortalecimiento de modelos integrales de atención y rehabilitación.' },
  { name: 'México', flag: '🇲🇽', description: 'Aporta una extensa experiencia en prevención, tratamiento y fortalecimiento de redes comunitarias.' },
  { name: 'Brasil', flag: '🇧🇷', description: 'Contribuye con una sólida tradición de trabajo social y comunitario, promoviendo iniciativas de alcance nacional.' },
  { name: 'Bolivia', flag: '🇧🇴', description: 'Impulsa acciones de acompañamiento y reinserción social adaptadas a las realidades culturales de la región andina.' },
  { name: 'Perú', flag: '🇵🇪', description: 'Fortalece la labor terapéutica mediante programas de desarrollo humano y apoyo familiar.' },
  { name: 'Ecuador', flag: '🇪🇨', description: 'Promueve la integración de enfoques comunitarios centrados en la persona y su entorno.' },
  { name: 'Paraguay', flag: '🇵🇾', description: 'Desarrolla iniciativas orientadas a la recuperación integral y la construcción de redes de apoyo social.' },
  { name: 'Chile', flag: '🇨🇱', description: 'Contribuye con experiencias innovadoras en rehabilitación y fortalecimiento institucional.' },
  { name: 'Costa Rica', flag: '🇨🇷', description: 'Destaca por su enfoque humanista y la promoción de procesos terapéuticos integrales.' },
  { name: 'El Salvador', flag: '🇸🇻', description: 'Impulsa programas comunitarios enfocados en la prevención, recuperación y reintegración social.' },
  { name: 'Puerto Rico', flag: '🇵🇷', description: 'Aporta experiencia en modelos de atención basados en la participación comunitaria y el acompañamiento continuo.' },
]

const preAffiliates = [
  { name: 'Guatemala', flag: '🇬🇹', description: 'Avanza en el fortalecimiento de sus comunidades terapéuticas y redes de cooperación regional.' },
  { name: 'Honduras', flag: '🇭🇳', description: 'Promueve iniciativas orientadas al desarrollo de servicios de atención y rehabilitación.' },
  { name: 'Nicaragua', flag: '🇳🇮', description: 'Trabaja en la consolidación de programas comunitarios y espacios de formación profesional.' },
  { name: 'Venezuela', flag: '🇻🇪', description: 'Participa activamente en procesos de integración regional y fortalecimiento institucional.' },
  { name: 'Cuba', flag: '🇨🇺', description: 'Contribuye con experiencias vinculadas a la promoción de la salud y el bienestar comunitario.' },
  { name: 'Panamá', flag: '🇵🇦', description: 'Impulsa el crecimiento de redes terapéuticas y programas de acompañamiento social.' },
  { name: 'República Dominicana', flag: '🇩🇴', description: 'Fortalece acciones de prevención, tratamiento e inclusión social en beneficio de las comunidades.' },
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
.country-flag {
  font-size: 32px;
  line-height: 1;
  flex-shrink: 0;
}
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

.stats-summary {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 56px;
  padding: 32px;
  background: var(--bg-light);
  border-radius: var(--radius-xl);
  border: 1px solid var(--line-light);
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.stat-number {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-dark);
  line-height: 1;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.preaffiliates-header {
  margin-top: 64px;
}

.country-card.preaffiliate {
  background: var(--surface-alt);
  border-color: rgba(201, 168, 76, 0.3);
}

@media (max-width: 900px) {
  .countries-grid { grid-template-columns: repeat(2, 1fr); }
  .flact-features { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .countries-grid { grid-template-columns: 1fr; }
  .country-card { flex-direction: column; }
}
</style>