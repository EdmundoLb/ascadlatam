<template>
  <div>
    <!-- HERO -->
    <section class="hero">
    <div class="hero-bg-pattern"></div>
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content animate-fade-in-up">
<h1 class="hero-title">
            <!-- v-html: texto fijo desde locales es/pt, no contenido dinámico -->
            <span class="title-main" v-html="$t('home.tituloHero')"></span>
          </h1>
          <p class="hero-lead">
            {{ $t('home.descripcion') }}
          </p>
          <div class="hero-actions">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
              {{ $t('home.btnIniciarSolicitud') }}
            </router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg">
              {{ $t('home.btnCertificaciones') }}
            </router-link>
          </div>
        </div>
<div class="hero-stats animate-fade-in-up" style="animation-delay: 0.15s">
          <div class="stats-subtitle">{{ $t('home.certificados') }}</div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div class="stat-info">
                <div class="stat-number-row">
                  <span class="stat-number">8</span>
                </div>
                <span class="stat-short-label" title="Costa Rica, Nicaragua, Panamá, México, República Dominicana, Ecuador, Paraguay, Chile">{{ $t('home.paises') }}</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div class="stat-info">
                <div class="stat-number-row">
                  <span class="stat-number">6</span>
                </div>
                <span class="stat-short-label" title="OST, EPR, CCAAD I, CCAAD II, CCAAD III, CCAAD IV">{{ $t('home.anos') }}</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div class="stat-info">
                <div class="stat-number-row">
                  <span class="stat-number">TAP 21</span>
                </div>
                <span class="stat-short-label" title="Treatment Accessibility Protocol 21">{{ $t('home.anos') }}</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="stat-info">
                <div class="stat-number-row">
                  <span class="stat-number">TIP 64</span>
                </div>
                <span class="stat-short-label" title="Treatment Improvement Protocol 64">{{ $t('home.anos') }}</span>
              </div>
            </div>
          </div>
          <div class="scroll-indicator">
            <span class="scroll-text">{{ $t('home.certificacionesOtorgadas') }}</span>
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
        <div class="eyebrow">{{ $t('home.sobreNosostros') }}</div>
        <h2>{{ $t('home.sobreTitulo') }}</h2>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-card-header">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="eyebrow" style="margin-bottom: 0">{{ $t('home.mision') }}</div>
          </div>
          <h3>{{ $t('home.misionTitulo') }}</h3>
          <p>{{ $t('home.misionDesc') }}</p>
        </div>
        <div class="about-card about-card-accent">
          <div class="about-card-header">
            <div class="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div class="eyebrow" style="margin-bottom: 0">{{ $t('home.vision') }}</div>
          </div>
          <h3>{{ $t('home.visionTitulo') }}</h3>
          <p>{{ $t('home.visionDesc') }}</p>
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
  <section class="section standards-section section-alt animate-on-scroll">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">{{ $t('home.estandares') }}</div>
        <h2>{{ $t('home.fundamentosTecnicos') }}<br><em class="gold">{{ $t('home.certificaciones') }}</em></h2>
      </div>
      <div class="standards-grid">
        <div class="standard-card">
          <div class="standard-badge">TAP 21</div>
          <div class="standard-content">
            <h4>Treatment Accessibility Protocol 21</h4>
            <p>{{ $t('home.tap21Desc') }}</p>
          </div>
        </div>
        <div class="standard-card">
          <div class="standard-badge">TIP 64</div>
          <div class="standard-content">
            <h4>Treatment Improvement Protocol 64</h4>
            <p>{{ $t('home.tip64Desc') }}</p>
          </div>
        </div>
        <div class="standard-card">
          <div class="standard-badge">TIP 52</div>
          <div class="standard-content">
            <h4>Treatment Improvement Protocol 52</h4>
            <p>{{ $t('home.tip52Desc') }}</p>
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
          <h3>{{ $t('home.ctaIntermedioTitulo') }}</h3>
          <p>{{ $t('home.ctaIntermedioDesc') }}</p>
        </div>
        <div class="cta-intermediate-actions">
          <router-link to="/certificaciones" class="btn btn-gold btn-lg">
            {{ $t('home.ver') }} {{ $t('home.certificaciones').toLowerCase() }}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
          <router-link to="/solicitud" class="btn btn-outline btn-lg">
{{ $t('home.iniciarSolicitud') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- CULTURAL ADAPTABILITY -->
  <section class="section cultural-section section-alt animate-on-scroll">
    <div class="container">
      <div class="cultural-inner">
        <div class="cultural-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          {{ $t('home.adaptacionCultural') }}
        </div>
        <!-- v-html: texto fijo desde locales es/pt, no contenido dinámico -->
        <h2 class="cultural-title" v-html="$t('home.culturalTitulo')"></h2>
        <div class="cultural-grid">
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h4>{{ $t('home.culturalItem1Titulo') }}</h4>
            <p>{{ $t('home.culturalItem1Desc') }}</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4>{{ $t('home.culturalItem2Titulo') }}</h4>
            <p>{{ $t('home.culturalItem2Desc') }}</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4>{{ $t('home.culturalItem3Titulo') }}</h4>
            <p>{{ $t('home.culturalItem3Desc') }}</p>
          </div>
          <div class="cultural-point">
            <div class="cultural-point-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4>{{ $t('home.culturalItem4Titulo') }}</h4>
            <p>{{ $t('home.culturalItem4Desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CERTIFICATIONS PATH -->
  <section class="section path-section animate-on-scroll">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">{{ $t('home.escaleraDesarrollo') }}</div>
        <h2>Tu {{ $t('home.rutaFormacion').toLowerCase() }}<br>en <em class="gold">{{ $t('home.adicciones') }}</em></h2>
        <p class="lead" style="margin-top: 16px; max-width: 600px;">{{ $t('home.rutaFormacionDesc') }}</p>
      </div>
      <div class="path-grid">
        <div v-for="(level, index) in levels" :key="level.code" class="path-card" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="path-card-header">
            <div class="path-node">
              <span class="path-code">{{ level.code }}</span>
              <!-- v-html: SVG fijo definido en data/certificaciones.js -->
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
          {{ $t('home.verTodosRequisitos') }}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- PAÍSES MIEMBROS -->
  <section class="section countries-section">
    <div class="container">
      <div class="section-header centered">
        <div class="eyebrow">{{ $t('home.coberturaRegional') }}</div>
        <h2>{{ $t('home.paisesMiembros') }} <em class="gold">{{ $t('home.miembros') }}</em></h2>
        <p class="lead" style="margin-top: 16px; max-width: 600px; margin-left: auto; margin-right: auto;">{{ $t('home.redRegional') }}</p>
      </div>
      <div class="countries-grid">
        <div class="country-card">
          <img src="https://flagcdn.com/w40/cr.png" :alt="$t('home.costaRica')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.costaRica') }}</h4>
            <p>{{ $t('home.costaRicaDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/ni.png" :alt="$t('home.nicaragua')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.nicaragua') }}</h4>
            <p>{{ $t('home.nicaraguaDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/pa.png" :alt="$t('home.panama')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.panama') }}</h4>
            <p>{{ $t('home.panamaDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/mx.png" :alt="$t('home.mexico')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.mexico') }}</h4>
            <p>{{ $t('home.mexicoDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/do.png" :alt="$t('home.republicaDominicana')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.repDominicana') }}</h4>
            <p>{{ $t('home.republicaDominicanaDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/ec.png" :alt="$t('home.ecuador')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.ecuador') }}</h4>
            <p>{{ $t('home.ecuadorDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/py.png" :alt="$t('home.paraguay')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.paraguay') }}</h4>
            <p>{{ $t('home.paraguayDesc') }}</p>
          </div>
        </div>
        <div class="country-card">
          <img src="https://flagcdn.com/w40/cl.png" :alt="$t('home.chile')" class="country-flag" loading="lazy" />
          <div class="country-info">
            <h4>{{ $t('home.chile') }}</h4>
            <p>{{ $t('home.chileDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-bg"></div>
    <div class="container">
      <div class="cta-inner">
        <div class="cta-content">
          <h2>{{ $t('home.ctaTitulo') }}</h2>
          <p class="lead">{{ $t('home.ctaDesc') }}</p>
        </div>
        <div class="cta-actions">
          <router-link to="/solicitud" class="btn btn-gold btn-lg">{{ $t('home.iniciarSolicitud') }}</router-link>
          <router-link to="/contacto" class="btn btn-outline btn-lg" style="border-color: rgba(255,255,255,0.4); color: var(--white);">{{ $t('home.consultarPrimero') }}</router-link>
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
import { levelIcons } from '@/data/certificaciones'

const store = useCertificacionesStore()
const { origins, levels } = storeToRefs(store)

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
  overflow-x: hidden;
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
  margin-bottom: 0;
}
.title-main {
  display: block;
}
.title-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 16px;
  letter-spacing: .05em;
}
.title-brand .brand-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-left: 8px;
}
.title-brand .brand-flact { color: var(--primary); }
.title-brand .brand-sep { color: var(--primary); opacity: 0.5; }
.title-brand .brand-ascal { color: var(--primary); }
.text-gradient { color: var(--accent-dark); }
.hero-lead strong { color: var(--accent-dark); }
.hero-lead .competency-tooltip {
  position: relative;
  cursor: help;
  border-bottom: 2px solid var(--accent);
  font-weight: 600;
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  transition: all .2s ease;
}
.competency-tooltip:hover {
  background: var(--accent-light);
  color: var(--accent-dark);
}
.tooltip-text {
  visibility: hidden;
  position: absolute;
  bottom: 140%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: var(--primary);
  color: var(--white);
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  font-size: .8125rem;
  font-weight: 400;
  white-space: normal;
  width: 240px;
  text-align: center;
  z-index: 10;
  opacity: 0;
  transition: all .25s ease;
  box-shadow: var(--shadow-lg);
  line-height: 1.5;
}
.tooltip-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: var(--primary);
}
.competency-tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
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
.stats-subtitle .acronym {
  color: var(--accent-dark);
  font-weight: 700;
}

.stat-label { font-size: .875rem; color: var(--text-secondary); font-weight: 500; }
.stat-desc { font-size: .8125rem; color: var(--text-muted); margin-top: 4px; }
.stats-subtitle {
  font-family: var(--font-mono);
  font-size: .875rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(201,168,76,0.12);
  border: 1px solid var(--accent);
  padding: 10px 24px;
  border-radius: var(--radius);
  text-align: center;
  margin-bottom: 32px;
}
.stats-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
  margin-bottom: 32px;
}
.stat-logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
}

/* ABOUT */
.about-section { background: var(--white); }
.section-alt { background: var(--bg-light); }
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
.timeline-item {
  text-align: center;
  padding: 16px;
  border-radius: var(--radius-lg);
  transition: all .3s ease;
}
.timeline-item:hover {
  background: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
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
.path-section { background: var(--white); }
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
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

/* COUNTRIES */
.countries-section { background: var(--bg-light); }
.countries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.country-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all .3s ease;
}
.country-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}
.country-flag {
  width: 48px;
  height: 36px;
  object-fit: cover;
  border-radius: var(--radius);
  flex-shrink: 0;
  border: 1px solid var(--line-light);
}
.country-info h4 { font-size: .9375rem; color: var(--text); margin-bottom: 4px; }
.country-info p { font-size: .75rem; color: var(--text-muted); line-height: 1.4; }

/* CULTURAL SECTION */
.cultural-section {
  background: var(--bg-light);
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
  .standards-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .stats-grid { grid-template-columns: 1fr; }
  .ally-card { padding: 24px 16px; }
  .cultural-title { font-size: 1.625rem; }
  .cta-intermediate-actions { flex-direction: column; }
  .stat-logo { width: 100px; height: 100px; }
  .stats-logos { gap: 24px; }
  .standards-grid { grid-template-columns: 1fr; }
  .about-timeline { padding: 20px; }
  .cta-intermediate-inner { padding: 32px 20px; }
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