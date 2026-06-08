<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Nuestra Historia</div>
        <h1>ASCAD-LATAM</h1>
        <p class="lead" style="margin-top:18px;">
          Liderando la certificación de competencias profesionales para la recuperación y el bienestar en América Latina.
        </p>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container">
        <div class="intro-content">
          <p class="intro-text">
            ASCAD LATAM es una organización líder en América Latina dedicada al desarrollo, evaluación y certificación de competencias profesionales en los campos de las adicciones, la recuperación, el apoyo entre pares y los servicios de bienestar. Su labor se fundamenta en principios de ética, transparencia, excelencia profesional y estándares internacionales adaptados a la realidad latinoamericana.
          </p>
        </div>
      </div>
    </section>

    <section class="section timeline-section">
      <div class="container">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">2001</div>
            <div class="timeline-content">
              <h3>Inicio del Proyecto</h3>
              <p>
                Nuestra historia comenzó en Costa Rica en 2001 con la creación de ASCAD, una iniciativa pionera orientada a profesionalizar la atención de las adicciones mediante procesos de formación y certificación basados en competencias.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2004</div>
            <div class="timeline-content">
              <h3>Hito Histórico Regional</h3>
              <p>
                En 2004 se alcanzó un hito histórico para la región cuando Costa Rica se convirtió en el primer país de América Latina en obtener la aprobación de un Manual Nacional de Certificación avalado por el International Certification & Reciprocity Consortium (IC&RC), posicionándose como referente regional en la evaluación y certificación de profesionales de la recuperación.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2018</div>
            <div class="timeline-content">
              <h3>Nacimiento de ASCAD LATAM</h3>
              <p>
                Impulsada por este liderazgo y por una sólida red de alianzas internacionales, en 2018 nació ASCAD LATAM con el propósito de extender este modelo de calidad a toda América Latina, promoviendo sistemas de certificación culturalmente pertinentes y alineados con las mejores prácticas internacionales.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">Actual</div>
            <div class="timeline-content">
              <h3>Presente y Futuro</h3>
              <p>
                Actualmente, ASCAD LATAM desarrolla estándares de competencia y procesos de certificación para consejeros en adicciones, operadores en recuperación, entrenadores de recuperación (Recovery Coaches), supervisores internacionales y otros profesionales dedicados al acompañamiento de procesos de recuperación y bienestar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section closing-section">
      <div class="container">
        <div class="closing-content">
          <p class="closing-text">
            Hoy, ASCAD LATAM es un referente regional para quienes buscan validar sus competencias con integridad, credibilidad y rigor técnico, contribuyendo al fortalecimiento de una fuerza laboral más preparada, ética y comprometida con la recuperación y el bienestar de las comunidades latinoamericanas.
          </p>
          <div class="tagline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>ASCAD LATAM: Liderando la certificación de competencias profesionales para la recuperación y el bienestar en América Latina.</span>
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

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .timeline-year { text-align: left; font-size: 2rem; }
  .timeline-content::before { display: none; }
  .tagline { flex-direction: column; text-align: center; }
}
</style>