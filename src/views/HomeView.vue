<template>
  <div>
    <!-- HERO -->
    <section class="hero">
    <div class="hero-bg-pattern"></div>
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
            Consorcio de Certificación<br>
            <span class="text-gradient">Latinoamericano</span><br>
            en Adicciones
          </h1>
          <div class="hero-brand">
            <span class="brand-flact">FLACT</span>
            <span class="brand-separator"> · </span>
            <span class="brand-ascal">ASCAD LATAM</span>
          </div>
          <p class="hero-lead">
            Certificamos profesionales con estándares internacionales
            garantizando competencias integrales:
            <strong class="competency-tooltip">
              Saber Conocer
              <span class="tooltip-text">Dominio teórico y comprensión de los ejes de formación</span>
            </strong>,
            <strong class="competency-tooltip">
              Saber Hacer
              <span class="tooltip-text">Aplicación práctica de protocolos y metodologías</span>
            </strong> y
            <strong class="competency-tooltip">
              Saber Ser
              <span class="tooltip-text">Ética, liderazgo y responsabilidad social</span>
            </strong>.
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
          <div class="stats-subtitle">Certificaciones Internacionales basadas en TAP 21, TIP 64 y TIP 52</div>
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-card">
              <div class="stat-icon">
                <svg v-if="stat.shortLabel === 'TAP 21'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                <svg v-else-if="stat.shortLabel === 'TIP 64'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <svg v-else-if="stat.shortLabel === 'TIP 52'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div class="stat-info">
                <div class="stat-number-row">
                  <span class="stat-number">{{ stat.num }}</span>
                  <span class="stat-short-label" :title="stat.tooltip">{{ stat.shortLabel }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="scroll-indicator">
            <span class="scroll-text">Descubrí más</span>
            <div class="scroll-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  <!-- ABOUT -->
  <section class="section about-section animate-on-scroll">
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

  <!-- ESTÁNDARES INTERNACIONALES -->
  <section class="section standards-section animate-on-scroll">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Estándares Internacionales</div>
        <h2>Fundamentos técnicos de<br><em class="gold">nuestra certificación</em></h2>
      </div>
      <div class="standards-grid">
        <div class="standard-card">
          <div class="standard-badge">TAP 21</div>
          <div class="standard-content">
            <h4>Treatment Accessibility Protocol 21</h4>
            <p>Establece las 12 funciones esenciales del consejero profesional en adicciones, proporcionando un marco de competencias reconocido internacionalmente para la práctica clínica y el desarrollo profesional.</p>
          </div>
        </div>
        <div class="standard-card">
          <div class="standard-badge">TIP 64</div>
          <div class="standard-content">
            <h4>Treatment Improvement Protocol 64</h4>
            <p>Proporciona base científica e metodológica para la implementación de servicios de apoyo entre pares y recuperación, adaptados a la realidad cultural y social de América Latina.</p>
          </div>
        </div>
        <div class="standard-card">
          <div class="standard-badge">TIP 52</div>
          <div class="standard-content">
            <h4>Treatment Improvement Protocol 52</h4>
            <p>Guía especializada en la supervisión clínica y el desarrollo profesional continuo del consejero en adicciones.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA INTERMEDIO -->
  <section class="section cta-intermediate">
    <div class="container">
      <div class="cta-intermediate-inner">
        <div class="cta-intermediate-content">
          <h3>Conocé tu nivel de certificación</h3>
          <p>Explorá los seis niveles y encontrá el punto de partida ideal para tu desarrollo profesional en adicciones.</p>
        </div>
        <div class="cta-intermediate-actions">
          <router-link to="/certificaciones" class="btn btn-gold btn-lg">
            Ver certificaciones
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
          <router-link to="/solicitud" class="btn btn-outline btn-lg">
            Iniciar solicitud
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- CULTURAL ADAPTABILITY -->
  <section class="section cultural-section animate-on-scroll">
    <div class="container">
      <div class="cultural-inner">
        <div class="cultural-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          Adaptación cultural
        </div>
        <h2 class="cultural-title">¿Es esta certificación <em class="gold">culturalmente adaptable</em> a Latinoamérica?</h2>
        <div class="cultural-grid">
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h4>Basada en evidencia internacional</h4>
            <p>Estándares y competencias sustentadas en evidencia, adaptados a la realidad cultural y social de Latinoamérica.</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4>Elementos propios de la región</h4>
            <p>Familia, espiritualidad, redes comunitarias y desafíos sociales integrados en el enfoque.</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4>Protección para usuarios y familias</h4>
            <p>Formación continua, ética profesional y estándares internacionales orientados a una atención humana y responsable.</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4>Certificación de competencias</h4>
            <p>Un aval de que la persona posee las competencias necesarias para desempeñarse adecuadamente en su nivel profesional.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS PATH -->
  <section class="section path-section animate-on-scroll">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Escalera de desarrollo</div>
        <h2>Tu ruta profesional<br>en <em class="gold">adicciones</em></h2>
        <p class="lead" style="margin-top: 16px; max-width: 600px;">Seis niveles de certificación diseñados para acompañarte en cada etapa de tu desarrollo profesional.</p>
      </div>
      <div class="path-grid">
        <div v-for="(level, index) in levels" :key="level.code" class="path-card">
          <div class="path-card-header">
            <div class="path-node">
              <span class="path-code">{{ level.code }}</span>
              <span class="path-icon" v-html="levelIcons[level.code]"></span>
            </div>
            <div class="path-number">{{ String(index + 1).padStart(2, '0') }}</div>
          </div>
          <div class="path-card-body">
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
        <div class="eyebrow">Certificación Internacional</div>
        <h2>Estándares que <em class="gold">respaldan</em> nuestra certificación</h2>
      </div>
      <div class="allies-grid">
        <router-link to="/certificaciones" class="ally-card">
          <div class="ally-logo">
            <div class="ally-logo-placeholder">
              <img :src="logoAscad" alt="ASCAD LATAM" width="48" height="48" style="object-fit:contain" />
            </div>
          </div>
          <h4>ASCAD LATAM</h4>
          <p class="muted">Certificación y Acreditación en Adicciones para América Latina</p>
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
import { onMounted, onUnmounted } from 'vue'
import logoAscad from '/images/optimized/LOGO_ASCAD10.webp'
import { levelIcons } from '@/data/certificaciones'

const store = useCertificacionesStore()
const { origins, levels, stats } = storeToRefs(store)

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

let scrollObserver = null

onMounted(() => {
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        scrollObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el)
  })
})

onUnmounted(() => {
  if (scrollObserver) {
    scrollObserver.disconnect()
    scrollObserver = null
  }
})
</script>

<style scoped>
/* HERO */
/* SCROLL ANIMATIONS */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* MICROINTERACTIONS */
.btn {
  transition: all .25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
  opacity: 0;
  transition: opacity .3s ease;
}
.btn:hover::after {
  opacity: 1;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
.btn:active {
  transform: translateY(0) scale(0.98);
}
.btn-gold {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  border-color: var(--accent-dark);
}
.btn-gold:hover {
  background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%);
}

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
.hero-title {
  color: var(--text);
  line-height: 1.1;
}
.hero-brand {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 16px;
  letter-spacing: -0.02em;
}
.hero-brand .brand-flact { color: var(--accent-dark); }
.hero-brand .brand-separator { color: var(--text-muted); }
.hero-brand .brand-ascal { color: var(--primary); }
.text-gradient { color: var(--accent-dark); }
.hero-lead strong { color: var(--accent-dark); }
.hero-lead .competency-tooltip {
  position: relative;
  cursor: help;
  border-bottom: 1px dashed var(--accent);
}
.tooltip-text {
  visibility: hidden;
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--text);
  color: var(--white);
  padding: 8px 12px;
  border-radius: var(--radius);
  font-size: .75rem;
  font-weight: 400;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity .2s;
}
.tooltip-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--text);
}
.competency-tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 40px;
}
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  opacity: 0.7;
  animation: bounce 2s ease-in-out infinite;
}
.scroll-text {
  font-family: var(--font-mono);
  font-size: .625rem;
  text-transform: uppercase;
  letter-spacing: .15em;
}
.scroll-arrow {
  animation: bounce-arrow 2s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); opacity: 0.7; }
  50% { transform: translateY(4px); opacity: 1; }
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
.stat-number-row { display: flex; align-items: baseline; gap: 8px; }
.stat-number { font-size: 2.5rem; font-weight: 700; color: var(--primary); line-height: 1; font-family: var(--font-display); }
.stat-short-label { font-family: var(--font-mono); font-size: .625rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent-dark); background: var(--accent-light); padding: 3px 8px; border-radius: var(--radius-sm); cursor: help; position: relative; }
.stat-short-label:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--text);
  color: var(--white);
  padding: 8px 12px;
  border-radius: var(--radius);
  font-size: .7rem;
  font-weight: 400;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity .2s;
  pointer-events: none;
}
.stat-short-label:hover::after { opacity: 1; }
.stat-label { font-size: .875rem; color: var(--text-secondary); font-weight: 500; }
.stat-desc { font-size: .8125rem; color: var(--text-muted); margin-top: 4px; }
.stats-subtitle {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--accent-dark);
  background: var(--accent-light);
  border: 1px solid rgba(201,168,76,0.3);
  padding: 8px 16px;
  border-radius: var(--radius);
  text-align: center;
  margin-bottom: 20px;
}

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
  grid-template-columns: repeat(3, 1fr);
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

/* STANDARDS SECTION */
.standards-section { background: var(--white); }
.standards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.standard-card {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: all .3s ease;
}
.standard-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.standard-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--white);
  background: var(--primary);
  padding: 8px 16px;
  border-radius: var(--radius);
  margin-bottom: 20px;
}
.standard-content h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
}
.standard-content p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin: 0;
}

/* PATH */
.path-section { background: var(--bg-light); }
.path-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 56px;
}
.path-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 28px;
  transition: all .3s ease;
  position: relative;
  overflow: hidden;
}
.path-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-dark));
  opacity: 0;
  transition: opacity .3s ease;
}
.path-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.path-card:hover::before { opacity: 1; }
.path-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.path-node {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: var(--accent-light);
  border: 2px solid var(--accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
}
.path-card:hover .path-node {
  background: var(--accent);
}
.path-node svg { color: var(--accent-dark); }
.path-card:hover .path-node svg { color: var(--white); }
.path-code { font-size: .5rem; font-weight: 700; color: var(--accent-dark); letter-spacing: .05em; }
.path-card:hover .path-code { color: var(--white); }
.path-icon { font-size: 1.25rem; margin-top: 2px; }
.path-icon svg { width: 24px; height: 24px; }
.path-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-light);
  line-height: 1;
  opacity: 0.5;
}
.path-card-body h4 { font-size: 1rem; color: var(--text); margin-bottom: 8px; }
.path-card-body p { font-size: .8125rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px; }
.path-fee { display: flex; }
.section-cta { text-align: center; margin-top: 56px; }

/* ALLIES */
.allies-section { background: var(--white); }
.allies-grid {
  display: flex;
  justify-content: center;
  margin-top: 56px;
}
.ally-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px 64px;
  text-align: center;
  transition: all .3s ease;
  max-width: 480px;
  width: 100%;
}
.ally-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-light);
}
.ally-logo { margin-bottom: 20px; }
.ally-logo-placeholder {
  width: 100px; height: 100px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  background: var(--bg-light);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  overflow: hidden;
}
.ally-card h4 { color: var(--text); font-size: 1.25rem; margin-bottom: 8px; }
.ally-card p { font-size: .9375rem; color: var(--text-muted); }

/* CULTURAL SECTION */
.cultural-section {
  background: var(--white);
  padding: 100px 0;
}
.cultural-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.cultural-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: var(--accent-light);
  border: 1px solid var(--accent);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 32px;
}
.cultural-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  margin-bottom: 56px;
  text-align: center;
}
.cultural-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.cultural-point {
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: all .3s ease;
}
.cultural-point:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}
.cultural-point-icon {
  width: 48px; height: 48px;
  border-radius: var(--radius);
  background: var(--white);
  border: 1px solid var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
  margin-bottom: 16px;
}
.cultural-point h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 8px;
}
.cultural-point p {
  font-size: .9375rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}
.cultural-point em.gold {
  color: var(--accent-dark);
  font-style: normal;
}

/* CTA INTERMEDIO */
.cta-intermediate {
  background: var(--bg-light);
  padding: 80px 0;
}
.cta-intermediate-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px 56px;
  box-shadow: var(--shadow-md);
}
.cta-intermediate-content h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 8px;
}
.cta-intermediate-content p {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 500px;
}
.cta-intermediate-actions { display: flex; gap: 16px; flex-shrink: 0; }

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
  .path-grid { grid-template-columns: repeat(2, 1fr); }
  .cultural-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-timeline { grid-template-columns: repeat(2, 1fr); padding: 28px; }
  .allies-grid { justify-content: center; }
  .ally-card { padding: 40px; max-width: 400px; }
  .path-grid { grid-template-columns: 1fr; max-width: 400px; margin-left: auto; margin-right: auto; }
  .cultural-grid { grid-template-columns: 1fr; }
  .cta-intermediate-inner { flex-direction: column; text-align: center; padding: 40px 32px; }
  .cta-intermediate-actions { flex-direction: column; width: 100%; }
  .cta-intermediate-actions .btn { width: 100%; justify-content: center; }
  .cta-inner { flex-direction: column; align-items: flex-start; }
  .hero-stats { max-width: 100%; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .cultural-title { font-size: 2rem; }
  .scroll-indicator { bottom: 24px; }
}
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .stats-grid { grid-template-columns: 1fr; }
  .ally-card { padding: 28px 20px; }
  .cultural-title { font-size: 1.625rem; }
  .cta-intermediate-actions { flex-direction: column; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
  }
  .hero-stats,
  .hero-content {
    animation: none;
    opacity: 1;
  }
}
</style>