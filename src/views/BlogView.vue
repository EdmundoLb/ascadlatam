<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('blog.noticiasRecursos') || 'Noticias y recursos' }}</div>
        <h1>{{ $t('blog.actualidad') || 'Actualidad en' }} <em class="gold">{{ $t('home.adicciones') || 'adicciones' }}</em></h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('blog.subtitulo') }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-controls">
          <div class="blog-filters">
            <button
              v-for="cat in categories"
              :key="cat"
              class="cat-btn"
              :class="{ active: activeCategory === cat }"
              @click="changeCategory(cat)"
            >{{ $t(`blog.categories.${categoryLabelKeys[cat]}`) }}</button>
          </div>
          <div class="blog-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="search"
              v-model="searchQuery"
              :placeholder="$t('blog.buscar') || 'Buscar artículos...'"
              :aria-label="$t('blog.buscarAriaLabel')"
            />
          </div>
        </div>

        <div v-if="filteredPosts.length > 0" class="blog-grid">
          <article
            v-for="post in paginatedPosts"
            :key="post.id"
            class="blog-card card"
            @click="goToPost(post)"
            role="button"
            tabindex="0"
            @keydown.enter="goToPost(post)"
            @keydown.space.prevent="goToPost(post)"
          >
            <div class="blog-img">{{ post.emoji }}</div>
            <div class="blog-body">
              <div class="blog-meta">
                <span class="blog-cat">{{ $t(`blog.categories.${categoryLabelKeys[post.category]}`) }}</span>
                <span class="blog-date">{{ post.date }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p class="muted">{{ post.excerpt }}</p>
              <div class="blog-read">{{ $t('blog.leerMas') }} →</div>
            </div>
          </article>
        </div>

        <div v-else class="no-posts">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>{{ searchQuery ? $t('blog.sinResultadosBusqueda') : $t('blog.sinPublicaciones') }}</p>
        </div>

        <Pagination
          v-if="totalPages > 1"
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
      </div>
    </section>

    <Teleport to="body">
      <div v-if="selectedPost" class="post-modal-overlay" @click.self="closePost">
        <div class="post-modal" role="dialog" aria-modal="true" :aria-label="selectedPost.title" ref="modalRef" tabindex="-1">
          <button class="modal-close" @click="closePost" :aria-label="$t('common.close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="post-modal-header">
            <div class="blog-img-modal">{{ selectedPost.emoji }}</div>
            <div class="post-modal-meta">
              <span class="blog-cat">{{ $t(`blog.categories.${categoryLabelKeys[selectedPost.category]}`) }}</span>
              <span class="blog-date">{{ selectedPost.date }}</span>
            </div>
            <h2>{{ selectedPost.title }}</h2>
          </div>
          <div class="post-modal-body">
            <p>{{ selectedPost.content || selectedPost.excerpt }}</p>
            <div class="post-cta">
              <router-link to="/solicitud" class="btn btn-gold" @click="closePost">
                {{ $t('directorio.ctaIniciar') }}
              </router-link>
              <router-link to="/contacto" class="btn btn-outline" @click="closePost">
                {{ $t('certificaciones.masInfo') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { getBlogPosts, blogCategories, categoryLabelKeys } from '@/data/blog'
import Pagination from '@/components/ui/Pagination.vue'

const { locale } = useI18n()

const categories = blogCategories
const posts = computed(() => getBlogPosts(locale.value))

const activeCategory = ref('Todas')
const searchQuery = ref('')
const currentPage = ref(1)
const postsPerPage = 6
const selectedPost = ref(null)
const modalRef = ref(null)
let lastFocusedElement = null

const filteredPosts = computed(() => {
  let result = posts.value

  if (activeCategory.value !== 'Todas') {
    result = result.filter(p => p.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query) ||
      p.content?.toLowerCase().includes(query)
    )
  }

  return result
})

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredPosts.value.slice(start, start + postsPerPage)
})

function changeCategory(cat) {
  activeCategory.value = cat
  currentPage.value = 1
  searchQuery.value = ''
}

function handlePageChange(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function goToPost(post) {
  lastFocusedElement = document.activeElement
  selectedPost.value = post
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    modalRef.value?.focus()
  }, 100)
}

function closePost() {
  selectedPost.value = null
  document.body.style.overflow = ''
  nextTick(() => {
    lastFocusedElement?.focus()
  })
}

watch([activeCategory, searchQuery], () => {
  currentPage.value = 1
})

function handleKeydown(e) {
  if (!selectedPost.value) return

  if (e.key === 'Escape') {
    e.preventDefault()
    closePost()
    return
  }

  if (e.key === 'Tab') {
    const modal = modalRef.value
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
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.blog-controls {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.blog-filters { display: flex; gap: 8px; flex-wrap: wrap; }
.cat-btn {
  padding: 9px 18px; border-radius: var(--radius-sm);
  font-size: .84rem; font-weight: 500;
  border: 1px solid var(--line); color: var(--text-muted);
  background: var(--surface); cursor: pointer; transition: .2s;
}
.cat-btn:hover { color: var(--text); border-color: rgba(201,168,76,0.3); }
.cat-btn.active { background: var(--accent); color: var(--white); border-color: var(--accent); font-weight: 700; }

.blog-search {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 8px 16px;
  transition: border-color 0.2s;
}
.blog-search:focus-within { border-color: var(--accent); }
.blog-search svg { color: var(--text-muted); flex-shrink: 0; }
.blog-search input {
  border: none; background: transparent; font-size: .875rem;
  color: var(--text); outline: none; width: 200px;
}
.blog-search input::placeholder { color: var(--text-muted); }

.blog-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.blog-card { overflow: hidden; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.blog-img {
  height: 160px; background: var(--surface-alt); display: flex;
  align-items: center; justify-content: center;
  font-size: 2.8rem; border-bottom: 1px solid var(--line);
}
.blog-body { padding: 24px; }
.blog-meta { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; }
.blog-cat { font-family: var(--font-mono); font-size: .66rem; color: var(--accent); letter-spacing: .15em; text-transform: uppercase; }
.blog-date { font-size: .78rem; color: var(--text-muted); }
.blog-card h3 { color: var(--text); margin-bottom: 10px; font-size: 1rem; line-height: 1.4; }
.blog-card p { font-size: .84rem; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.blog-read { margin-top: 16px; font-size: .8rem; color: var(--accent); font-weight: 600; display: flex; align-items: center; gap: 4px; }

.no-posts {
  text-align: center; color: var(--text-muted); padding: 80px 20px;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.no-posts svg { opacity: 0.4; }
.no-posts p { font-size: 1rem; }

.post-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px); z-index: 1000; display: flex;
  align-items: center; justify-content: center; padding: 20px;
}
.post-modal {
  background: var(--white); border-radius: var(--radius-xl);
  max-width: 640px; width: 100%; max-height: 85vh; overflow-y: auto;
  position: relative; animation: modalIn 0.3s ease;
  outline: none;
}
.post-modal:focus-visible {
  box-shadow: 0 0 0 3px var(--accent);
}
@keyframes modalIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.modal-close {
  position: absolute; top: 16px; right: 16px; width: 40px; height: 40px;
  border-radius: 50%; border: none; background: var(--surface-alt);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; z-index: 1;
}
.modal-close:hover { background: var(--line); }
.post-modal-header { padding: 32px 32px 24px; }
.blog-img-modal {
  width: 72px; height: 72px; background: var(--surface-alt);
  border-radius: var(--radius-lg); display: flex;
  align-items: center; justify-content: center;
  font-size: 2.2rem; margin-bottom: 16px;
}
.post-modal-meta { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; }
.post-modal-header h2 { color: var(--text); font-size: 1.4rem; line-height: 1.3; margin: 0; }
.post-modal-body { padding: 0 32px 32px; }
.post-modal-body p { color: var(--text-secondary); line-height: 1.8; font-size: .95rem; }
.post-cta { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }

@media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 600px) {
  .blog-grid { grid-template-columns: 1fr; }
  .blog-controls { flex-direction: column; }
  .blog-search { width: 100%; }
  .blog-search input { width: 100%; }
  .post-modal { max-height: 90vh; }
  .post-modal-header { padding: 24px; }
  .post-modal-body { padding: 0 24px 24px; }
}
</style>