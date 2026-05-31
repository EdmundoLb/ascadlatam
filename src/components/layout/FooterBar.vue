<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <router-link to="/" class="brand">
              <div class="brand-logo">
                <img :src="logoAscad" alt="ASCAD LATAM" width="40" height="40" />
              </div>
              <div class="brand-text">
                <span class="brand-label">Certificación Internacional</span>
                <strong>ASCAD LATAM</strong>
              </div>
            </router-link>
            <p class="brand-desc">Consorcio Latinoamericano de Certificación en Adicciones. Estándares de calidad, ética y competencia desde 2004. Certificación culturalmente adaptable a Latinoamérica.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn" class="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h5>Certificaciones</h5>
            <ul>
              <li><router-link to="/certificaciones">OST - Operador Socioterapéutico</router-link></li>
              <li><router-link to="/certificaciones">ER - Entrenador de Recuperación</router-link></li>
              <li><router-link to="/certificaciones">CCAAD I - Consejero Asociado Junior</router-link></li>
              <li><router-link to="/certificaciones">CCAAD II - Consejero Certificado</router-link></li>
              <li><router-link to="/certificaciones">CCAAD III - Consejero Senior</router-link></li>
              <li><router-link to="/certificaciones">CCAAD IV - Supervisor Profesional</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Explorar</h5>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/certificaciones">Certificaciones</router-link></li>
              <li><router-link to="/flact">FLACT</router-link></li>
              <li><router-link to="/formacion">Formación</router-link></li>
              <li><router-link to="/blog">Noticias</router-link></li>
              <li><router-link to="/directorio">Directorio</router-link></li>
              <li><router-link to="/contacto">Contacto</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:info@ascadlatam.org">info@ascadlatam.org</a></li>
              <li><router-link to="/contacto">Formulario de contacto</router-link></li>
              <li><router-link to="/solicitud">Iniciar solicitud</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ year }} ASCAD LATAM · Certificación y Acreditación en Adicciones · América Latina</p>
        <div class="footer-legal">
          <button class="lang-btn active">ES</button>
          <button class="lang-btn">PT</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoAscad from '/images/optimized/LOGO_ASCAD10.webp'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--text);
  color: var(--white);
}
.footer-main { padding: 80px 0 48px; }
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 56px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  text-decoration: none;
}
.brand-logo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--accent);
}
.brand-logo img { width: 100%; height: 100%; object-fit: cover; }
.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.brand-label {
  font-family: var(--font-mono);
  font-size: .5rem;
  font-weight: 500;
  letter-spacing: .2em;
  color: var(--accent);
  text-transform: uppercase;
}
.brand-text strong {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
}
.brand-desc {
  font-size: .875rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  max-width: 300px;
  margin-bottom: 24px;
}
.social-links { display: flex; gap: 10px; }
.social-btn {
  width: 40px; height: 40px;
  border-radius: var(--radius);
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  transition: all .2s;
}
.social-btn:hover {
  background: var(--accent);
  color: var(--white);
}

.footer-col h5 {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  letter-spacing: .2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.footer-col ul { display: flex; flex-direction: column; gap: 12px; }
.footer-col a {
  font-size: .875rem;
  color: rgba(255,255,255,0.65);
  transition: color .2s;
  text-decoration: none;
}
.footer-col a:hover { color: var(--white); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 24px 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-bottom p {
  font-size: .8125rem;
  color: rgba(255,255,255,0.45);
}
.footer-legal { display: flex; gap: 8px; }
.lang-btn {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 500;
  letter-spacing: .1em;
  padding: 6px 12px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius);
  color: rgba(255,255,255,0.5);
  background: transparent;
  cursor: pointer;
  transition: all .2s;
}
.lang-btn.active,
.lang-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(201,168,76,0.1);
}

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-main { padding: 56px 0 40px; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>