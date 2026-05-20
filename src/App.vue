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
  <div v-if="isLoading" class="page-loader" aria-label="Cargando página">
    <div class="spinner"></div>
  </div>
  <Toast />
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
import Toast from '@/components/Toast.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)

router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})
</script>

<style>
#main-content {
  padding-top: var(--nav-height);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-height));
}

.page-loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
}

.spinner {
  width: 44px;
  height: 44px;
  border: 3px solid var(--line);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin .6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>