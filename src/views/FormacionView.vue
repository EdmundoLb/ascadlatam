<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('formacion.heroEyebrow') }}</div>
        <h1>{{ $t('formacion.heroTituloPre') }}<br><em class="gold">{{ $t('formacion.heroTituloEm') }}</em></h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('formacion.heroLead') }}
        </p>
      </div>
    </section>

    <section class="intro-section section">
      <div class="container">
        <div class="intro-content">
          <p>{{ $t('formacion.introTexto') }}</p>
        </div>
      </div>
    </section>

    <section class="section toc-section">
      <div class="container">
        <p class="toc-intro">{{ $t('formacion.tocIntro') }}</p>
        <div class="toc-grid">
          <a href="#certificacion-internacional" class="toc-item">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
            </span>
            <span class="toc-label">{{ $t('formacion.tocCertInternacional') }}</span>
            <span class="toc-desc">{{ $t('formacion.tocCertInternacionalDesc') }}</span>
          </a>
          <a href="#entrenamiento-continuo" class="toc-item toc-item-entrenamiento">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </span>
            <span class="toc-label">{{ $t('formacion.tocEntrenamientoContinuo') }}</span>
            <span class="toc-desc">{{ $t('formacion.tocEntrenamientoContinuoDesc') }}</span>
          </a>
          <a href="#actualizacion-profesional" class="toc-item toc-item-actualizacion">
            <span class="toc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            </span>
            <span class="toc-label">{{ $t('formacion.tocActualizacionProfesional') }}</span>
            <span class="toc-desc">{{ $t('formacion.tocActualizacionProfesionalDesc') }}</span>
          </a>
        </div>
      </div>
    </section>

    <section id="certificacion-internacional" class="section certifications-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">{{ $t('formacion.certBadge') }}</span>
          <h2>{{ $t('formacion.certTitulo') }}</h2>
          <p class="section-subtitle">{{ $t('formacion.certSubtitulo') }}</p>
        </div>

        <CourseGrid :courses="certificacionInternacionalCourses" :item-badge="$t('formacion.programaOficialBadge')" />
      </div>
    </section>

    <section id="entrenamiento-continuo" class="section specialized-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">{{ $t('formacion.especializadosBadge') }}</span>
          <h2>{{ $t('formacion.especializadosTitulo') }}</h2>
          <p class="section-subtitle">{{ $t('formacion.especializadosSubtitulo') }}</p>
        </div>

        <ThemedCourseList :themes="entrenamientoContinuoThemes" />
      </div>
    </section>

    <section id="actualizacion-profesional" class="section continuing-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">{{ $t('formacion.continuaBadge') }}</span>
          <h2>{{ $t('formacion.continuaTitulo') }}</h2>
          <p class="section-subtitle">{{ $t('formacion.continuaSubtitulo') }}</p>
        </div>

        <CourseGrid :courses="actualizacionProfesionalCourses" />
      </div>
    </section>

    <section class="section modalities-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">{{ $t('formacion.modalidadesBadge') }}</span>
          <h2>{{ $t('formacion.modalidadesTitulo') }}</h2>
        </div>

        <div class="modalities-grid">
          <div class="modality-card">
            <div class="modality-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h4>{{ $t('formacion.presencialTitulo') }}</h4>
            <p>{{ $t('formacion.presencialDesc') }}</p>
          </div>
          <div class="modality-card">
            <div class="modality-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h4>{{ $t('formacion.virtualTitulo') }}</h4>
            <p>{{ $t('formacion.virtualDesc') }}</p>
          </div>
        </div>

        <div class="features-list">
          <div class="feature-item">
            <span class="feature-check">✓</span>
            <span>{{ $t('formacion.features.item1') }}</span>
          </div>
          <div class="feature-item">
            <span class="feature-check">✓</span>
            <span>{{ $t('formacion.features.item2') }}</span>
          </div>
          <div class="feature-item">
            <span class="feature-check">✓</span>
            <span>{{ $t('formacion.features.item3') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('formacion.ctaTitulo') }}</h2>
          <p>{{ $t('formacion.ctaTexto') }}</p>
          <div class="cta-tagline">{{ $t('formacion.ctaTagline') }}</div>
          <RouterLink to="/contacto" class="btn btn-gold btn-lg">{{ $t('formacion.ctaBoton') }}</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getFormacionContinuaCategories, getEntrenamientoContinuoThemes } from '@/data/formacionContinua'
import CourseGrid from '@/components/formacion/CourseGrid.vue'
import ThemedCourseList from '@/components/formacion/ThemedCourseList.vue'

const { locale } = useI18n()

const formacionContinuaCategories = computed(() => getFormacionContinuaCategories(locale.value))
function coursesFor(categoryId) {
  return formacionContinuaCategories.value.find(cat => cat.id === categoryId)?.courses || []
}
const actualizacionProfesionalCourses = computed(() => coursesFor('actualizacion-profesional'))
const certificacionInternacionalCourses = computed(() => coursesFor('certificacion-internacional'))
const entrenamientoContinuoThemes = computed(() => getEntrenamientoContinuoThemes(locale.value))
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  padding: 80px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(201,168,76,0.08) 0%, transparent 50%);
  pointer-events: none;
}
.eyebrow {
  font-family: var(--font-mono);
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.page-hero h1 {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
  margin: 0;
}
.page-hero h1 em.gold {
  font-style: normal;
  color: var(--accent);
}
.page-hero .lead {
  font-size: 1.125rem;
  color: rgba(255,255,255,0.85);
  max-width: 650px;
  margin: 18px auto 0;
  line-height: 1.7;
}
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }

.intro-section { background: var(--bg-light); }
.intro-content { max-width: 800px; margin: 0 auto; text-align: center; }
.intro-content p {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* TABLE OF CONTENTS */
.toc-section { background: var(--white); padding: 48px 0; }
.toc-intro {
  text-align: center;
  font-size: .875rem;
  color: var(--text-muted);
  margin-bottom: 28px;
}
.toc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.toc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  background: var(--bg-light);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toc-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-lg, var(--shadow-md));
  border-color: var(--accent);
}
.toc-item:hover .toc-icon {
  background: var(--accent);
  color: var(--white);
}
.toc-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-dark);
  margin-bottom: 14px;
  transition: all 0.3s ease;
}
.toc-label { font-weight: 600; color: var(--text); font-size: .9375rem; }
.toc-desc { font-size: .8rem; color: var(--text-muted); margin-top: 4px; }

.toc-item-entrenamiento .toc-icon { background: rgba(91,124,153,0.14); color: #5b7c99; }
.toc-item-entrenamiento:hover .toc-icon { background: #5b7c99; color: var(--white); }
.toc-item-entrenamiento:hover { border-color: #5b7c99; }
.toc-item-actualizacion .toc-icon { background: rgba(107,143,113,0.14); color: #6b8f71; }
.toc-item-actualizacion:hover .toc-icon { background: #6b8f71; color: var(--white); }
.toc-item-actualizacion:hover { border-color: #6b8f71; }

.section-header { text-align: center; margin-bottom: 48px; }
.badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(201,168,76,0.15);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.section-header h2 {
  font-family: var(--font-display);
  font-size: 2.25rem;
  color: var(--text);
  margin: 0 0 12px;
}
.section-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.specialized-section { background: var(--bg-light); }

.continuing-section { background: var(--white); }

.modalities-section { background: var(--bg-light); }
.modalities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}
.modality-card {
  background: var(--surface);
  border: 1px solid var(--line-light);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
}
.modality-icon { font-size: 2.5rem; margin-bottom: 16px; }
.modality-card h4 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--primary);
  margin: 0 0 8px;
}
.modality-card p {
  font-size: .875rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}
.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto;
}
.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: .9375rem;
  color: var(--text);
}
.feature-check { color: var(--accent-dark); font-weight: 700; font-size: 1rem; }

.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%);
  text-align: center;
}
.cta-content { max-width: 700px; margin: 0 auto; }
.cta-content h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--white);
  margin: 0 0 16px;
}
.cta-content p {
  font-size: 1rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  margin: 0 0 24px;
}
.cta-tagline {
  font-family: var(--font-mono);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 32px;
}
@media (max-width: 900px) {
  .toc-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .page-hero h1 { font-size: 2rem; }
  .section { padding: 60px 0; }
  .modalities-grid { grid-template-columns: 1fr; }
  .cta-content h2 { font-size: 1.75rem; }
}
</style>