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

        <!-- PAÍSES AFILIADOS -->
        <div class="countries-intro">
          <div class="section-header">
            <div class="eyebrow">ASCAD/LATAM</div>
            <h2>{{ $t('etica.paisesAfiliados') }} <em class="gold">ASCAD/LATAM</em></h2>
          </div>
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

        <!-- BENEFICIOS PAÍSES -->
        <div class="benefits-section">
          <h2>{{ $t('etica.beneficiosPaises') }}</h2>
          <p>{{ $t('etica.beneficiosPaisesDesc1') }}</p>
          <p>{{ $t('etica.beneficiosPaisesDesc2') }}</p>
          <p>{{ $t('etica.beneficiosPaisesDesc3') }}</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Acceso a un modelo regional de certificación reconocido internacionalmente.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Fortalecimiento de las capacidades técnicas del recurso humano especializado.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Estandarización de competencias profesionales en el campo de las adicciones.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mejora continua de la calidad de los servicios de prevención, tratamiento y recuperación.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Integración a una red latinoamericana de intercambio de experiencias y buenas prácticas.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Acceso a programas permanentes de capacitación y actualización profesional.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Promoción de políticas y programas alineados con estándares internacionales.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Reconocimiento regional de las certificaciones obtenidas por los profesionales.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mayor credibilidad y fortalecimiento institucional de las organizaciones participantes.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Desarrollo de sistemas de atención más eficientes, humanos y centrados en las personas.</span>
            </li>
          </ul>
        </div>

        <!-- BENEFICIOS INSTITUCIONES -->
        <div class="benefits-institutions-section">
          <h2>{{ $t('etica.beneficiosInstituciones') }}</h2>
          <p>{{ $t('etica.beneficiosInstitucionesDesc') }}</p>
          <p>{{ $t('etica.principalesBeneficiosInst') }}</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Personal certificado bajo estándares internacionales.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mejora en la calidad y efectividad de los servicios prestados.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mayor confianza y credibilidad institucional.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Fortalecimiento de los procesos de supervisión clínica.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Desarrollo de una cultura organizacional orientada a la excelencia.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Reconocimiento nacional e internacional de las buenas prácticas.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Equipos de trabajo más competentes, comprometidos y actualizados.</span>
            </li>
          </ul>
        </div>

        <!-- BENEFICIOS PROFESIONALES -->
        <div class="benefits-professionals-section">
          <h2>{{ $t('etica.beneficiosProfesionales') }}</h2>
          <p>{{ $t('etica.beneficiosProfesionalesDesc') }}</p>
          <p>{{ $t('etica.laCertificacionPermite') }}</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Obtener reconocimiento profesional a nivel nacional e internacional.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Validar competencias mediante estándares objetivos y basados en evidencia.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Incrementar oportunidades laborales y de crecimiento profesional.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Acceder a procesos continuos de capacitación y actualización.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Integrarse a una red regional de profesionales certificados.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Fortalecer la práctica ética y la responsabilidad profesional.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mejorar la calidad de la atención brindada a las personas en recuperación.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Desarrollar una ruta clara de crecimiento profesional dentro del sistema ASCAD/LATAM.</span>
            </li>
          </ul>
        </div>

        <!-- BENEFICIOS PERSONAS Y FAMILIAS -->
        <div class="benefits-families-section">
          <h2>{{ $t('etica.beneficiosFamilias') }}</h2>
          <p>{{ $t('etica.beneficiosFamiliasDesc') }}</p>
          <p>{{ $t('etica.estoSeTraduce') }}</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Atención más segura, ética y efectiva.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Intervenciones basadas en evidencia científica.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mayor respeto por los derechos humanos y la dignidad de las personas.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Procesos de recuperación más estructurados y orientados a resultados.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Servicios de tratamiento con estándares verificables de calidad.</span>
            </li>
            <li>
              <span class="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>
              <span>Mayor confianza de las familias en los programas de atención y recuperación.</span>
            </li>
          </ul>
        </div>

        <!-- UNA INVERSIÓN PARA AMÉRICA LATINA -->
        <div class="investment-section">
          <h2>{{ $t('etica.inversionLatam') }}</h2>
          <p>{{ $t('etica.inversionLatamDesc') }}</p>
          <p>{{ $t('etica.ascadContinua') }}</p>
        </div>

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

.ethics-list, .benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.ethics-list li, .benefits-list li {
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
.ethics-list li span:last-child, .benefits-list li span:last-child {
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

.countries-intro {
  margin-bottom: 24px;
}
.countries-intro .section-header {
  text-align: center;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
.country-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all .3s ease;
}
.country-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.country-flag {
  width: 64px;
  height: 48px;
  object-fit: cover;
  border-radius: var(--radius);
  margin-bottom: 16px;
  border: 1px solid var(--line);
}
.country-info h4 { font-size: 1rem; color: var(--text); margin-bottom: 8px; }
.country-info p { font-size: .8125rem; color: var(--text-muted); line-height: 1.5; }

.benefits-section,
.benefits-institutions-section,
.benefits-professionals-section,
.benefits-families-section {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.benefits-section h2,
.benefits-institutions-section h2,
.benefits-professionals-section h2,
.benefits-families-section h2 { margin-bottom: 16px; font-size: 1.5rem; }
.benefits-section > p,
.benefits-institutions-section > p,
.benefits-professionals-section > p,
.benefits-families-section > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }

.investment-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-radius: var(--radius-xl);
  padding: 56px;
  margin-bottom: 48px;
}
.investment-section h2 { color: var(--white); margin-bottom: 24px; font-size: 1.5rem; }
.investment-section p { color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 16px; }
.investment-section p:last-child { margin-bottom: 0; }

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
  .countries-grid { grid-template-columns: repeat(2, 1fr); }
  .ethics-list, .benefits-list { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .ethics-intro, .cert-system-section, .monitoring-section,
  .diversity-section, .transparency-section, .network-section,
  .benefits-section, .benefits-institutions-section,
  .benefits-professionals-section, .benefits-families-section,
  .investment-section, .etica-cta { padding: 32px 24px; }
  .countries-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .countries-grid { grid-template-columns: 1fr; }
  .country-card { flex-direction: column; }
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>