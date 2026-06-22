<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <router-link to="/" class="brand">
              <div class="brand-logo">
                <img :src="logoAscad" alt="ASCAD LATAM - Logo" width="40" height="40" />
              </div>
              <div class="brand-text">
                <span class="brand-label">{{ $t('footer.brandLabel') }}</span>
                <strong>ASCAD LATAM</strong>
              </div>
            </router-link>
            <p class="brand-desc">{{ $t('footer.brandDesc') }}</p>
            <div class="social-links">
              <a href="#" :aria-label="'LinkedIn de ASCAD LATAM'" class="social-btn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h5>{{ $t('footer.certificaciones') }}</h5>
            <ul>
              <li><router-link to="/solicitud?nivel=OST">{{ $t('footer.ost') }}</router-link></li>
              <li><router-link to="/solicitud?nivel=EPR">{{ $t('footer.epr') }}</router-link></li>
              <li><router-link to="/solicitud?nivel=CCAAD%20I">{{ $t('footer.ccaad1') }}</router-link></li>
              <li><router-link to="/solicitud?nivel=CCAAD%20II">{{ $t('footer.ccaad2') }}</router-link></li>
              <li><router-link to="/solicitud?nivel=CCAAD%20III">{{ $t('footer.ccaad3') }}</router-link></li>
              <li><router-link to="/solicitud?nivel=CCAAD%20IV">{{ $t('footer.ccaad4') }}</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>{{ $t('footer.explorar') }}</h5>
            <nav aria-label="Navegación del footer">
              <ul>
                <li><router-link to="/">{{ $t('nav.inicio') }}</router-link></li>
                <li><router-link to="/certificaciones">{{ $t('nav.certificaciones') }}</router-link></li>
                <li><router-link to="/etica">{{ $t('nav.etica') }}</router-link></li>
                <li><router-link to="/formacion">{{ $t('footer.formacionAcademica') }}</router-link></li>
                <li><router-link to="/noticias">{{ $t('nav.recursos') }}</router-link></li>
                <li><router-link to="/directorio">{{ $t('footer.directorio') }}</router-link></li>
                <li><router-link to="/contacto">{{ $t('footer.contactoTitle') }}</router-link></li>
              </ul>
            </nav>
          </div>

          <div class="footer-col">
            <h5>{{ $t('footer.contactoTitle') }}</h5>
            <ul>
              <li><a :href="'mailto:' + $t('footer.email')">{{ $t('footer.email') }}</a></li>
              <li><router-link to="/contacto">{{ $t('footer.formularioContacto') }}</router-link></li>
              <li><router-link to="/solicitud">{{ $t('footer.iniciarSolicitud') }}</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ year }} ASCAD LATAM · {{ $t('footer.copyright') }}</p>
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
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--accent);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  color: var(--accent-dark);
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
  transition: all var(--duration-normal);
}
.social-btn:hover {
  background: var(--accent);
  color: var(--white);
}
.social-btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.footer-col h5 {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  letter-spacing: .2em;
  color: var(--accent-dark);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.footer-col ul { display: flex; flex-direction: column; gap: 12px; }
.footer-col a {
  font-size: .875rem;
  color: rgba(255,255,255,0.65);
  transition: color var(--duration-fast);
  text-decoration: none;
}
.footer-col a:hover { color: var(--white); }
.footer-col a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

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

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-main { padding: 56px 0 40px; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; }
}
</style>