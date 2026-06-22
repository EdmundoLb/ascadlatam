<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('directorio.coberturaRegional') }}</div>
        <h1>{{ $t('directorio.paisesAfiliados') }}<br><em class="gold">ASCAD/LATAM</em></h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('directorio.descripcion') }}
        </p>
      </div>
    </section>

    <!-- PAÍSES MIEMBROS -->
    <section class="section countries-section">
      <div class="container">
        <div class="stats-summary">
          <div class="stat-item">
            <span class="stat-number">9</span>
            <span class="stat-label">{{ $t('directorio.paisesAfiliados') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">8</span>
            <span class="stat-label">{{ $t('directorio.profesionalesCertificados') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">{{ $t('directorio.compromisoExcelencia') }}</span>
          </div>
        </div>

        <div class="directory-cta">
          <div class="cta-content">
            <h3>¿Sos profesional de la salud o las ciencias sociales?</h3>
            <p>Obtené tu certificación internacional y forma parte de la red de profesionales certificados más grande de América Latina.</p>
          </div>
          <div class="cta-actions">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">Iniciar mi certificación</router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg">Ver certificaciones</router-link>
          </div>
        </div>

        <!-- PAÍSES AFILIADOS -->
        <div class="section-header">
          <div class="eyebrow">ASCAD/LATAM</div>
          <h2>{{ $t('directorio.paisesAfiliados') }} <em class="gold">a ASCAD/LATAM</em></h2>
        </div>
        <div class="countries-grid">
          <div class="country-card">
            <img src="https://flagcdn.com/w40/cr.png" :alt="$t('home.costaRica')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.costaRica') }}</h4>
              <p>{{ $t('directorio.costaRicaDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/ni.png" :alt="$t('home.nicaragua')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.nicaragua') }}</h4>
              <p>{{ $t('directorio.nicaraguaDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/pa.png" :alt="$t('home.panama')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.panama') }}</h4>
              <p>{{ $t('directorio.panamaDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/mx.png" :alt="$t('home.mexico')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.mexico') }}</h4>
              <p>{{ $t('directorio.mexicoDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/do.png" :alt="$t('home.republicaDominicana')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.repDominicana') }}</h4>
              <p>{{ $t('directorio.republicaDominicanaDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/ec.png" :alt="$t('home.ecuador')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.ecuador') }}</h4>
              <p>{{ $t('directorio.ecuadorDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/py.png" :alt="$t('home.paraguay')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.paraguay') }}</h4>
              <p>{{ $t('directorio.paraguayDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/cl.png" :alt="$t('home.chile')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.chile') }}</h4>
              <p>{{ $t('directorio.chileDesc') }}</p>
            </div>
          </div>
          <div class="country-card">
            <img src="https://flagcdn.com/w40/uy.png" :alt="$t('home.uruguay')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.uruguay') }}</h4>
              <p>{{ $t('directorio.uruguayDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOBRE ASCAD/LATAM -->
    <section class="section ascad-section">
      <div class="container">
        <div class="ascad-inner">
          <div class="ascad-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            ASCAD/LATAM
          </div>
          <h2>Asociación Latinoamericana para la<br><em class="gold">Certificación y Acreditación de Consejeros en Adicciones</em></h2>
          <p>La Certificación Internacional ASCAD/LATAM representa una oportunidad estratégica para que los países miembros fortalezcan sus sistemas nacionales de atención mediante la profesionalización del talento humano, la certificación basada en competencias y la implementación de estándares internacionales reconocidos.</p>
          <div class="ascad-features">
            <div class="ascad-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
              <div>
                <strong>{{ $t('directorio.coberturaRegional') }}</strong>
                <p>{{ $t('directorio.ochoPaises') }}</p>
              </div>
            </div>
            <div class="ascad-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
              <div>
                <strong>{{ $t('directorio.estandaresCalidad') }}</strong>
                <p>{{ $t('directorio.lineamientosProtocolos') }}</p>
              </div>
            </div>
            <div class="ascad-feature">
              <span class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <div>
                <strong>{{ $t('directorio.trabajoColaborativo') }}</strong>
                <p>{{ $t('directorio.redOrganizaciones') }}</p>
              </div>
            </div>
          </div>
          <router-link to="/etica" class="btn btn-gold">{{ $t('directorio.conocerMasEtica') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.countries-section { background: var(--white); }
.countries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.country-info h4 { font-size: 1.125rem; color: var(--text); margin-bottom: 8px; }
.country-info p { font-size: .875rem; color: var(--text-muted); line-height: 1.6; }

.ascad-section { background: var(--bg-light); }
.ascad-inner { max-width: 800px; margin: 0 auto; text-align: center; }
.ascad-badge {
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
.ascad-inner h2 { margin-bottom: 20px; }
.ascad-inner > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 40px; font-size: 1rem; }
.ascad-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: left;
  margin-bottom: 40px;
}
.ascad-feature { display: flex; gap: 14px; align-items: flex-start; }
.feature-icon { font-size: 1.5rem; flex-shrink: 0; }
.ascad-feature strong { display: block; color: var(--text); font-size: .9375rem; margin-bottom: 4px; }
.ascad-feature p { font-size: .8125rem; color: var(--text-muted); line-height: 1.6; }

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

.directory-cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.directory-cta .cta-content { flex: 1; min-width: 280px; }
.directory-cta h3 { color: var(--white); font-size: 1.5rem; margin-bottom: 12px; }
.directory-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; line-height: 1.7; }
.directory-cta .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.directory-cta .btn-outline {
  background: transparent;
  color: var(--white);
  border: 2px solid rgba(255,255,255,0.3);
}
.directory-cta .btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.5);
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

@media (max-width: 900px) {
  .countries-grid { grid-template-columns: repeat(2, 1fr); }
  .ascad-features { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .countries-grid { grid-template-columns: 1fr; }
  .country-card { flex-direction: column; }
}
</style>