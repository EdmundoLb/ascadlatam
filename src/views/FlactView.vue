<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">FLACT</div>
        <h1>Federación Latinoamericana de<br><em class="gold">Comunidades Terapéuticas</em></h1>
        <p class="lead" style="margin-top:18px;">
          Una organización internacional fundada el 9 de noviembre de 1999, dedicada a fortalecer y representar a las comunidades terapéuticas de América Latina.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <!-- QUIÉNES SOMOS -->
        <div class="flact-intro">
          <div class="flact-logo-wrap">
            <img :src="logoFlact" alt="FLACT" width="80" height="80" style="object-fit:contain" />
          </div>
          <h2>¿Quiénes Somos?</h2>
          <p>La <strong>Federación Latinoamericana de Comunidades Terapéuticas (FLACT)</strong> es una organización internacional dedicada a fortalecer y representar a las comunidades terapéuticas de América Latina en la prevención, tratamiento, rehabilitación e inclusión social de personas con problemas de adicciones.</p>
          <p>Actualmente integra organizaciones de <strong>más de 14 países</strong> de la región, promoviendo modelos integrales de atención basados en la dignidad de la persona, el respeto por los derechos humanos y la construcción de comunidades saludables.</p>
        </div>

        <!-- MISIÓN Y VISIÓN -->
        <div class="mission-vision-grid">
          <div class="mv-card mission">
            <div class="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h3>Misión</h3>
            <p>Fortalecer y articular el trabajo de las comunidades terapéuticas mediante programas de calidad institucional, capacitación, certificación y cooperación internacional, promoviendo modelos integrales de atención para las personas afectadas por las adicciones.</p>
          </div>
          <div class="mv-card vision">
            <div class="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3>Visión</h3>
            <p>Ser la organización líder en América Latina en el fortalecimiento de las comunidades terapéuticas, impulsando la excelencia, la innovación y los más altos estándares de calidad en la atención de las adicciones.</p>
          </div>
        </div>

        <!-- FILOSOFÍA -->
        <div class="philosophy-section">
          <h2>Filosofía</h2>
          <div class="philosophy-content">
            <p>La FLACT se basa en el principio de que <strong>"la comunidad sana a la comunidad"</strong>, promoviendo la participación activa de la persona en recuperación a través del apoyo mutuo, la corresponsabilidad y la convivencia en un entorno seguro y libre de violencia.</p>
            <p>Asimismo, fomenta la dignidad, la inclusión y el respeto a los derechos humanos, impulsando modelos de atención que respondan a las realidades sociales y culturales de la región.</p>
            <p class="philosophy-highlight">Creemos que toda persona tiene la capacidad de transformarse cuando encuentra una comunidad solidaria, estructurada y respetuosa.</p>
          </div>
        </div>

        <!-- IMPACTO REGIONAL -->
        <div class="impact-section">
          <h2>Impacto Regional</h2>
          <div class="impact-grid">
            <div class="impact-card">
              <div class="impact-number">700+</div>
              <div class="impact-label">Comunidades terapéuticas afiliadas</div>
            </div>
            <div class="impact-card">
              <div class="impact-number">14+</div>
              <div class="impact-label">Países en América Latina</div>
            </div>
            <div class="impact-card">
              <div class="impact-number">8,000</div>
              <div class="impact-label">Profesionales y colaboradores</div>
            </div>
            <div class="impact-card">
              <div class="impact-number">Miles</div>
              <div class="impact-label">Personas beneficiadas cada año</div>
            </div>
          </div>
        </div>

        <!-- LÍNEAS ESTRATÉGICAS -->
        <div class="strategic-section">
          <h2>Líneas Estratégicas</h2>
          <div class="strategic-grid">
            <div class="strategic-card">
              <div class="strategic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h4>Calidad Institucional</h4>
              <p>Promovemos procesos de evaluación y acreditación para garantizar servicios de excelencia.</p>
            </div>
            <div class="strategic-card">
              <div class="strategic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h4>Capacitación Permanente</h4>
              <p>Desarrollamos programas de formación continua para profesionales y equipos técnicos.</p>
            </div>
            <div class="strategic-card">
              <div class="strategic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <h4>Certificación Profesional</h4>
              <p>Impulsamos la certificación de consejeros y especialistas en adicciones para fortalecer la calidad de la atención.</p>
            </div>
            <div class="strategic-card">
              <div class="strategic-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Investigación y Cooperación</h4>
              <p>Fomentamos la generación de conocimiento y el intercambio de experiencias entre países de la región.</p>
            </div>
          </div>
        </div>

        <!-- PRESIDENTES -->
        <div class="presidents-section">
          <h2>Presidentes de la FLACT</h2>
          <div class="presidents-table">
            <div class="table-header">
              <span>Período</span>
              <span>Presidente</span>
            </div>
            <div class="table-row">
              <span>1998 – 2014</span>
              <span>Gabriel Mejía</span>
            </div>
            <div class="table-row">
              <span>2014 – 2018</span>
              <span>Juan Palacios</span>
            </div>
            <div class="table-row">
              <span>2018 – 2022</span>
              <span>Fabián Chiosso</span>
            </div>
            <div class="table-row">
              <span>2022 – 2026</span>
              <span>Jorge Olivares</span>
            </div>
            <div class="table-row current">
              <span>2026 – 2028</span>
              <span>Iván Alvarado</span>
            </div>
          </div>
        </div>

        <!-- MENSAJE INSTITUCIONAL CON PRESIDENTE -->
        <div class="message-section">
          <div class="message-content">
            <h2>Mensaje Institucional</h2>
            <blockquote class="institutional-message">
              "Trabajamos por una América Latina más saludable e inclusiva, fortaleciendo las comunidades terapéuticas y promoviendo procesos de recuperación integral para las personas y sus familias."
            </blockquote>
          </div>
          <div class="president-card">
            <div class="president-info">
              <img :src="presidenteImg" alt="Iván Alvarado - Presidente FLACT" class="president-photo" />
              <div class="president-details">
                <span class="president-name">Iván Alvarado</span>
                <span class="president-role">Presidente FLACT 2026-2028</span>
              </div>
            </div>
            <img :src="firmaImg" alt="Firma Iván Alvarado" class="president-signature" />
          </div>
        </div>

        <!-- ALIANZA FLACT-ASCAD -->
        <div class="alliance-section">
          <h2>Alianza FLACT – ASCAD LATAM</h2>
          <p>Los miembros de FLACT tienen acceso prioritario al proceso de certificación ASCAD LATAM, con beneficios exclusivos en los costos de certificación y programas de formación continua.</p>
          <div class="alliance-benefits">
            <div class="alliance-item">
              <span class="alliance-check">✓</span>
              <span>Descuento del 20% en cuotas de certificación ASCAD LATAM</span>
            </div>
            <div class="alliance-item">
              <span class="alliance-check">✓</span>
              <span>Acceso a programas de formación continua exclusivos</span>
            </div>
            <div class="alliance-item">
              <span class="alliance-check">✓</span>
              <span>Verificación automática de experiencia en comunidades FLACT</span>
            </div>
            <div class="alliance-item">
              <span class="alliance-check">✓</span>
              <span>Participación en eventos y conferencias regionales</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="flact-cta">
          <h3>¿Sos miembro de una comunidad FLACT?</h3>
          <p>Indicá los datos de tu organización en el formulario de solicitud para acceder a los beneficios de la alianza FLACT-ASCAD LATAM.</p>
          <div class="cta-buttons">
            <router-link to="/solicitud" class="btn btn-gold btn-lg">Iniciar solicitud con beneficio FLACT</router-link>
            <router-link to="/directorio" class="btn btn-outline btn-lg">Ver países afiliados</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import logoFlact from '/images/FLACT.png'
import presidenteImg from '/images/presidente.png'
import firmaImg from '/images/firma.png'
</script>

<style scoped>
.flact-intro {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.flact-logo-wrap {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  border-radius: var(--radius-lg);
  background: var(--white);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
}
.flact-intro h2 { margin-bottom: 20px; }
.flact-intro p { color: var(--text-secondary); line-height: 1.8; font-size: 1.0625rem; margin-bottom: 16px; }
.flact-intro p:last-child { margin-bottom: 0; }

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}
.mv-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 40px;
}
.mv-card.mission { border-top: 4px solid var(--primary); }
.mv-card.vision { border-top: 4px solid var(--accent); }
.mv-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
  color: var(--primary);
}
.mv-card.vision .mv-icon { color: var(--accent-dark); }
.mv-icon svg { width: 24px; height: 24px; }
.mv-card h3 { margin-bottom: 16px; font-size: 1.25rem; }
.mv-card p { color: var(--text-secondary); line-height: 1.7; font-size: .9375rem; }

.philosophy-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  border-radius: var(--radius-xl);
  padding: 56px;
  margin-bottom: 48px;
}
.philosophy-section h2 { color: var(--white); margin-bottom: 24px; font-size: 1.5rem; }
.philosophy-content p { color: rgba(255,255,255,0.85); line-height: 1.8; font-size: 1rem; margin-bottom: 16px; }
.philosophy-content p:last-child { margin-bottom: 0; }
.philosophy-content strong { color: var(--accent); }
.philosophy-highlight {
  background: rgba(201,168,76,0.15);
  border-left: 4px solid var(--accent);
  padding: 20px 24px;
  border-radius: var(--radius);
  margin-top: 24px;
  font-style: italic;
  color: var(--white) !important;
}

.impact-section { margin-bottom: 48px; }
.impact-section h2 { margin-bottom: 32px; font-size: 1.5rem; }
.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.impact-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  text-align: center;
}
.impact-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-dark);
  line-height: 1;
  margin-bottom: 12px;
}
.impact-label {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.strategic-section { margin-bottom: 48px; }
.strategic-section h2 { margin-bottom: 32px; font-size: 1.5rem; }
.strategic-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.strategic-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  transition: all .3s ease;
}
.strategic-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.strategic-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-lg);
  margin-bottom: 16px;
  color: var(--accent-dark);
}
.strategic-icon svg { width: 24px; height: 24px; }
.strategic-card h4 { margin-bottom: 10px; font-size: 1rem; color: var(--text); }
.strategic-card p { font-size: .8125rem; color: var(--text-muted); line-height: 1.6; }

.presidents-section { margin-bottom: 48px; }
.presidents-section h2 { margin-bottom: 32px; font-size: 1.5rem; }
.presidents-table {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: var(--primary);
  color: var(--white);
  padding: 16px 32px;
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
}
.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 20px 32px;
  border-bottom: 1px solid var(--line-light);
  font-size: .9375rem;
}
.table-row:last-child { border-bottom: none; }
.table-row span:first-child { color: var(--text-muted); font-family: var(--font-mono); }
.table-row span:last-child { color: var(--text); font-weight: 500; }
.table-row.current { background: var(--accent-light); }
.table-row.current span:last-child { color: var(--accent-dark); font-weight: 700; }

.message-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.message-content h2 { margin-bottom: 20px; font-size: 1.25rem; }
.institutional-message {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-left: 24px;
  border-left: 4px solid var(--accent);
}
.president-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.president-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}
.president-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}
.president-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.president-name {
  font-weight: 700;
  color: var(--text);
  font-size: 1rem;
}
.president-role {
  font-size: .75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: .05em;
}
.president-signature {
  max-width: 160px;
  height: auto;
  opacity: 0.8;
}

.alliance-section {
  background: var(--primary);
  border-radius: var(--radius-xl);
  padding: 48px;
  margin-bottom: 48px;
}
.alliance-section h2 { color: var(--white); margin-bottom: 16px; font-size: 1.5rem; }
.alliance-section > p { color: rgba(255,255,255,0.85); line-height: 1.7; margin-bottom: 32px; }
.alliance-benefits { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.alliance-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(255,255,255,0.06);
  border-radius: var(--radius);
}
.alliance-check { color: var(--accent); font-weight: 700; }
.alliance-item span:last-child { color: rgba(255,255,255,0.85); font-size: .9375rem; }

.flact-cta {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 56px;
  text-align: center;
}
.flact-cta h3 { font-size: 1.5rem; margin-bottom: 16px; }
.flact-cta p { color: var(--text-secondary); max-width: 560px; margin: 0 auto 32px; line-height: 1.7; }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 1024px) {
  .impact-grid { grid-template-columns: repeat(2, 1fr); }
  .strategic-grid { grid-template-columns: repeat(2, 1fr); }
  .message-section { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .mission-vision-grid { grid-template-columns: 1fr; }
  .impact-grid { grid-template-columns: repeat(2, 1fr); }
  .strategic-grid { grid-template-columns: 1fr; }
  .alliance-benefits { grid-template-columns: 1fr; }
  .table-header, .table-row { padding: 12px 20px; }
  .flact-intro, .philosophy-section, .message-section, .alliance-section, .flact-cta { padding: 32px 24px; }
}
@media (max-width: 480px) {
  .impact-grid { grid-template-columns: 1fr 1fr; }
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>