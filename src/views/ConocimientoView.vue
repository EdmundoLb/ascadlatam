<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('conocimiento.heroEyebrow') }}</div>
        <h1>{{ $t('conocimiento.heroTituloPre') }}<br><em class="gold">{{ $t('conocimiento.heroTituloEm') }}</em></h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('conocimiento.heroLead') }}
        </p>
      </div>
    </section>

    <!-- Featured Resources -->
    <section class="section featured-section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">{{ $t('conocimiento.destacadosEyebrow') }}</div>
          <h2>{{ $t('conocimiento.destacadosTituloPre') }} <em class="gold">{{ $t('conocimiento.destacadosTituloEm') }}</em></h2>
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
        <div class="content-tabs" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :id="`tab-${tab.id}`"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :aria-controls="`panel-${tab.id}`"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <!-- v-html: SVG fijo definido en este mismo componente -->
            <span class="tab-icon" v-html="tab.icon"></span>
            {{ tab.label }}
          </button>
        </div>

        <!-- Biblioteca Tab -->
        <div v-if="activeTab === 'biblioteca'" id="panel-biblioteca" role="tabpanel" aria-labelledby="tab-biblioteca" class="tab-content">
          <div class="biblioteca-intro">
            <h3>{{ $t('conocimiento.bibliotecaTitulo') }}</h3>
            <p>{{ $t('conocimiento.bibliotecaDesc') }}</p>
          </div>
          <div class="library-grid">
            <div v-for="item in libraryItems" :key="item.id" class="library-card">
              <!-- v-html: SVG fijo definido en este mismo componente -->
              <div class="library-icon" v-html="item.icon"></div>
              <div class="library-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <span class="library-count">{{ item.count }} {{ $t('conocimiento.recursosSufijo') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Infografías Tab -->
        <div v-if="activeTab === 'infografias'" id="panel-infografias" role="tabpanel" aria-labelledby="tab-infografias" class="tab-content">
          <div class="infografias-intro">
            <h3>{{ $t('conocimiento.infografiasTitulo') }}</h3>
            <p>{{ $t('conocimiento.infografiasDesc') }}</p>
          </div>
          <div class="infografias-grid">
            <div v-for="item in infografiasItems" :key="item.id" class="infografia-card" @click="openLightbox(item.image)">
              <div class="infografia-preview">
                <img :src="item.image" :alt="item.title" loading="lazy" />
                <div class="infografia-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
              <div class="infografia-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lightbox Modal -->
        <div
          v-if="lightboxImage"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Infografía ampliada"
          ref="lightboxRef"
          tabindex="-1"
          @click="closeLightbox"
        >
          <button class="lightbox-close" @click="closeLightbox" aria-label="Cerrar imagen ampliada">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img :src="lightboxImage" :alt="$t('conocimiento.infografiaAmpliadaAlt')" @click.stop />
        </div>

        <!-- Artículos Tab -->
        <div v-if="activeTab === 'articulos'" id="panel-articulos" role="tabpanel" aria-labelledby="tab-articulos" class="tab-content">
          <div class="articulos-intro">
            <h3>{{ $t('conocimiento.articulosTitulo') }}</h3>
            <p>{{ $t('conocimiento.articulosDesc') }}</p>
          </div>
          <div class="articulos-list">
            <article v-for="item in articulosItems" :key="item.id" class="articulo-card" :class="{ open: openArticleId === item.id }">
              <button class="articulo-header" @click="toggleArticle(item.id)">
                <div class="articulo-title-wrap">
                  <h4>{{ item.title }}</h4>
                  <div class="articulo-meta">
                    <span class="articulo-author">{{ item.author }}</span>
                    <span class="articulo-credentials">{{ item.credentials }}</span>
                  </div>
                </div>
                <svg class="articulo-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="articulo-content" v-show="openArticleId === item.id">
                <p class="articulo-preview">{{ item.preview }}</p>
                <div class="articulo-full">
                  <p v-for="(paragraph, i) in item.content.split('\n\n')" :key="i">{{ paragraph }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Base de Conocimiento Tab -->
        <div v-if="activeTab === 'base'" id="panel-base" role="tabpanel" aria-labelledby="tab-base" class="tab-content">
          <div class="faq-intro">
            <h3>{{ $t('conocimiento.faqTitulo') }}</h3>
            <p>{{ $t('conocimiento.faqDesc') }}</p>
          </div>
          <div class="faq-grid">
            <div v-for="faq in faqItems" :key="faq.id" class="faq-card">
              <h4>{{ faq.question }}</h4>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Comunidad Tab (Próximamente) -->
        <div v-if="activeTab === 'comunidad'" id="panel-comunidad" role="tabpanel" aria-labelledby="tab-comunidad" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <h3>{{ $t('conocimiento.comunidadTitulo') }}</h3>
            <p>{{ $t('conocimiento.comunidadDesc') }}</p>
            <span class="coming-badge">{{ $t('conocimiento.proximamente') }}</span>
          </div>
        </div>

        <!-- Academia Tab (Próximamente) -->
        <div v-if="activeTab === 'academia'" id="panel-academia" role="tabpanel" aria-labelledby="tab-academia" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
            <h3>{{ $t('conocimiento.academiaTitulo') }}</h3>
            <p>{{ $t('conocimiento.academiaDesc') }}</p>
            <span class="coming-badge">{{ $t('conocimiento.proximamente') }}</span>
          </div>
        </div>

        <!-- Cursos Tab (Próximamente) -->
        <div v-if="activeTab === 'cursos'" id="panel-cursos" role="tabpanel" aria-labelledby="tab-cursos" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/></svg></div>
            <h3>{{ $t('conocimiento.cursosTitulo') }}</h3>
            <p>{{ $t('conocimiento.cursosDesc') }}</p>
            <span class="coming-badge">{{ $t('conocimiento.proximamente') }}</span>
          </div>
        </div>

        <!-- Webinars Tab (Próximamente) -->
        <div v-if="activeTab === 'webinars'" id="panel-webinars" role="tabpanel" aria-labelledby="tab-webinars" class="tab-content coming-soon">
          <div class="coming-soon-inner">
            <div class="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div>
            <h3>{{ $t('conocimiento.webinarsTitulo') }}</h3>
            <p>{{ $t('conocimiento.webinarsDesc') }}</p>
            <span class="coming-badge">{{ $t('conocimiento.proximamente') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-knowledge">
      <div class="container">
        <div class="cta-inner">
          <h2>{{ $t('conocimiento.ctaTitulo') }}</h2>
          <p>{{ $t('conocimiento.ctaTexto') }}</p>
          <router-link to="/contacto" class="btn btn-gold btn-lg">{{ $t('conocimiento.ctaBoton') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import info01 from '/images/optimized/info01.webp'
import infor02 from '/images/optimized/infor02.webp'

const { t } = useI18n()

const activeTab = ref('articulos')
const openArticleId = ref(null)
const lightboxImage = ref(null)
const lightboxRef = ref(null)
let lightboxLastFocused = null

const toggleArticle = (id) => {
  openArticleId.value = openArticleId.value === id ? null : id
}

const openLightbox = (img) => {
  lightboxLastFocused = document.activeElement
  lightboxImage.value = img
  nextTick(() => {
    lightboxRef.value?.focus()
  })
}

const closeLightbox = () => {
  lightboxImage.value = null
  nextTick(() => {
    lightboxLastFocused?.focus()
  })
}

function handleLightboxKeydown(e) {
  if (!lightboxImage.value) return

  if (e.key === 'Escape') {
    e.preventDefault()
    closeLightbox()
    return
  }

  if (e.key === 'Tab') {
    const modal = lightboxRef.value
    if (!modal) return

    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors))
    if (focusableElements.length === 0) return

    const firstEl = focusableElements[0]
    const lastEl = focusableElements[focusableElements.length - 1]

    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault()
      lastEl.focus()
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault()
      firstEl.focus()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleLightboxKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleLightboxKeydown)
})

const tabs = computed(() => [
  { id: 'biblioteca', label: t('conocimiento.tabs.biblioteca'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
  { id: 'infografias', label: t('conocimiento.tabs.infografias'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
  { id: 'articulos', label: t('conocimiento.tabs.articulos'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
  { id: 'base', label: t('conocimiento.tabs.base'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
  { id: 'comunidad', label: t('conocimiento.tabs.comunidad'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { id: 'academia', label: t('conocimiento.tabs.academia'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' },
  { id: 'cursos', label: t('conocimiento.tabs.cursos'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/></svg>' },
  { id: 'webinars', label: t('conocimiento.tabs.webinars'), icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>' },
])

const featuredItems = computed(() => [
  {
    id: 1,
    type: 'article',
    typeLabel: t('conocimiento.featured.item1TypeLabel'),
    title: t('conocimiento.featured.item1Title'),
    description: t('conocimiento.featured.item1Description'),
    date: t('conocimiento.featured.item1Date'),
    tag: 'TAP 21'
  },
  {
    id: 2,
    type: 'guide',
    typeLabel: t('conocimiento.featured.item2TypeLabel'),
    title: t('conocimiento.featured.item2Title'),
    description: t('conocimiento.featured.item2Description'),
    date: t('conocimiento.featured.item2Date'),
    tag: 'OST'
  },
  {
    id: 3,
    type: 'case',
    typeLabel: t('conocimiento.featured.item3TypeLabel'),
    title: t('conocimiento.featured.item3Title'),
    description: t('conocimiento.featured.item3Description'),
    date: t('conocimiento.featured.item3Date'),
    tag: 'Regional'
  }
])

const libraryItems = computed(() => [
  {
    id: 1,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    title: t('conocimiento.library.item1Title'),
    description: t('conocimiento.library.item1Description'),
    count: 12
  },
  {
    id: 2,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: t('conocimiento.library.item2Title'),
    description: t('conocimiento.library.item2Description'),
    count: 8
  },
  {
    id: 3,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    title: t('conocimiento.library.item3Title'),
    description: t('conocimiento.library.item3Description'),
    count: 15
  },
  {
    id: 4,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    title: t('conocimiento.library.item4Title'),
    description: t('conocimiento.library.item4Description'),
    count: 6
  },
  {
    id: 5,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    title: t('conocimiento.library.item5Title'),
    description: t('conocimiento.library.item5Description'),
    count: 24
  },
  {
    id: 6,
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    title: t('conocimiento.library.item6Title'),
    description: t('conocimiento.library.item6Description'),
    count: 10
  }
])

const faqItems = computed(() => [
  {
    id: 1,
    question: t('conocimiento.faq.item1Question'),
    answer: t('conocimiento.faq.item1Answer')
  },
  {
    id: 2,
    question: t('conocimiento.faq.item2Question'),
    answer: t('conocimiento.faq.item2Answer')
  },
  {
    id: 3,
    question: t('conocimiento.faq.item3Question'),
    answer: t('conocimiento.faq.item3Answer')
  },
  {
    id: 4,
    question: t('conocimiento.faq.item4Question'),
    answer: t('conocimiento.faq.item4Answer')
  },
  {
    id: 5,
    question: t('conocimiento.faq.item5Question'),
    answer: t('conocimiento.faq.item5Answer')
  },
  {
    id: 6,
    question: t('conocimiento.faq.item6Question'),
    answer: t('conocimiento.faq.item6Answer')
  }
])

const infografiasItems = computed(() => [
  {
    id: 1,
    title: t('conocimiento.infografias.item1Title'),
    description: t('conocimiento.infografias.item1Description'),
    image: info01
  },
  {
    id: 2,
    title: t('conocimiento.infografias.item2Title'),
    description: t('conocimiento.infografias.item2Description'),
    image: infor02
  }
])

const articulosItems = computed(() => [
  {
    id: 1,
    title: t('conocimiento.articulos.item1Title'),
    author: 'Cynthia Moreno Tuohy',
    credentials: t('conocimiento.articulos.item1Credentials'),
    preview: t('conocimiento.articulos.item1Preview'),
    content: t('conocimiento.articulos.item1Content')
  },
  {
    id: 2,
    title: t('conocimiento.articulos.item2Title'),
    author: 'Gonzalo Esquivel',
    credentials: t('conocimiento.articulos.item2Credentials'),
    preview: t('conocimiento.articulos.item2Preview'),
    content: t('conocimiento.articulos.item2Content')
  },
  {
    id: 3,
    title: t('conocimiento.articulos.item3Title'),
    author: 'James "Kansas" Cafferty',
    credentials: t('conocimiento.articulos.item3Credentials'),
    preview: t('conocimiento.articulos.item3Preview'),
    content: t('conocimiento.articulos.item3Content')
  }
])
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
}
.library-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-lg);
  color: var(--accent-dark);
}
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
.coming-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-light);
  border-radius: var(--radius-xl);
}
.coming-icon svg {
  width: 40px;
  height: 40px;
  stroke: var(--accent-dark);
}
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

/* Infografías */
.infografias-intro, .articulos-intro {
  margin-bottom: 32px;
}
.infografias-intro h3, .articulos-intro h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 8px;
}
.infografias-intro p, .articulos-intro p {
  font-size: 1rem;
  color: var(--text-muted);
}
.infografias-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.infografia-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease;
}
.infografia-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}
.infografia-preview {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}
.infografia-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s ease;
}
.infografia-card:hover .infografia-preview img {
  transform: scale(1.05);
}
.infografia-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,37,64,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .3s ease;
}
.infografia-overlay svg {
  color: var(--white);
}
.infografia-card:hover .infografia-overlay {
  opacity: 1;
}
.infografia-info {
  padding: 24px;
}
.infografia-info h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 8px;
}
.infografia-info p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  animation: fadeIn .2s ease;
}
.lightbox:focus-visible { outline: none; }
.lightbox img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: background .2s ease;
}
.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

/* Artículos */
.articulos-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.articulo-card {
  background: var(--white);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all .3s ease;
}
.articulo-card:hover {
  border-color: var(--accent-light);
}
.articulo-card.open {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}
.articulo-header {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
.articulo-title-wrap {
  flex: 1;
}
.articulo-header h4 {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
}
.articulo-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.articulo-author {
  font-size: .8125rem;
  font-weight: 600;
  color: var(--primary);
}
.articulo-credentials {
  font-size: .75rem;
  color: var(--text-muted);
  padding-left: 8px;
  border-left: 1px solid var(--line);
}
.articulo-arrow {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform .3s ease;
}
.articulo-card.open .articulo-arrow {
  transform: rotate(180deg);
}
.articulo-content {
  padding: 0 28px 28px;
  border-top: 1px solid var(--line-light);
}
.articulo-preview {
  font-size: .9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-top: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--line);
}
.articulo-full {
  margin-top: 20px;
}
.articulo-full p {
  font-size: .875rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.articulo-full p:last-child {
  margin-bottom: 0;
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
  .infografias-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .featured-grid { grid-template-columns: 1fr; }
  .library-grid { grid-template-columns: 1fr; }
  .faq-grid { grid-template-columns: 1fr; }
  .infografias-grid { grid-template-columns: 1fr; }
  .content-tabs { gap: 6px; }
  .tab-btn { padding: 10px 14px; font-size: .8125rem; }
  .articulo-header { padding: 20px; }
  .articulo-content { padding: 0 20px 20px; }
}
@media (max-width: 480px) {
  .library-card { flex-direction: column; }
  .tab-btn .tab-icon { display: none; }
  .infografias-grid { gap: 20px; }
  .lightbox { padding: 20px; }
}
</style>