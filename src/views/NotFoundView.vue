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
      <div class="container" style="text-align:center; max-width:500px;">
        <div class="notfound-icon">🔍</div>
        <p style="color: var(--text-secondary); line-height:1.8; margin-bottom:32px;">
          Verificá la URL o volvé al inicio para continuar navegando.
        </p>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <router-link to="/" class="btn btn-gold btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Ir al inicio
          </router-link>
          <router-link to="/contacto" class="btn btn-outline btn-lg">
            Contactar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.notfound-icon {
  font-size: 4rem;
  margin-bottom: 24px;
}
</style>
