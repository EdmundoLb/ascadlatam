<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <header class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="brand">
        <div class="brand-logo">
          <img :src="logoAscad" alt="ASCAD LATAM - Logo" width="72" height="72" />
        </div>
        <div class="brand-text">
          <span class="brand-label">Certificación Internacional</span>
          <strong class="brand-name">
            <span class="brand-flact">FLACT</span>
            <span class="brand-sep"> . </span>
            <span class="brand-ascal">ASCAD-LATAM</span>
          </strong>
        </div>
      </router-link>

      <nav class="desktop-nav" role="navigation" aria-label="Navegación principal">
        <router-link to="/">Inicio</router-link>
        <router-link to="/certificaciones">Certificaciones</router-link>
        <router-link to="/flact">FLACT</router-link>
        <router-link to="/ascadlatam">ASCAD-LATAM</router-link>
        <router-link to="/formacion">Formación</router-link>
        <router-link to="/noticias">Recursos</router-link>
        <router-link to="/directorio">Países</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </nav>

      <router-link to="/solicitud" class="btn btn-gold hide-mobile">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 4-4 7-9 7s-8-3-8-7c0-4 4-7 8-7s9 3 9 7z"/></svg>
        Iniciar solicitud
      </router-link>

      <button
        ref="hamburgerRef"
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Menú de navegación"
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
      <router-link to="/" @click="closeMenu" tabindex="0">Inicio</router-link>
      <router-link to="/certificaciones" @click="closeMenu" tabindex="0">Certificaciones</router-link>
      <router-link to="/flact" @click="closeMenu" tabindex="0">FLACT</router-link>
      <router-link to="/ascadlatam" @click="closeMenu" tabindex="0">ASCAD-LATAM</router-link>
      <router-link to="/formacion" @click="closeMenu" tabindex="0">Formación</router-link>
      <router-link to="/noticias" @click="closeMenu" tabindex="0">Recursos</router-link>
      <router-link to="/directorio" @click="closeMenu" tabindex="0">Países</router-link>
      <router-link to="/contacto" @click="closeMenu" tabindex="0">Contacto</router-link>
      <router-link to="/solicitud" @click="closeMenu" class="mobile-cta" tabindex="0">Iniciar solicitud →</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import logoAscad from '/images/optimized/LOGO_ASCAD10.webp'

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

watch(menuOpen, async (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) {
    await nextTick()
    const firstLink = document.querySelector('#mobile-menu a')
    firstLink?.focus()
  }
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
.brand-flact { color: var(--white); }
.brand-sep { color: rgba(255,255,255,0.5); margin: 0 2px; }
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
  gap: 4px;
}
.desktop-nav a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: .875rem;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  padding: 10px 16px;
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

@media (max-width: 900px) {
  .desktop-nav { display: none; }
  .hamburger { display: flex; }
}
</style>