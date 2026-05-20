<template>
  <div>
    <!-- HERO -->
    <section class="hero">
    <div class="hero-bg-pattern"></div>
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content animate-fade-in-up">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Estándares Internacionales ·
            <span class="badge-tap">TAP 21</span>
            <span class="badge-tip">TIP 64</span>
          </div>
          <h1 class="hero-title">
            Consorcio de Certificación<br>
            <span class="text-gradient">Latinoamericano</span><br>
            en Adicciones
          </h1>
          <p class="hero-lead">
            Certificamos profesionales con estándares internacionales
            garantizando competencias integrales: <strong>Saber Conocer</strong>, <strong>Saber Hacer</strong> y <strong>Saber Ser</strong>.
          </p>
          <div class="hero-actions">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
              Iniciar mi solicitud
            </router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg">
              Ver certificaciones
            </router-link>
          </div>
        </div>
        <div class="hero-stats animate-fade-in-up" style="animation-delay: 0.15s">
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-card">
              <div class="stat-icon">
                <svg v-if="stat.icon === 'users'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <svg v-else-if="stat.icon === 'globe'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <svg v-else-if="stat.icon === 'award'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div class="stat-info">
                <span class="stat-number">{{ stat.num }}</span>
                <span class="stat-label">{{ stat.label }}</span>
                <span v-if="stat.desc" class="stat-desc">{{ stat.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section about-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Sobre ASCAD LATAM</div>
        <h2>Una organización construida<br>sobre <em class="gold">estándares reales</em></h2>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-card-header">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="eyebrow" style="margin-bottom: 0">Misión</div>
          </div>
          <h3>Profesionalizar el campo de las adicciones</h3>
          <p>Promovemos la certificación de quienes intervienen en el tratamiento de las adicciones, garantizando calidad, ética y competencia en toda América Latina.</p>
        </div>
        <div class="about-card about-card-accent">
          <div class="about-card-header">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div class="eyebrow" style="margin-bottom: 0">Visión</div>
          </div>
          <h3>Líderes en certificación regional</h3>
          <p>Ser la organización referente en certificación y acreditación en adicciones, contribuyendo al desarrollo de sistemas de atención integrales y basados en evidencia.</p>
        </div>
        <div class="about-timeline">
          <div v-for="(item, i) in origins" :key="i" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <p v-for="(line, j) in item.label.split('<br>')" :key="j">{{ line }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS PATH -->
  <section class="section path-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Escalera de desarrollo</div>
        <h2>Tu ruta profesional<br>en <em class="gold">adicciones</em></h2>
        <p class="lead" style="margin-top: 16px; max-width: 600px;">Seis niveles de certificación diseñados para acompañarte en cada etapa de tu desarrollo profesional.</p>
      </div>
      <div class="path-track">
        <div v-for="(level, index) in levels" :key="level.code" class="path-step">
          <div class="path-connector" v-if="index > 0"></div>
          <div class="path-node">
            <span class="path-code">{{ level.code }}</span>
            <span class="path-icon">{{ level.icon }}</span>
          </div>
          <div class="path-info">
            <h4>{{ level.name }}</h4>
            <p>{{ level.desc }}</p>
            <div class="path-fee">
              <span class="badge badge-gold">USD ${{ level.fee }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="section-cta">
        <router-link to="/certificaciones" class="btn btn-gold btn-lg">
          Ver todos los requisitos
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- ALIADOS -->
  <section class="section allies-section">
    <div class="container">
      <div class="section-header centered">
        <div class="eyebrow">Aliados Estratégicos</div>
        <h2>Instituciones que<br>respaldan <em class="gold">nuestro trabajo</em></h2>
      </div>
      <div class="allies-grid">
        <router-link to="/aliados" class="ally-card">
          <div class="ally-logo">
            <div class="ally-logo-placeholder">
              <img :src="logoAscad" alt="ASCAD LATAM" width="48" height="48" style="object-fit:contain" />
            </div>
          </div>
          <h4>ASCAD LATAM</h4>
          <p class="muted">Consorcio Latinoamericano de Certificación en Adicciones</p>
        </router-link>
        <router-link to="/aliados" class="ally-card">
          <div class="ally-logo">
            <div class="ally-logo-placeholder">
              <img :src="logoAforind" alt="Aforind" width="48" height="48" style="object-fit:contain" />
            </div>
          </div>
          <h4>Aforind</h4>
          <p class="muted">Asociación de Formación e Investigación en Drogodependencias</p>
        </router-link>
        <router-link to="/flact" class="ally-card">
          <div class="ally-logo">
            <div class="ally-logo-placeholder">
              <img :src="logoFlact" alt="FLACT" width="48" height="48" style="object-fit:contain" />
            </div>
          </div>
          <h4>FLACT</h4>
          <p class="muted">Federación Latinoamericana de Comunidades Terapéuticas</p>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-bg"></div>
    <div class="container">
      <div class="cta-inner">
        <div class="cta-content">
          <h2>¿Listo para certificarte?</h2>
          <p class="lead">Completá tu solicitud en línea. El proceso es claro, documentado y alineado con estándares internacionales.</p>
        </div>
        <div class="cta-actions">
          <router-link to="/solicitud" class="btn btn-gold btn-lg">Iniciar solicitud</router-link>
          <router-link to="/contacto" class="btn btn-outline btn-lg" style="border-color: rgba(255,255,255,0.4); color: var(--white);">Consultar primero</router-link>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { useCertificacionesStore } from '@/stores/certificaciones'
import { storeToRefs } from 'pinia'
import logoAscad from '/images/ASCAD.png'
import logoAforind from '/images/AFORING.jpg'
import logoFlact from '/images/FLACT.png'

const store = useCertificacionesStore()
const { origins, levels, stats } = storeToRefs(store)
</script>

<style scoped>
/* HERO */
.hero {
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-height) + 60px) 0 80px;
  background: linear-gradient(160deg, var(--bg-light) 0%, var(--white) 60%, var(--accent-light) 100%);
  position: relative;
  overflow: hidden;
}
.hero-bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(10,37,64,0.04) 0%, transparent 50%);
  pointer-events: none;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 8px 8px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 500;
  letter-spacing: .1em;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 28px;
  box-shadow: var(--shadow-sm);
}
.badge-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent-gradient);
}
.badge-tap, .badge-tip {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-left: 4px;
}
.badge-tap {
  background: var(--primary);
  color: var(--white);
}
.badge-tip {
  background: var(--primary-mid);
  color: var(--white);
}
.hero-title {
  color: var(--text);
  line-height: 1.1;
}
.text-gradient { color: var(--accent-dark); }
.hero-lead {
  font-size: 1.1875rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 540px;
  margin-top: 20px;
}
.hero-lead strong { color: var(--accent-dark); }
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 40px;
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.stat-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: var(--shadow-md);
  transition: all .3s ease;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.stat-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius);
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
}
.stat-info { display: flex; flex-direction: column; gap: 2px; }
.stat-number { font-size: 2rem; font-weight: 700; color: var(--primary); line-height: 1.1; font-family: var(--font-display); }
.stat-label { font-size: .875rem; color: var(--text-secondary); font-weight: 500; }
.stat-desc { font-size: .8125rem; color: var(--text-muted); margin-top: 4px; }

/* ABOUT */
.about-section { background: var(--white); }
.section-header { margin-bottom: 56px; }
.section-header.centered { text-align: center; }
.section-header.centered .lead { margin: 16px auto 0; }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.about-card {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 36px;
  transition: all .3s ease;
}
.about-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.about-card-accent {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-color: transparent;
}
.about-card-accent * { color: var(--white) !important; }
.about-card-accent .eyebrow { color: rgba(255,255,255,0.7) !important; }
.about-card-accent .eyebrow::before { background: rgba(255,255,255,0.4); }
.about-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.about-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}
.about-card h3 { margin: 12px 0 10px; color: var(--text); }
.about-card p { font-size: .9375rem; color: var(--text-secondary); line-height: 1.7; }
.about-card-accent p { color: rgba(255,255,255,0.85); }

.about-timeline {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 40px 48px;
  box-shadow: var(--shadow-sm);
}
.timeline-item { text-align: center; }
.timeline-year {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 8px;
}
.timeline-item p { font-size: .8125rem; color: var(--text-muted); line-height: 1.5; }

/* PATH */
.path-section { background: var(--bg-light); }
.path-track {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  position: relative;
  margin-top: 64px;
}
.path-connector {
  position: absolute;
  top: 36px;
  left: calc(100% / 12 - 8px);
  right: calc(100% / 12 - 8px);
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-dark));
  z-index: 0;
}
.path-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 12px;
}
.path-node {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(201,168,76,0.2);
  transition: all .3s ease;
  position: relative;
  z-index: 2;
}
.path-step:hover .path-node {
  background: var(--accent-gradient);
  transform: scale(1.1);
}
.path-node:hover { box-shadow: 0 8px 28px rgba(201,168,76,0.35); }
.path-code { font-size: .5rem; font-weight: 700; color: var(--accent-dark); letter-spacing: .05em; }
.path-icon { font-size: 1.25rem; margin-top: 2px; }
.path-info h4 { font-size: .9375rem; color: var(--text); margin-bottom: 6px; }
.path-info p { font-size: .75rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px; }
.path-fee { display: flex; justify-content: center; }
.section-cta { text-align: center; margin-top: 56px; }

/* ALLIES */
.allies-section { background: var(--white); }
.allies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 56px;
}
.ally-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 40px 28px;
  text-align: center;
  transition: all .3s ease;
}
.ally-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-light);
}
.ally-logo { margin-bottom: 20px; }
.ally-logo-placeholder {
  width: 80px; height: 80px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  background: var(--bg-light);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}
.ally-card h4 { color: var(--text); font-size: 1.125rem; margin-bottom: 8px; }
.ally-card p { font-size: .875rem; }

/* CTA */
.cta-section {
  position: relative;
  padding: 100px 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 50%, var(--primary-dark) 100%);
  overflow: hidden;
}
.cta-bg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%);
}
.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
.cta-content h2 { color: var(--white); margin-bottom: 12px; }
.cta-content .lead { color: rgba(255,255,255,0.85); max-width: 500px; }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }

/* RESPONSIVE */
@media (max-width: 1100px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .hero-stats { max-width: 500px; }
  .path-track { grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .path-connector { display: none; }
}
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-timeline { grid-template-columns: repeat(2, 1fr); padding: 28px; }
  .allies-grid { grid-template-columns: 1fr; }
  .path-track { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .cta-inner { flex-direction: column; align-items: flex-start; }
  .hero-stats { max-width: 100%; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .stats-grid { grid-template-columns: 1fr; }
  .ally-card { padding: 28px 20px; }
}
</style>