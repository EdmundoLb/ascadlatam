<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('etica.eyebrow') }}</div>
        <h1>{{ $t('etica.titulo') }}</h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('etica.descripcion') }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <!-- COMPROMISO ÉTICO -->
        <div class="ethics-intro">
          <div class="ethics-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h2>{{ $t('etica.calidadComienza') }}</h2>
          <p>{{ $t('etica.calidadComienzaDesc') }}</p>
        </div>

        <!-- SISTEMA DE CERTIFICACIÓN -->
        <div class="cert-system-section">
          <h2>{{ $t('etica.sistemaCertificacion') }}</h2>
          <p>{{ $t('etica.sistemaCertificacionDesc1') }}</p>
          <p>{{ $t('etica.sistemaCertificacionDesc2') }}</p>
        </div>

        <!-- MONITOREO Y CUMPLIMIENTO -->
        <div class="monitoring-section">
          <h2>{{ $t('etica.monitoreoCumplimiento') }}</h2>
          <p>{{ $t('etica.monitoreoCumplimientoDesc') }}</p>
          <ul class="ethics-list">
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t('etica.practicaEtica') }}</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t('etica.investigarDenuncias') }}</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t('etica.protegerUsuarios') }}</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t('etica.garantizarTransparencia') }}</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>{{ $t('etica.aplicarMedidas') }}</span>
            </li>
          </ul>
          <p class="highlight-text">{{ $t('etica.destacadoEtica') }}</p>
        </div>

        <!-- DIVERSIDAD CULTURAL -->
        <div class="diversity-section">
          <h2>{{ $t('etica.respetoDiversidad') }}</h2>
          <p>{{ $t('etica.respetoDiversidadDesc1') }}</p>
          <p>{{ $t('etica.respetoDiversidadDesc2') }}</p>
          <div class="diversity-highlight">
            <p><strong>{{ $t('etica.diversidadFortaleza') }}</strong> {{ $t('etica.diversidadFortalezaDesc') }}</p>
          </div>
        </div>

        <!-- CONFIANZA Y TRANSPARENCIA -->
        <div class="transparency-section">
          <h2>{{ $t('etica.confianzaTransparencia') }}</h2>
          <p>{{ $t('etica.confianzaTransparenciaDesc1') }}</p>
          <p>{{ $t('etica.confianzaTransparenciaDesc2') }}</p>
        </div>

        <!-- RED LATINOAMERICANA -->
        <div class="network-section">
          <h2>{{ $t('etica.redLatinoamericana') }}</h2>
          <p>{{ $t('etica.redLatinoamericanaDesc1') }}</p>
          <p>{{ $t('etica.redLatinoamericanaDesc2') }}</p>
          <p>{{ $t('etica.redLatinoamericanaDesc3') }}</p>
        </div>

        <!-- PAÍSES AFILIADOS: ver Directorio -->
        <p class="directorio-link">
          <router-link to="/directorio">{{ $t('etica.verDirectorioLink') }} →</router-link>
        </p>

        <!-- CTA -->
        <div class="etica-cta">
          <h3>{{ $t('etica.conocerMas') }}</h3>
          <p>{{ $t('etica.exploraCertificaciones') }}</p>
          <div class="cta-buttons">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">{{ $t('home.iniciarSolicitud') }}</router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg">{{ $t('home.btnCertificaciones') }}</router-link>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.ethics-intro {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
  text-align: center;
}
.ethics-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-lg);
  margin: 0 auto 24px;
  color: var(--accent-dark);
}
.ethics-icon svg { width: 32px; height: 32px; }
.ethics-intro h2 { margin-bottom: 20px; }
.ethics-intro p { color: var(--text-secondary); line-height: 1.8; font-size: 1.0625rem; max-width: 800px; margin: 0 auto; }

.cert-system-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-radius: var(--radius-xl);
  padding: 56px;
  margin-bottom: 48px;
}
.cert-system-section h2 { color: var(--white); margin-bottom: 24px; font-size: 1.5rem; }
.cert-system-section p { color: rgba(255,255,255,0.85); line-height: 1.8; font-size: 1rem; margin-bottom: 16px; }
.cert-system-section p:last-child { margin-bottom: 0; }

.monitoring-section {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.monitoring-section h2 { margin-bottom: 20px; font-size: 1.5rem; }
.monitoring-section > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 24px; }
.monitoring-section > p strong { color: var(--text); }

.ethics-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.ethics-list li {
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
.ethics-list li span:last-child {
  color: var(--text);
  font-size: .9375rem;
  line-height: 1.5;
}

.highlight-text {
  background: var(--accent-light);
  border-left: 4px solid var(--accent);
  padding: 20px 24px;
  border-radius: var(--radius);
  font-style: italic;
  color: var(--text);
}

.diversity-section {
  background: var(--bg-light);
  border-radius: var(--radius-xl);
  padding: 56px;
  margin-bottom: 48px;
}
.diversity-section h2 { margin-bottom: 24px; font-size: 1.5rem; }
.diversity-section p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
.diversity-highlight {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius);
  padding: 24px;
  margin-top: 24px;
}
.diversity-highlight p { color: var(--text); margin-bottom: 0; }
.diversity-highlight strong { color: var(--accent-dark); }

.transparency-section {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.transparency-section h2 { margin-bottom: 20px; font-size: 1.5rem; }
.transparency-section p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
.transparency-section p:last-child { margin-bottom: 0; }

.network-section {
  background: var(--primary);
  border-radius: var(--radius-xl);
  padding: 56px;
  margin-bottom: 48px;
}
.network-section h2 { color: var(--white); margin-bottom: 24px; font-size: 1.5rem; }
.network-section p { color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 16px; }
.network-section p:last-child { margin-bottom: 0; }
.network-section strong { color: var(--accent); }

.directorio-link {
  text-align: center;
  margin-bottom: 48px;
}
.directorio-link a {
  color: var(--accent-dark);
  font-weight: 600;
  text-decoration: none;
}
.directorio-link a:hover { text-decoration: underline; }

.etica-cta {
  background: var(--accent-light);
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-xl);
  padding: 56px;
  text-align: center;
}
.etica-cta h3 { font-size: 1.5rem; margin-bottom: 16px; color: var(--text); }
.etica-cta p { color: var(--text-secondary); max-width: 560px; margin: 0 auto 32px; line-height: 1.7; }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 1024px) {
  .ethics-list { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .ethics-intro, .cert-system-section, .monitoring-section,
  .diversity-section, .transparency-section, .network-section,
  .etica-cta { padding: 32px 24px; }
}
@media (max-width: 600px) {
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>