<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">{{ $t('ascadlatam.heroEyebrow') }}</div>
        <h1>{{ $t('ascadlatam.heroTitulo') }}</h1>
        <p class="lead" style="margin-top:18px;">
          {{ $t('ascadlatam.heroLead') }}
        </p>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container">
        <div class="intro-content">
          <p class="intro-text">
            {{ $t('ascadlatam.introTexto') }}
          </p>
        </div>
      </div>
    </section>

    <section class="section timeline-section">
      <div class="container">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item1Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item1Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item1Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item2Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item2Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item2Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item3Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item3Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item3Texto') }}
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">{{ $t('ascadlatam.timeline.item4Anio') }}</div>
            <div class="timeline-content">
              <h3>{{ $t('ascadlatam.timeline.item4Titulo') }}</h3>
              <p>
                {{ $t('ascadlatam.timeline.item4Texto') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section closing-section">
      <div class="container">
        <div class="closing-content">
          <p class="closing-text">
            {{ $t('ascadlatam.closingTexto') }}
          </p>
          <div class="tagline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>{{ $t('ascadlatam.tagline') }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro-section { background: var(--white); }
.intro-content { max-width: 800px; margin: 0 auto; }
.intro-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.9;
  text-align: center;
}

.timeline-section { background: var(--bg-light); }
.timeline {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  align-items: start;
}
.timeline-year {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-dark);
  line-height: 1;
  text-align: right;
  padding-top: 4px;
}
.timeline-content {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 32px 36px;
  border: 1px solid var(--line-light);
  box-shadow: var(--shadow-sm);
  position: relative;
}
.timeline-content::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 28px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: var(--white);
}
.timeline-content h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 12px;
}
.timeline-content p {
  font-size: .9375rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.closing-section { background: var(--primary); color: var(--white); }
.closing-content { max-width: 800px; margin: 0 auto; text-align: center; }
.closing-text {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.9;
  margin-bottom: 40px;
}
.tagline {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--radius-lg);
  font-family: var(--font-display);
  font-size: 1.125rem;
  color: var(--accent);
}
.tagline svg { flex-shrink: 0; color: var(--accent); }

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .timeline-year { text-align: left; font-size: 2rem; }
  .timeline-content::before { display: none; }
  .tagline { flex-direction: column; text-align: center; }
}
</style>