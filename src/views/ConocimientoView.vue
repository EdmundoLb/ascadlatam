<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Centro de Conocimiento</div>
        <h1>Recursos de aprendizaje y<br><em class="gold">consulta</em></h1>
        <p class="lead" style="margin-top:18px;">
          Accedé de forma organizada a contenidos educativos, materiales de apoyo y herramientas de capacitación en adicciones.
        </p>
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="section featured-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Recursos destacados</div>
          <h2>Contenido <em class="gold">recomendado</em></h2>
        </div>
        <div class="featured-grid">
          <article v-for="item in featuredItems" :key="item.id" class="featured-card">
            <div class="featured-badge" :class="`badge-${item.type}`">{{ item.typeLabel }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="featured-meta">
              <span class="meta-date">{{ item.date }}</span>
              <span class="meta-tag">{{ item.tag }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Tabs Navigation -->
    <section class="section tabs-section">
      <div class="container">
        <div class="content-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>

        <!-- Biblioteca Tab -->
        <div v-if="activeTab === 'biblioteca'" class="tab-content">
          <div class="biblioteca-intro">
            <h3>Biblioteca de Contenidos</h3>
            <p>Guías, manuales, artículos especializados y casos de éxito para profundizar tu conocimiento en adicciones.</p>
          </div>
          <div class="library-grid">
            <div v-for="item in libraryItems" :key="item.id" class="library-card">
              <div class="library-icon">{{ item.icon }}</div>
              <div class="library-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <span class="library-count">{{ item.count }} recursos</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Base de Conocimiento Tab -->
        <div v-if="activeTab === 'base'" class="tab-content">
          <div class="faq-intro">
            <h3>Base de Conocimiento</h3>
            <p>Preguntas frecuentes, buenas prácticas y documentación técnica para resolver tus dudas.</p>
          </div>
          <div class="faq-grid">
            <div v-for="faq in faqItems" :key="faq.id" class="faq-card">
              <h4>{{ faq.question }}</h4>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Comunidad Tab (Próximamente) -->
        <div v-if="activeTab === 'comunidad'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon">🌐</div>
            <h3>Comunidad de Profesionales</h3>
            <p>Foros de discusión, intercambio de experiencias y espacios de colaboración entre profesionales.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Academia Tab (Próximamente) -->
        <div v-if="activeTab === 'academia'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon">🎓</div>
            <h3>Academia</h3>
            <p>Programas de formación por niveles, evaluaciones y seguimiento de tu progreso de aprendizaje.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Cursos Tab (Próximamente) -->
        <div v-if="activeTab === 'cursos'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon">📚</div>
            <h3>Cursos y Capacitación</h3>
            <p>Cursos en línea, rutas de aprendizaje, certificaciones y cápsulas de microlearning.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>

        <!-- Webinars Tab (Próximamente) -->
        <div v-if="activeTab === 'webinars'" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon">🎥</div>
            <h3>Webinars y Eventos</h3>
            <p>Próximos webinars, grabaciones de sesiones anteriores, calendario de actividades y registro.</p>
            <span class="coming-badge">Próximamente</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-knowledge">
      <div class="container">
        <div class="cta-inner">
          <h2>¿No encontraste lo que buscabas?</h2>
          <p>Contactá a nuestro equipo para resolver tus dudas o solicitar información específica.</p>
          <router-link to="/contacto" class="btn btn-gold btn-lg">Contactanos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('biblioteca')

const tabs = [
  { id: 'biblioteca', label: 'Biblioteca', icon: '📖' },
  { id: 'base', label: 'Base de Conocimiento', icon: '❓' },
  { id: 'comunidad', label: 'Comunidad', icon: '👥' },
  { id: 'academia', label: 'Academia', icon: '🎓' },
  { id: 'cursos', label: 'Cursos', icon: '📚' },
  { id: 'webinars', label: 'Webinars', icon: '🎥' },
]

const featuredItems = [
  {
    id: 1,
    type: 'article',
    typeLabel: 'Artículo',
    title: 'Comprensión del Trastorno por Uso de Sustancias',
    description: 'Fundamentos actualizados sobre la comprensión integral de las adicciones desde enfoques biopsicosociales.',
    date: 'Mayo 2026',
    tag: 'TAP 21'
  },
  {
    id: 2,
    type: 'guide',
    typeLabel: 'Guía',
    title: 'Manual de Funciones del Operador Socioterapéutico',
    description: 'Descripción detallada de las funciones, competencias y alcances del perfil OST en comunidades terapéuticas.',
    date: 'Mayo 2026',
    tag: 'OST'
  },
  {
    id: 3,
    type: 'case',
    typeLabel: 'Caso de Éxito',
    title: 'Experiencias de Implementación en América Latina',
    description: 'Casos reales de aplicación de estándares internacionales en contextos diversos de la región.',
    date: 'Abril 2026',
    tag: 'Regional'
  }
]

const libraryItems = [
  {
    id: 1,
    icon: '📋',
    title: 'Guías y Manuales',
    description: 'Documentos técnicos, protocolos y lineamentos para la práctica profesional.',
    count: 12
  },
  {
    id: 2,
    icon: '📱',
    title: 'E-books y Documentos',
    description: 'Publicaciones digitales sobre competencias, estándares y mejores prácticas.',
    count: 8
  },
  {
    id: 3,
    icon: '📊',
    title: 'Infografías',
    description: 'Representaciones visuales de procesos, niveles y competencias.',
    count: 15
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Casos de Éxito',
    description: 'Experiencias reales de implementación y resultados obtenidos.',
    count: 6
  },
  {
    id: 5,
    icon: '📝',
    title: 'Artículos Especializados',
    description: 'Publicaciones académicas y técnicas sobre adicciones y recuperación.',
    count: 24
  },
  {
    id: 6,
    icon: '🎙️',
    title: 'Entrevistas y Revistas',
    description: 'Contenido audiovisual y publicaciones periódicas del consorcio.',
    count: 10
  }
]

const faqItems = [
  {
    id: 1,
    question: '¿Qué es ASCAD LATAM?',
    answer: 'ASCAD LATAM es el Consorcio Latinoamericano de Certificación en Adicciones, una organización que establece estándares internacionales para la formación y certificación de profesionales en el campo de las adicciones en toda América Latina.'
  },
  {
    id: 2,
    question: '¿Cuáles son los niveles de certificación?',
    answer: 'Existen 6 niveles: OST (Operador Socioterapéutico), ER (Entrenador de Recuperación), CCAAD I, CCAAD II, CCAAD III y CCAAD IV (Supervisor Profesional). Cada nivel tiene requisitos específicos de formación y experiencia.'
  },
  {
    id: 3,
    question: '¿Las certificaciones son reconocidas internacionalmente?',
    answer: 'Sí, las certificaciones están basadas en estándares internacionales como TAP 21, TIP 64 y TIP 52 de SAMHSA (Substance Abuse and Mental Health Services Administration) de Estados Unidos.'
  },
  {
    id: 4,
    question: '¿Cuánto tiempo es válida la certificación?',
    answer: 'La certificación ASCAD LATAM tiene validez de 2 años (bianual). Para renovar es necesario acumular horas de educación continua específicas por nivel y presentar la documentación de renovación.'
  },
  {
    id: 5,
    question: '¿Puedo trabajar en cualquier país de América Latina?',
    answer: 'La certificación ASCAD LATAM está reconocida en los países miembros del Consorcio. Cada país puede tener requisitos adicionales de validación local.'
  },
  {
    id: 6,
    question: '¿Qué requisitos necesito para certificarme?',
    answer: 'Los requisitos varían según el nivel. En general incluyen: formación académica mínima, horas de experiencia supervisada, horas de formación específica, avales profesionales, examen de certificación y firma del código de ética.'
  }
]
</script>

<style scoped>
/* Featured Section */
.featured-section { background: var(--white); }
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.featured-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 32px;
  transition: all .3s ease;
}
.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.featured-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
}
.badge-article { background: rgba(21, 101, 192, 0.1); color: #1565c0; }
.badge-guide { background: rgba(46, 125, 50, 0.1); color: #2e7d32; }
.badge-case { background: rgba(201, 168, 76, 0.15); color: var(--accent-dark); }
.featured-card h3 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
}
.featured-card p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}
.featured-meta {
  display: flex;
  gap: 12px;
  align-items: center;
}
.meta-date { font-size: .75rem; color: var(--text-muted); }
.meta-tag {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 600;
  padding: 3px 8px;
  background: var(--accent-light);
  color: var(--accent-dark);
  border-radius: var(--radius-sm);
}

/* Tabs Section */
.tabs-section { background: var(--bg-light); }
.content-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line-light);
  margin-bottom: 40px;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: .875rem;
  font-weight: 500;
  padding: 12px 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--white);
  color: var(--text-muted);
  cursor: pointer;
  transition: all .2s;
}
.tab-btn:hover { border-color: var(--accent); color: var(--accent-dark); }
.tab-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}
.tab-icon { font-size: 1.125rem; }

.tab-content { animation: fadeIn .3s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.biblioteca-intro, .faq-intro {
  margin-bottom: 32px;
}
.biblioteca-intro h3, .faq-intro h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 8px;
}
.biblioteca-intro p, .faq-intro p {
  font-size: 1rem;
  color: var(--text-muted);
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.library-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all .3s ease;
}
.library-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}
.library-icon { font-size: 2rem; flex-shrink: 0; }
.library-content h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 6px;
}
.library-content p {
  font-size: .8125rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 10px;
}
.library-count {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 600;
  color: var(--accent-dark);
  background: var(--accent-light);
  padding: 3px 10px;
  border-radius: var(--radius-sm);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.faq-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all .3s ease;
}
.faq-card:hover {
  border-color: var(--accent-light);
}
.faq-card h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 10px;
}
.faq-card p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Coming Soon */
.coming-soon { padding: 60px 0; }
.coming-soon-inner {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
.coming-icon { font-size: 4rem; margin-bottom: 20px; }
.coming-soon-inner h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 12px;
}
.coming-soon-inner p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}
.coming-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent-dark);
  background: var(--accent-light);
  border: 1px solid rgba(201,168,76,0.3);
  padding: 6px 16px;
  border-radius: 999px;
}

/* CTA */
.cta-knowledge {
  background: var(--primary);
  padding: 80px 0;
}
.cta-inner { text-align: center; }
.cta-inner h2 { color: var(--white); margin-bottom: 12px; font-size: 2rem; }
.cta-inner p { color: rgba(255,255,255,0.8); margin-bottom: 28px; font-size: 1.0625rem; }

@media (max-width: 1024px) {
  .featured-grid { grid-template-columns: repeat(2, 1fr); }
  .library-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .featured-grid { grid-template-columns: 1fr; }
  .library-grid { grid-template-columns: 1fr; }
  .faq-grid { grid-template-columns: 1fr; }
  .content-tabs { gap: 6px; }
  .tab-btn { padding: 10px 14px; font-size: .8125rem; }
}
@media (max-width: 480px) {
  .library-card { flex-direction: column; }
  .tab-btn .tab-icon { display: none; }
}
</style>