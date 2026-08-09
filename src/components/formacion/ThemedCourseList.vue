<template>
  <div class="themed-list-wrap">
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
      {{ totalResults === 1 ? t('formacion.biblioteca.resultado') : t('formacion.biblioteca.resultados', { count: totalResults }) }}
    </p>

    <!-- searching: flat compact list, no grouping -->
    <div v-if="query.trim()" class="row-list">
      <div v-for="course in flatFiltered" :key="course.fileUrl" class="course-row">
        <svg class="row-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <span class="row-title">{{ course.title }}</span>
        <div class="row-actions">
          <a :href="course.fileUrl" target="_blank" rel="noopener noreferrer" class="row-link">{{ t('formacion.biblioteca.verPdf') }}</a>
          <a :href="course.fileUrl" download class="row-link row-link-download">{{ t('formacion.biblioteca.descargar') }}</a>
        </div>
      </div>
      <div v-if="!flatFiltered.length" class="course-empty">
        <p>{{ t('formacion.biblioteca.sinResultados') }}</p>
        <button type="button" class="btn btn-outline" @click="query = ''">{{ t('formacion.biblioteca.limpiarBusqueda') }}</button>
      </div>
    </div>

    <!-- default: accordion grouped by theme -->
    <div v-else class="theme-accordion">
      <div
        v-for="group in themes"
        :key="group.theme"
        class="theme-group"
        :class="{ open: openThemes.has(group.theme) }"
        :style="{ '--theme-color': group.color, '--theme-bg': group.bg }"
      >
        <button type="button" class="theme-header" :aria-expanded="openThemes.has(group.theme)" @click="toggleTheme(group.theme)">
          <span class="theme-dot"></span>
          <span class="theme-name">{{ group.theme }}</span>
          <span class="theme-count">{{ group.courses.length }}</span>
          <svg class="theme-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="theme-body">
          <div class="theme-body-inner">
            <div v-for="course in group.courses" :key="course.fileUrl" class="course-row">
              <svg class="row-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span class="row-title">{{ course.title }}</span>
              <div class="row-actions">
                <a :href="course.fileUrl" target="_blank" rel="noopener noreferrer" class="row-link">{{ t('formacion.biblioteca.verPdf') }}</a>
                <a :href="course.fileUrl" download class="row-link row-link-download">{{ t('formacion.biblioteca.descargar') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  themes: { type: Array, required: true }
})

const { t } = useI18n()
const query = ref('')
const openThemes = ref(new Set())

function toggleTheme(theme) {
  const next = new Set(openThemes.value)
  if (next.has(theme)) next.delete(theme)
  else next.add(theme)
  openThemes.value = next
}

const flatCourses = computed(() => props.themes.flatMap(group => group.courses))

const flatFiltered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return flatCourses.value
  return flatCourses.value.filter(course => course.title.toLowerCase().includes(q))
})

const totalResults = computed(() => query.value.trim() ? flatFiltered.value.length : flatCourses.value.length)
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

/* Accordion grouped by theme */
.theme-accordion {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.theme-group {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-left: 3px solid var(--theme-color, var(--line-light));
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color .2s;
}
.theme-group.open { border-color: var(--theme-color, var(--accent-light)); border-left-width: 3px; }
.theme-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--theme-color, var(--accent));
  flex-shrink: 0;
}
.theme-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background .2s;
}
.theme-header:hover { background: var(--bg-light); }
.theme-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-color, var(--text));
  flex: 1;
}
.theme-count {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 999px;
  background: var(--theme-bg, var(--accent-light));
  color: var(--theme-color, var(--accent-dark));
}
.theme-chevron { color: var(--text-muted); transition: transform .3s ease; flex-shrink: 0; }
.theme-group.open .theme-chevron { transform: rotate(180deg); }

.theme-body { max-height: 0; overflow: hidden; transition: max-height .4s ease; }
.theme-group.open .theme-body { max-height: 1200px; }
.theme-body-inner { padding: 0 20px 8px; border-top: 1px solid var(--line-light); }

/* Compact rows (shared by accordion + search-flat view) */
.row-list {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.course-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--line-light);
  transition: background .2s;
}
.theme-body-inner .course-row:first-child { padding-top: 14px; }
.course-row:last-child { border-bottom: none; }
.course-row:hover { background: var(--bg-light); }
.row-icon { color: var(--accent-dark); flex-shrink: 0; }
.theme-body-inner .row-icon { color: var(--theme-color, var(--accent-dark)); }
.row-title { flex: 1; font-size: .875rem; color: var(--text); line-height: 1.4; }
.row-actions { display: flex; gap: 16px; flex-shrink: 0; }
.row-link {
  font-size: .75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  white-space: nowrap;
}
.row-link:hover { color: var(--text); text-decoration: underline; }
.row-link-download { color: var(--accent-dark); }
.row-link-download:hover { color: var(--accent-dark); }

.course-empty {
  text-align: center;
  padding: 40px 24px;
}
.course-empty p { color: var(--text-muted); margin: 0 0 16px; }

@media (max-width: 600px) {
  .course-row { flex-wrap: wrap; }
  .row-title { flex-basis: 100%; }
  .row-actions { margin-left: 30px; }
}
</style>
