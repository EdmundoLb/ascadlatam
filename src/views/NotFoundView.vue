<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Error 404</div>
        <h1>Página no <em class="gold">encontrada</em></h1>
        <p class="lead" style="margin-top:18px;">
          La página que estás buscando no existe o fue movida.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="notfound-content">
          <div class="notfound-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <h2 class="notfound-title">Ups, esta página no existe</h2>
          <p class="notfound-desc">
            Es posible que la dirección esté mal escrita, que la página haya sido movida o que ya no esté disponible.
          </p>

          <div class="notfound-actions">
            <router-link to="/" class="btn btn-gold btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Ir al inicio
            </router-link>
            <router-link to="/contacto" class="btn btn-outline btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contactar
            </router-link>
          </div>

          <div class="notfound-links">
            <p class="notfound-links-title">O explorá estas secciones:</p>
            <div class="quick-links">
              <router-link to="/certificaciones" class="quick-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
                Certificaciones
              </router-link>
              <router-link to="/etica" class="quick-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                Ética
              </router-link>
              <router-link to="/directorio" class="quick-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Directorio
              </router-link>
              <router-link to="/solicitud" class="quick-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                Solicitud
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.notfound-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.notfound-icon {
  color: var(--text-light);
  margin-bottom: 32px;
}

.notfound-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--text);
  margin-bottom: 16px;
}

.notfound-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}

.notfound-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.notfound-links {
  padding-top: 40px;
  border-top: 1px solid var(--line-light);
}

.notfound-links-title {
  font-size: .875rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.quick-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-light);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  font-size: .875rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all .2s ease;
}

.quick-link:hover {
  background: var(--accent-light);
  border-color: var(--accent);
  color: var(--accent-dark);
  transform: translateY(-2px);
}

.quick-link svg {
  color: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .notfound-actions {
    flex-direction: column;
  }
  .notfound-actions .btn {
    width: 100%;
    justify-content: center;
  }
  .quick-links {
    flex-direction: column;
  }
  .quick-link {
    justify-content: center;
  }
}
</style>