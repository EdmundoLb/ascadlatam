<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Noticias y recursos</div>
        <h1>Actualidad en <em class="gold">adicciones</em></h1>
        <p class="lead" style="margin-top:18px;">
          Recursos, actualizaciones y noticias del campo de las adicciones y la certificación profesional en América Latina.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-filters">
          <button
            v-for="cat in categories"
            :key="cat"
            class="cat-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >{{ cat }}</button>
        </div>

        <div class="blog-grid">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            class="blog-card card"
          >
            <div class="blog-img">{{ post.emoji }}</div>
            <div class="blog-body">
              <div class="blog-meta">
                <span class="blog-cat">{{ post.category }}</span>
                <span class="blog-date">{{ post.date }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p class="muted">{{ post.excerpt }}</p>
              <div class="blog-read">Leer más →</div>
            </div>
          </article>
        </div>

        <div v-if="filteredPosts.length === 0" class="no-posts">
          No hay publicaciones en esta categoría todavía.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Todas', 'Certificaciones', 'Formación', 'Regional', 'Recursos']
const activeCategory = ref('Todas')

const posts = [
  { id: 1, emoji: '📰', category: 'Certificaciones', date: 'Enero 2025', title: 'Nuevos estándares TAP 21 para consejeros en adicciones', excerpt: 'ASCAD LATAM adopta las actualizaciones del modelo TAP 21 para fortalecer la calidad de sus programas de certificación en toda la región.' },
  { id: 2, emoji: '🎓', category: 'Formación',       date: 'Diciembre 2024', title: 'El rol del Entrenador de Pares en los programas de recuperación', excerpt: 'Analizamos cómo la certificación EPR está transformando los modelos de tratamiento en América Latina con impacto medible en la adherencia.' },
  { id: 3, emoji: '🌎', category: 'Regional',        date: 'Noviembre 2024', title: 'Expansión de ASCAD LATAM: nuevos países miembro en 2025', excerpt: 'La red de profesionales certificados continúa creciendo. Conocé los nuevos países que se integran al sistema de certificación regional.' },
  { id: 4, emoji: '📋', category: 'Recursos',        date: 'Octubre 2024',  title: 'Guía práctica para completar tu solicitud de certificación', excerpt: 'Paso a paso para reunir la documentación, contar las horas correctamente y presentar una solicitud completa que sea aprobada sin observaciones.' },
  { id: 5, emoji: '🏥', category: 'Formación',       date: 'Septiembre 2024', title: 'Las 12 funciones del consejero: una guía esencial', excerpt: 'Profundizamos en las 12 funciones que estructuran el rol profesional del consejero en adicciones según los estándares internacionales.' },
  { id: 6, emoji: '🤝', category: 'Regional',        date: 'Agosto 2024',   title: 'Comunidades terapéuticas y certificación: avances en la región', excerpt: 'Cómo las comunidades terapéuticas de América Latina están incorporando la certificación ASCAD LATAM como estándar de calidad institucional.' },
]

const filteredPosts = computed(() =>
  activeCategory.value === 'Todas'
    ? posts
    : posts.filter(p => p.category === activeCategory.value)
)
</script>

<style scoped>
.blog-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 40px; }
.cat-btn {
  padding: 9px 18px; border-radius: var(--radius-sm);
  font-size: .84rem; font-weight: 500;
  border: 1px solid var(--line); color: var(--text-muted);
  background: var(--surface); cursor: pointer; transition: .2s;
}
.cat-btn:hover { color: var(--text); border-color: rgba(201,168,76,0.3); }
.cat-btn.active { background: var(--accent); color: var(--white); border-color: var(--accent); font-weight: 700; }

.blog-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.blog-card { overflow: hidden; cursor: pointer; }
.blog-img {
  height: 180px; background: var(--surface-alt); display: flex;
  align-items: center; justify-content: center;
  font-size: 2.8rem; border-bottom: 1px solid var(--line);
}
.blog-body { padding: 26px; }
.blog-meta { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; }
.blog-cat { font-family: var(--font-mono); font-size: .66rem; color: var(--accent); letter-spacing: .15em; text-transform: uppercase; }
.blog-date { font-size: .78rem; color: var(--text-muted); }
.blog-card h3 { color: var(--text); margin-bottom: 10px; font-size: 1.05rem; }
.blog-card p { font-size: .87rem; line-height: 1.7; }
.blog-read { margin-top: 18px; font-size: .83rem; color: var(--accent); font-weight: 600; display: flex; align-items: center; gap: 4px; }
.no-posts { text-align: center; color: var(--text-muted); padding: 60px; font-style: italic; }

@media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
</style>
