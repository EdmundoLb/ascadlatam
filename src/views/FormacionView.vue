<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Formación Continua</div>
        <h1>Educación y<br><em class="gold">Formación Continua</em></h1>
        <p class="lead" style="margin-top:18px;">
          Programas de formación continua y actualización profesional para quienes trabajan en el campo de las adicciones en América Latina.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-block">
          <h2>Próximamente</h2>
          <p>Estamos trabajando en nuevos programas de formación continua. Próximamente-publicaremos más información sobre cursos, talleres y certificaciones de actualización profesional.</p>
        </div>
        <div class="placeholder-content">
          <div class="placeholder-icon">📚</div>
          <p>Contenido en desarrollo</p>
        </div>
        <div class="contact-cta">
          <p>¿Te interesa recibir información sobre nuestros programas de formación?</p>
          <router-link to="/contacto" class="btn btn-gold">Contactanos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro-block {
  max-width: 800px;
  margin-bottom: 48px;
}
.intro-block h2 { margin-bottom: 16px; }
.intro-block p { color: var(--text-secondary); line-height: 1.8; font-size: 1.0625rem; }

.placeholder-content {
  text-align: center;
  padding: 64px 32px;
  background: var(--bg-light);
  border: 2px dashed var(--line);
  border-radius: var(--radius-xl);
  margin-bottom: 48px;
}
.placeholder-icon { font-size: 4rem; margin-bottom: 16px; }
.placeholder-content p { color: var(--text-muted); font-size: 1.125rem; }

.contact-cta {
  text-align: center;
  padding: 40px;
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
}
.contact-cta p { color: var(--text-secondary); margin-bottom: 20px; font-size: 1rem; }
</style>