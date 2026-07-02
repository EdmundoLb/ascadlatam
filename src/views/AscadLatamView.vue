<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('ascadlatam.heroEyebrow') }}</div>
        <h1>{{ $t('ascadlatam.heroTitulo') }}</h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('ascadlatam.heroLead') }}
        </p>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container">
        <div class="intro-content">
          <p class="intro-text">
            {{ $t('ascadlatam.introTexto') }}
          </p>
        </div>
      </div>
    </section>

    <section class="section timeline-section">
      <div class="container">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item1Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item1Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item1Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item2Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item2Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item2Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item3Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item3Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item3Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item4Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item4Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item4Texto') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section benefits-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">ASCAD/LATAM</div>
          <h2>Impacto y <em class="gold">beneficios</em></h2>
        </div>

        <div class="benefit-block">
          <h3>{{ $t('ascadlatam.beneficiosPaises') }}</h3>
          <p>{{ $t('ascadlatam.beneficiosPaisesDesc1') }}</p>
          <p>{{ $t('ascadlatam.beneficiosPaisesDesc2') }}</p>
          <p>{{ $t('ascadlatam.beneficiosPaisesDesc3') }}</p>
          <ul class="benefit-list">
            <li v-for="n in 10" :key="n">
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t(`ascadlatam.beneficiosPaisesLista.item${n}`) }}</span>
            </li>
          </ul>
        </div>

        <div class="benefit-block">
          <h3>{{ $t('ascadlatam.beneficiosInstituciones') }}</h3>
          <p>{{ $t('ascadlatam.beneficiosInstitucionesDesc') }}</p>
          <p>{{ $t('ascadlatam.principalesBeneficiosInst') }}</p>
          <ul class="benefit-list">
            <li v-for="n in 7" :key="n">
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t(`ascadlatam.beneficiosInstitucionesLista.item${n}`) }}</span>
            </li>
          </ul>
        </div>

        <div class="benefit-block">
          <h3>{{ $t('ascadlatam.beneficiosProfesionales') }}</h3>
          <p>{{ $t('ascadlatam.beneficiosProfesionalesDesc') }}</p>
          <p>{{ $t('ascadlatam.laCertificacionPermite') }}</p>
          <ul class="benefit-list">
            <li v-for="n in 8" :key="n">
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t(`ascadlatam.beneficiosProfesionalesLista.item${n}`) }}</span>
            </li>
          </ul>
        </div>

        <div class="benefit-block">
          <h3>{{ $t('ascadlatam.beneficiosFamilias') }}</h3>
          <p>{{ $t('ascadlatam.beneficiosFamiliasDesc') }}</p>
          <p>{{ $t('ascadlatam.estoSeTraduce') }}</p>
          <ul class="benefit-list">
            <li v-for="n in 6" :key="n">
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t(`ascadlatam.beneficiosPersonasLista.item${n}`) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section investment-section">
      <div class="container">
        <div class="investment-content">
          <h2>{{ $t('ascadlatam.inversionLatam') }}</h2>
          <p>{{ $t('ascadlatam.inversionLatamDesc') }}</p>
          <p>{{ $t('ascadlatam.ascadContinua') }}</p>
        </div>
      </div>
    </section>

    <section class="section closing-section">
      <div class="container">
        <div class="closing-content">
          <p class="closing-text">
            {{ $t('ascadlatam.closingTexto') }}
          </p>
          <div class="tagline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>{{ $t('ascadlatam.tagline') }}</span>
          </div>
          <div class="cta-buttons">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">{{ $t('home.iniciarSolicitud') }}</router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg" style="border-color: rgba(255,255,255,0.4); color: var(--white);">{{ $t('home.btnCertificaciones') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro-section { background: var(--white); }
.intro-content { max-width: 800px; margin: 0 auto; }
.intro-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.9;
  text-align: center;
}

.timeline-section { background: var(--bg-light); }
.timeline {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  align-items: start;
}
.timeline-year {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-dark);
  line-height: 1;
  text-align: right;
  padding-top: 4px;
}
.timeline-content {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 32px 36px;
  border: 1px solid var(--line-light);
  box-shadow: var(--shadow-sm);
  position: relative;
}
.timeline-content::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 28px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: var(--white);
}
.timeline-content h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 12px;
}
.timeline-content p {
  font-size: .9375rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.closing-section { background: var(--primary); color: var(--white); }
.closing-content { max-width: 800px; margin: 0 auto; text-align: center; }
.closing-text {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin-bottom: 40px;
}
.tagline {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--radius-lg);
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--accent);
}
.tagline svg { flex-shrink: 0; color: var(--accent); }

.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }

.benefits-section { background: var(--white); }
.section-header { text-align: center; margin-bottom: 48px; }
.section-header h2 { font-family: var(--font-display); font-size: 2rem; color: var(--text); margin: 8px 0 0; }

.benefit-block {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 32px;
}
.benefit-block:last-child { margin-bottom: 0; }
.benefit-block h3 { font-size: 1.5rem; color: var(--text); margin-bottom: 16px; }
.benefit-block > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.benefit-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  background: var(--bg-light);
  border-radius: var(--radius);
}
.check-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: 50%;
  color: var(--accent-dark);
}
.check-icon svg { width: 14px; height: 14px; }
.benefit-list li span:last-child { color: var(--text); font-size: .9375rem; line-height: 1.5; }

.investment-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
}
.investment-content { max-width: 800px; margin: 0 auto; text-align: center; }
.investment-content h2 { color: var(--white); margin-bottom: 24px; font-size: 1.75rem; }
.investment-content p { color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 16px; }
.investment-content p:last-child { margin-bottom: 0; }

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .timeline-year { text-align: left; font-size: 2rem; }
  .timeline-content::before { display: none; }
  .tagline { flex-direction: column; text-align: center; }
  .benefit-block { padding: 32px 24px; }
  .benefit-list { grid-template-columns: 1fr; }
}
</style>