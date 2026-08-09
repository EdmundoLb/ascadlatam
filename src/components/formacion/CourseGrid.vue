<template>
  <div class="course-grid-wrap">
    <div class="course-search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input
        v-model="query"
        type="search"
        class="course-search-input"
        :placeholder="t('formacion.biblioteca.buscarPlaceholder')"
        :aria-label="t('formacion.biblioteca.buscarPlaceholder')"
      >
    </div>

    <p class="course-results-count">
      {{ filtered.length === 1 ? t('formacion.biblioteca.resultado') : t('formacion.biblioteca.resultados', { count: filtered.length }) }}
    </p>

    <div v-if="filtered.length" class="course-grid">
      <article v-for="course in filtered" :key="course.fileUrl" class="course-card" :class="{ 'is-official': itemBadge }">
        <span v-if="itemBadge" class="course-card-badge">{{ itemBadge }}</span>
        <div class="course-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <h4 class="course-card-title">{{ course.title }}</h4>
        <div class="course-card-actions">
          <a :href="course.fileUrl" target="_blank" rel="noopener noreferrer" class="course-btn course-btn-view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            {{ t('formacion.biblioteca.verPdf') }}
          </a>
          <a :href="course.fileUrl" download class="course-btn course-btn-download">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {{ t('formacion.biblioteca.descargar') }}
          </a>
        </div>
      </article>
    </div>
    <div v-else class="course-empty">
      <p>{{ t('formacion.biblioteca.sinResultados') }}</p>
      <button type="button" class="btn btn-outline" @click="query = ''">{{ t('formacion.biblioteca.limpiarBusqueda') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  courses: { type: Array, required: true },
  itemBadge: { type: String, default: '' }
})

const { t } = useI18n()
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.courses
  return props.courses.filter(course => course.title.toLowerCase().includes(q))
})
</script>

<style scoped>
.course-search {
  position: relative;
  max-width: 420px;
  margin: 0 auto 28px;
  width: 100%;
}
.course-search svg {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}
.course-search-input {
  width: 100%;
  padding: 13px 16px 13px 46px;
  border-radius: 999px;
  border: 1px solid var(--line-light);
  background: var(--white);
  font-size: .875rem;
  color: var(--text);
  font-family: inherit;
  transition: border-color .2s, box-shadow .2s;
}
.course-search-input::placeholder { color: var(--text-muted); }
.course-search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
}

.course-results-count {
  text-align: center;
  font-size: .8125rem;
  color: var(--text-muted);
  margin: 0 0 20px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.course-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: box-shadow .3s, transform .3s, border-color .3s;
}
.course-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
  transform: translateY(-2px);
}
.course-card.is-official {
  border-color: rgba(201,168,76,0.3);
  background: linear-gradient(180deg, var(--accent-light) 0%, var(--surface) 90px);
}
.course-card-badge {
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--primary);
  background: var(--accent);
  padding: 3px 9px;
  border-radius: 999px;
}
.course-card-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius);
  background: var(--accent-light);
  color: var(--accent-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.course-card-title {
  flex: 1;
  font-family: var(--font-display);
  font-size: .9375rem;
  color: var(--text);
  margin: 0;
  line-height: 1.4;
}
.course-card-actions {
  display: flex;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--line-light);
}
.course-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 12px;
  border-radius: var(--radius);
  font-size: .75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;
}
.course-btn-view {
  background: var(--bg-light);
  color: var(--text);
  border: 1px solid var(--line-light);
}
.course-btn-view:hover { border-color: var(--accent); color: var(--accent-dark); }
.course-btn-download {
  background: var(--accent);
  color: var(--primary);
  border: 1px solid var(--accent);
}
.course-btn-download:hover { background: var(--accent-dark); border-color: var(--accent-dark); }

.course-empty {
  text-align: center;
  padding: 40px 24px;
  background: var(--surface);
  border: 1px dashed var(--line-light);
  border-radius: var(--radius-lg);
}
.course-empty p { color: var(--text-muted); margin: 0 0 16px; }

@media (max-width: 900px) {
  .course-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .course-grid { grid-template-columns: 1fr; }
  .course-card-actions { flex-direction: column; }
}
</style>
