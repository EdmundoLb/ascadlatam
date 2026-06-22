<template>
  <a href="#main-content" class="skip-link">{{ $t('nav.skipLink') }}</a>

  <header class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
        <div class="brand-logo">
          <img :src="logoAscad" :alt="'ASCAD LATAM - Logo'" width="72" height="72" />
        </div>
        <div class="brand-text">
          <span class="brand-label">{{ $t('nav.brandLabel') }}</span>
          <strong class="brand-name">
            <span class="brand-ascal">{{ $t('nav.brandName') }}</span>
          </strong>
        </div>
      </router-link>

      <nav class="desktop-nav" role="navigation" aria-label="Navegación principal">
        <router-link to="/">{{ $t('nav.inicio') }}</router-link>
        <router-link to="/certificaciones">{{ $t('nav.certificaciones') }}</router-link>
        <router-link to="/etica">{{ $t('nav.etica') }}</router-link>
        <router-link to="/ascadlatam">{{ $t('nav.ascadlatam') }}</router-link>
        <router-link to="/formacion">{{ $t('nav.formacion') }}</router-link>
        <router-link to="/noticias">{{ $t('nav.recursos') }}</router-link>
        <router-link to="/directorio">{{ $t('nav.paises') }}</router-link>
        <router-link to="/contacto">{{ $t('nav.contacto') }}</router-link>
      </nav>

      <div class="nav-actions">
        <button class="lang-btn" @click="toggleLocale" :aria-label="$t('common.language')">
          {{ currentLocale === 'es' ? '🇪🇸' : '🇧🇷' }}
        </button>

        <router-link to="/solicitud" class="btn btn-gold hide-mobile">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
          {{ $t('nav.iniciarSolicitud') }}
        </router-link>
      </div>

      <button
        ref="hamburgerRef"
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        :aria-label="$t('nav.menu')"
        aria-controls="mobile-menu"
      >
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
      </button>
    </div>

    <div
      class="mobile-backdrop"
      :class="{ active: menuOpen }"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <nav
      id="mobile-menu"
      class="mobile-menu"
      :class="{ open: menuOpen }"
      role="navigation"
      aria-label="Menú móvil"
      @keydown.escape="closeMenu"
    >
      <router-link to="/" @click="closeMenu" tabindex="0">{{ $t('nav.inicio') }}</router-link>
      <router-link to="/certificaciones" @click="closeMenu" tabindex="0">{{ $t('nav.certificaciones') }}</router-link>
      <router-link to="/etica" @click="closeMenu" tabindex="0">{{ $t('nav.etica') }}</router-link>
      <router-link to="/ascadlatam" @click="closeMenu" tabindex="0">{{ $t('nav.ascadlatam') }}</router-link>
      <router-link to="/formacion" @click="closeMenu" tabindex="0">{{ $t('nav.formacion') }}</router-link>
      <router-link to="/noticias" @click="closeMenu" tabindex="0">{{ $t('nav.recursos') }}</router-link>
      <router-link to="/directorio" @click="closeMenu" tabindex="0">{{ $t('nav.paises') }}</router-link>
      <router-link to="/contacto" @click="closeMenu" tabindex="0">{{ $t('nav.contacto') }}</router-link>
      <div class="mobile-lang">
        <button @click="setLocale('es')" :class="{ active: currentLocale === 'es' }">🇪🇸 Español</button>
        <button @click="setLocale('pt')" :class="{ active: currentLocale === 'pt' }">🇧🇷 Português</button>
      </div>
      <router-link to="/solicitud" @click="closeMenu" class="mobile-cta" tabindex="0">{{ $t('nav.iniciarSolicitud') }} →</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import logoAscad from '/images/optimized/LOGO_ASCAD10.webp'

const { locale } = useI18n()
const currentLocale = ref(locale.value)
const menuOpen = ref(false)
const hamburgerRef = ref(null)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
  nextTick(() => {
    hamburgerRef.value?.focus()
  })
}

function toggleLocale() {
  const newLocale = currentLocale.value === 'es' ? 'pt' : 'es'
  locale.value = newLocale
  currentLocale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

function setLocale(lang) {
  locale.value = lang
  currentLocale.value = lang
  localStorage.setItem('locale', lang)
}

watch(menuOpen, async (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) {
    await nextTick()
    const firstLink = document.querySelector('#mobile-menu a')
    firstLink?.focus()
  }
})

watch(locale, (val) => {
  currentLocale.value = val
})
</script>

<style scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  padding: 12px 24px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius);
  z-index: 9999;
  font-weight: 600;
  transition: top var(--duration-normal);
}
.skip-link:focus { top: 16px; }

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--primary);
  box-shadow: var(--shadow-md);
  padding: 8px 0;
  overflow-x: hidden;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--nav-height);
  gap: 24px;
  overflow-x: hidden;
}
.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  margin-left: 8px;
}
.brand-logo {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  overflow: hidden;
}
.brand-logo img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  border-radius: 50%;
}
.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 4px;
}
.brand-label {
  font-family: var(--font-mono);
  font-size: .625rem;
  font-weight: 500;
  letter-spacing: .15em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1px;
}
.brand-name {
  display: flex;
  align-items: center;
  gap: 0;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}
.brand-ascal { color: var(--white); }

@media (max-width: 600px) {
  .brand-name {
    white-space: normal;
    flex-wrap: wrap;
    gap: 2px;
  }
  .brand-logo {
    width: 56px;
    height: 56px;
  }
  .brand-text {
    padding-left: 0;
  }
}

@media (max-width: 380px) {
  .brand-logo {
    width: 44px;
    height: 44px;
  }
  .brand-label {
    font-size: .5rem;
  }
  .brand-name {
    font-size: .875rem;
  }
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2px;
}
.desktop-nav a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: .875rem;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  padding: 10px 12px;
  border-radius: var(--radius);
  transition: all var(--duration-normal);
  text-decoration: none;
}
.desktop-nav a:hover {
  color: var(--white);
  background: rgba(255,255,255,0.1);
}
.desktop-nav a.router-link-active {
  color: var(--white);
  background: rgba(255,255,255,0.15);
}
.desktop-nav a.router-link-exact-active {
  color: var(--white);
  font-weight: 600;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: var(--radius);
  transition: background var(--duration-normal);
}
.hamburger:hover { background: rgba(255,255,255,0.1); }
.hamburger:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all var(--duration-normal);
}
.hamburger span.active:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger span.active:nth-child(2) { opacity: 0; }
.hamburger span.active:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.mobile-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0;
  transition: opacity var(--duration-normal);
}
.mobile-backdrop.active {
  display: block;
  opacity: 1;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--primary-dark);
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 16px 24px 28px;
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 100;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}
.mobile-menu.open {
  display: flex;
  animation: slideDown var(--duration-normal) ease;
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.mobile-menu a {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: color var(--duration-fast);
  text-decoration: none;
  overflow-wrap: break-word;
  word-break: break-word;
}
.mobile-menu a:hover,
.mobile-menu a:focus {
  color: var(--white);
  outline: none;
}
.mobile-menu a:focus-visible {
  background: rgba(255,255,255,0.1);
  border-radius: var(--radius-sm);
}
.mobile-menu a.router-link-exact-active { color: var(--white); font-weight: 600; }
.mobile-menu .mobile-cta {
  color: var(--accent);
  font-weight: 600;
  border-bottom: none;
  margin-top: 12px;
}

@media (max-width: 1100px) {
  .desktop-nav { display: none; }
  .hamburger { display: flex; }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: var(--radius);
  font-size: 1.25rem;
  cursor: pointer;
  transition: all var(--duration-normal);
}
.lang-btn:hover {
  background: rgba(255,255,255,0.15);
  transform: scale(1.05);
}
.lang-btn:active {
  transform: scale(0.95);
}

.mobile-lang {
  display: flex;
  gap: 8px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.mobile-lang button {
  flex: 1;
  padding: 10px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius);
  color: rgba(255,255,255,0.7);
  font-size: .875rem;
  cursor: pointer;
  transition: all var(--duration-fast);
}
.mobile-lang button:hover {
  background: rgba(255,255,255,0.12);
  color: var(--white);
}
.mobile-lang button.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
  font-weight: 600;
}

@media (max-width: 768px) {
  .nav-actions { display: none; }
}
</style>