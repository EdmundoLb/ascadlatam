<template>
  <NavBar />
  <main id="main-content" role="main" tabindex="-1">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterBar />
  <Toast />
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
import Toast from '@/components/Toast.vue'
</script>

<style>
#main-content {
  padding-top: var(--nav-height);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-height));
}
</style>