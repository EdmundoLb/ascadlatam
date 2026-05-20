<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Aliados Estratégicos</div>
        <h1>Universidad Gestalt<br>y <em class="gold">Aforind</em></h1>
        <p class="lead" style="margin-top:18px;">
          Organizaciones que respaldan y colaboran con ASCAD LATAM en la formación y certificación de profesionales en adicciones en América Latina.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-block">
          <h2>Consorcio Latinoamericano de Certificación</h2>
          <p>ASCAD LATAM opera en colaboración con instituciones académicas y organizaciones de investigación reconocidas en el campo de las adicciones. Estas alianzas fortalecen nuestros programas de certificación y garantizan formación de calidad.</p>
        </div>

        <div class="aliados-list">
          <article class="aliado-card">
            <div class="aliado-header">
              <div class="aliado-logo">
                <div class="logo-placeholder">
                  <img :src="logoAscad" alt="ASCAD LATAM" width="56" height="56" style="object-fit:contain" />
                </div>
              </div>
              <div>
                <span class="aliado-tag">Consorcio Latinoamericano</span>
                <h3>ASCAD LATAM</h3>
              </div>
            </div>
            <div class="aliado-body">
              <p><strong>ASCAD LATAM</strong> es el Consorcio Latinoamericano de Certificación en Adicciones, responsable de establecer y mantener los estándares de certificación profesional en toda América Latina. Opera en alianza con instituciones académicas y organizaciones de investigación reconocidas.</p>
              <div class="aliado-features">
                <div class="feature">
                  <span class="feature-icon">📋</span>
                  <div>
                    <strong>Estándares Internacionales</strong>
                    <p>Certificaciones alineadas con el modelo TAP 21 y estándares internacionales de competencia.</p>
                  </div>
                </div>
                <div class="feature">
                  <span class="feature-icon">🌎</span>
                  <div>
                    <strong>Cobertura Regional</strong>
                    <p>Presencia en América Latina con certificaciones disponibles en español y portugués.</p>
                  </div>
                </div>
                <div class="feature">
                  <span class="feature-icon">🤝</span>
                  <div>
                    <strong>Red Profesional</strong>
                    <p>Directorio público de profesionales certificados con código de verificación único.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="aliado-footer">
              <router-link to="/solicitud" class="btn btn-gold">Certificarme</router-link>
              <router-link to="/certificaciones" class="btn btn-ghost">Ver certificaciones</router-link>
            </div>
          </article>

          <article class="aliado-card">
            <div class="aliado-header">
              <div class="aliado-logo">
                <div class="logo-placeholder">
                  <img :src="logoAforind" alt="Aforind" width="56" height="56" style="object-fit:contain" />
                </div>
              </div>
              <div>
                <span class="aliado-tag">Organización de Investigación</span>
                <h3>Aforind</h3>
              </div>
            </div>
            <div class="aliado-body">
              <p><strong>Aforind</strong> (Asociación de Formación e Investigación en Drogodependencias) es una organización dedicada a la formación continua y la investigación científica en el área de las drogodependencias y adicciones. Su colaboración con ASCAD LATAM aporta rigor científico y evidencia actualizada a los programas de certificación.</p>
              <div class="aliado-features">
                <div class="feature">
                  <span class="feature-icon">📚</span>
                  <div>
                    <strong>Formación Continua</strong>
                    <p>Cursos y talleres de actualización para profesionales en drogodependencias.</p>
                  </div>
                </div>
                <div class="feature">
                  <span class="feature-icon">🔍</span>
                  <div>
                    <strong>Investigación Científica</strong>
                    <p>Estudios y publicaciones sobre prevalencia, tratamientos y mejores prácticas en adicciones.</p>
                  </div>
                </div>
                <div class="feature">
                  <span class="feature-icon">🌐</span>
                  <div>
                    <strong>Red Internacional</strong>
                    <p>Conexión con instituciones y expertos a nivel internacional en el campo de las adicciones.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="aliado-footer">
              <router-link to="/solicitud" class="btn btn-gold">Certificarme</router-link>
              <router-link to="/flact" class="btn btn-ghost">Ver alianza FLACT</router-link>
            </div>
          </article>
        </div>

        <div class="consorcio-callout">
          <div class="callout-content">
            <span class="callout-badge">Consorcio Latinoamericano de Certificación</span>
            <h2>Un esfuerzo conjunto por la calidad profesional</h2>
            <p>ASCAD LATAM, FLACT, Universidad Gestalt y Aforind trabajan articulados para establecer estándares de calidad, promover la ética profesional y garantizar la formación basada en evidencia para todos los profesionales que trabajan en el campo de las adicciones en América Latina.</p>
            <div class="consorcio-logos">
              <div class="consorcio-logo-item">
                <span>ASCAD LATAM</span>
                <small>Certificación Internacional</small>
              </div>
              <div class="consorcio-logo-item">
                <span>FLACT</span>
                <small>Federación Latinoamericana de Comunidades Terapéuticas</small>
              </div>
              <div class="consorcio-logo-item">
                <span>Universidad Gestalt</span>
                <small>Formación Académica</small>
              </div>
              <div class="consorcio-logo-item">
                <span>Aforind</span>
                <small>Asociación de Formación e Investigación</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import logoAscad from '/images/ASCAD.png'
import logoAforind from '/images/AFORING.jpg'
</script>

<style scoped>
.intro-block {
  max-width: 800px;
  margin-bottom: 64px;
}
.intro-block h2 { margin-bottom: 20px; }
.intro-block p { color: var(--text-secondary); line-height: 1.8; font-size: 1.0625rem; }

.aliados-list { display: flex; flex-direction: column; gap: 32px; margin-bottom: 64px; }

.aliado-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all .3s ease;
}
.aliado-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }
.aliado-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 36px 40px;
  background: var(--bg-light);
  border-bottom: 1px solid var(--line-light);
}
.aliado-logo {
  flex-shrink: 0;
}
.logo-placeholder {
  width: 72px; height: 72px;
  border-radius: var(--radius-lg);
  background: var(--white);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
}
.aliado-tag {
  font-family: var(--font-mono);
  font-size: .625rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent-dark);
  display: block;
  margin-bottom: 6px;
}
.aliado-card h3 { font-size: 1.5rem; color: var(--text); }

.aliado-body { padding: 40px; }
.aliado-body > p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 32px; font-size: 1rem; }

.aliado-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.feature {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.feature-icon { font-size: 1.5rem; flex-shrink: 0; }
.feature strong { display: block; color: var(--text); font-size: .9375rem; margin-bottom: 4px; }
.feature p { font-size: .8125rem; color: var(--text-muted); line-height: 1.6; }

.aliado-footer {
  display: flex;
  gap: 12px;
  padding: 24px 40px;
  border-top: 1px solid var(--line-light);
  background: var(--surface-alt);
}

.consorcio-callout {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 50%, var(--primary-dark) 100%);
  border-radius: var(--radius-xl);
  padding: 64px;
  position: relative;
  overflow: hidden;
}
.consorcio-callout::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 60%);
  pointer-events: none;
}
.callout-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; text-align: center; }
.callout-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .625rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(201,168,76,0.15);
  padding: 8px 18px;
  border-radius: 999px;
  margin-bottom: 24px;
}
.consorcio-callout h2 { color: var(--white); margin-bottom: 20px; font-size: 1.875rem; }
.consorcio-callout p { color: rgba(255,255,255,0.8); line-height: 1.8; margin-bottom: 40px; }
.consorcio-logos {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}
.consorcio-logo-item {
  text-align: center;
}
.consorcio-logo-item span {
  display: block;
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 4px;
}
.consorcio-logo-item small {
  font-size: .6875rem;
  color: rgba(255,255,255,0.5);
}

@media (max-width: 1024px) {
  .aliado-features { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .aliado-header { flex-direction: column; text-align: center; }
  .aliado-body { padding: 28px 24px; }
  .aliado-footer { padding: 20px 24px; flex-direction: column; }
  .consorcio-callout { padding: 40px 28px; }
  .consorcio-logos { gap: 24px; }
}
</style>