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
            <span class="stat-number">10</span>
            <span class="stat-label">{{ $t('directorio.paisesAfiliados') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">{{ $t('directorio.compromisoExcelencia') }}</span>
          </div>
        </div>

        <div class="directory-cta">
          <div class="cta-content">
            <h3>{{ $t('directorio.ctaPregunta') }}</h3>
            <p>{{ $t('directorio.ctaTexto') }}</p>
          </div>
          <div class="cta-actions">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">{{ $t('directorio.ctaIniciar') }}</router-link>
            <router-link to="/certificaciones" class="btn btn-outline btn-lg">{{ $t('directorio.ctaVerCertificaciones') }}</router-link>
          </div>
        </div>

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
          <div class="country-card">
            <img src="https://flagcdn.com/w40/bo.png" :alt="$t('home.bolivia')" class="country-flag" loading="lazy" />
            <div class="country-info">
              <h4>{{ $t('home.bolivia') }}</h4>
              <p>{{ $t('directorio.boliviaDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LIDERAZGO Y DELEGADOS -->
    <section class="section equipo-section">
      <div class="container">

        <div class="section-header center-header">
          <div class="eyebrow">ASCAD/LATAM</div>
          <h2>{{ $t('directorio.liderazgoRegional') }}</h2>
        </div>

        <!-- Coordinador General — card destacada -->
        <div class="coordinador-card">
          <div class="coordinador-foto-wrap">
            <img :src="imgCoordinador" alt="Gonzalo Esquivel" class="coordinador-foto" />
          </div>
          <div class="coordinador-info">
            <div class="coordinador-tag">{{ $t('directorio.coordinadorGeneral') }}</div>
            <h3 class="coordinador-nombre">Gonzalo Esquivel <span class="dr-hc-dark">Dr.h.c.</span></h3>
            <p class="coordinador-cred">EPR · CCAAD I · II · III · IV</p>
            <p class="coordinador-org">ASCAD/LATAM</p>
          </div>
        </div>

        <!-- Delegados Regionales -->
        <div class="delegados-header">
          <div class="eyebrow">ASCAD/LATAM</div>
          <h2>{{ $t('directorio.delegadosRegionales') }}</h2>
          <p class="section-lead">{{ $t('directorio.delegadosDesc') }}</p>
        </div>

        <div class="delegados-grid">

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgChile" alt="Iván Alvarado" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Arq. Iván Alvarado <span class="dr-hc">Dr.h.c.</span></h4>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/cl.png" alt="Chile" class="d-bandera" />
              <span>{{ $t('home.chile') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgRepDom" alt="Carlos Domínguez" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Dr. Carlos Domínguez</h4>
            <p class="d-cred">Psiquiatra</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/do.png" alt="Rep. Dominicana" class="d-bandera" />
              <span>{{ $t('home.repDominicana') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgEcuador" alt="Martín Estrella" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Dr. Martín Estrella <span class="dr-hc">Dr.h.c.</span></h4>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/ec.png" alt="Ecuador" class="d-bandera" />
              <span>{{ $t('home.ecuador') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgMexico" alt="Alfonso Márquez" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Dr. Alfonso Márquez</h4>
            <p class="d-cred">Especialista en Adicciones</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/mx.png" alt="México" class="d-bandera" />
              <span>{{ $t('home.mexico') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgNicaragua" alt="Alfredo Martinez Cardenal" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Alfredo Martinez Cardenal</h4>
            <p class="d-cred">RRII · Post.</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/ni.png" alt="Nicaragua" class="d-bandera" />
              <span>{{ $t('home.nicaragua') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgParaguay" alt="Adriano Shuster" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Adriano Shuster <span class="dr-hc">Dr.h.c.</span></h4>
            <p class="d-cred">OST · CCAAD II</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/py.png" alt="Paraguay" class="d-bandera" />
              <span>{{ $t('home.paraguay') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <div class="delegado-card">
            <div class="avatar-wrap">
              <img :src="imgUruguay" alt="Francisco Tabarez" class="avatar-img" />
            </div>
            <h4 class="d-nombre">Francisco Tabarez</h4>
            <p class="d-cred">Tec.Esp. en Adicciones</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/uy.png" alt="Uruguay" class="d-bandera" />
              <span>{{ $t('home.uruguay') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadoRegional') }}</span>
          </div>

          <!-- Costa Rica: foto pendiente -->
          <div class="delegado-card">
            <div class="avatar-wrap avatar-pending">
              <span class="avatar-initials">JB</span>
            </div>
            <h4 class="d-nombre">Dra. Jessica Bolaños <span class="dr-hc">Dr.h.c.</span></h4>
            <p class="d-cred">EPR · CCAAD III · VI</p>
            <div class="d-pais-badge">
              <img src="https://flagcdn.com/w20/cr.png" alt="Costa Rica" class="d-bandera" />
              <span>{{ $t('home.costaRica') }}</span>
            </div>
            <span class="d-cargo">{{ $t('directorio.delegadaRegional') }}</span>
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
          <h2>{{ $t('directorio.asociacionTituloPre') }}<br><em class="gold">{{ $t('directorio.asociacionTituloEm') }}</em></h2>
          <p>{{ $t('etica.redLatinoamericanaDesc3') }}</p>
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

<script setup>
import imgCoordinador from '/images/Delegados/coordinador-general.jpg'
import imgChile from '/images/Delegados/chile.jpg'
import imgEcuador from '/images/Delegados/ecuador.jpg'
import imgMexico from '/images/Delegados/mexico.jpg'
import imgNicaragua from '/images/Delegados/nicaragua.jpg'
import imgParaguay from '/images/Delegados/paraguay.jpg'
import imgRepDom from '/images/Delegados/republica-dominicana.jpg'
import imgUruguay from '/images/Delegados/uruguay.jpg'
</script>

<style scoped>

/* ── PAÍSES ── */
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
.country-info p  { font-size: .875rem; color: var(--text-muted); line-height: 1.6; }

/* ── SECCIÓN EQUIPO ── */
.equipo-section { background: var(--bg-light); }
.center-header  { text-align: center; margin-bottom: 48px; }

/* ── COORDINADOR GENERAL ── */
.coordinador-card {
  max-width: 600px;
  margin: 0 auto 80px;
  background: var(--primary);
  border-radius: var(--radius-xl);
  padding: 40px 52px;
  display: flex;
  align-items: center;
  gap: 36px;
  box-shadow: 0 8px 32px rgba(10, 36, 68, 0.25);
}
.coordinador-foto-wrap {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--accent);
  box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.2);
}
.coordinador-foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.coordinador-info { flex: 1; min-width: 0; }
.coordinador-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid rgba(201, 168, 76, 0.4);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.coordinador-nombre {
  font-family: var(--font-display);
  font-size: 1.375rem;
  color: var(--white);
  margin: 0 0 6px;
  line-height: 1.25;
}
.coordinador-cred {
  font-family: var(--font-mono);
  font-size: .7rem;
  letter-spacing: .06em;
  color: rgba(201, 168, 76, 0.85);
  margin: 0 0 4px;
}
.coordinador-org {
  font-size: .8125rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* Dr.h.c. inline — versión oscura (sobre fondo primario) */
.dr-hc-dark {
  font-family: var(--font-mono);
  font-size: .65em;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: .04em;
  vertical-align: middle;
}

/* ── DELEGADOS HEADER ── */
.delegados-header {
  text-align: center;
  margin-bottom: 40px;
}
.section-lead {
  font-size: .9375rem;
  color: var(--text-secondary);
  margin-top: 10px;
  line-height: 1.7;
}

/* ── GRID DELEGADOS ── */
.delegados-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.delegado-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.delegado-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}

/* Avatar circular */
.avatar-wrap {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  border: 3px solid var(--line-light);
  flex-shrink: 0;
  transition: border-color .25s ease;
}
.delegado-card:hover .avatar-wrap {
  border-color: var(--accent);
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Placeholder con iniciales */
.avatar-pending {
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
}
.avatar-initials {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: .05em;
}

/* Textos */
.d-nombre {
  font-family: var(--font-display);
  font-size: .9375rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.35;
  margin: 0;
}
.d-cred {
  font-family: var(--font-mono);
  font-size: .6rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0;
}
.d-pais-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: 999px;
  padding: 4px 10px;
  margin-top: 4px;
}
.d-bandera {
  width: 16px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
}
.d-pais-badge span {
  font-family: var(--font-mono);
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.d-cargo {
  font-size: .72rem;
  color: var(--accent-dark);
  font-weight: 600;
  letter-spacing: .02em;
}

/* Dr.h.c. inline — versión clara (sobre fondo blanco) */
.dr-hc {
  font-family: var(--font-mono);
  font-size: .65em;
  font-weight: 700;
  color: var(--accent-dark);
  letter-spacing: .04em;
  vertical-align: middle;
}

/* ── SOBRE ASCAD ── */
.ascad-section { background: var(--white); }
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

/* ── STATS / CTA ── */
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
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
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

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .countries-grid  { grid-template-columns: repeat(3, 1fr); }
  .delegados-grid  { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 900px) {
  .countries-grid  { grid-template-columns: repeat(2, 1fr); }
  .delegados-grid  { grid-template-columns: repeat(2, 1fr); }
  .ascad-features  { grid-template-columns: 1fr; }
  .coordinador-card { padding: 32px 28px; }
}
@media (max-width: 600px) {
  .countries-grid  { grid-template-columns: 1fr; }
  .country-card    { flex-direction: column; }
  .coordinador-card {
    flex-direction: column;
    text-align: center;
    max-width: 340px;
    padding: 32px 24px;
  }
  .coordinador-tag { display: block; }
}
@media (max-width: 480px) {
  .delegados-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
