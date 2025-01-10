<template>
  <div class="pb-10 bg-light border-gray-300 border-b-[1px]" :class="['sticky-search-bar', isScrolled ? 'visible' : 'hidden']">
    <SearchBar />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SearchBar from "~/components/shared/SearchBar.vue";

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sticky-search-bar {
  position: fixed;
  top: -100px;
  width: 100%;
  z-index: 50;
  transition: top 0.5s ease-in-out;
}

.sticky-search-bar.visible {
  top: 0;
}

.sticky-search-bar.hidden {
  top: -100px;
}
</style>
