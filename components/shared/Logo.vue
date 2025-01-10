<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <a href="/" class="flex items-center">
    <!-- Brand -->
    <img src="/assets/images/defrag_logo.png" alt="Logo Defrag" :class="['object-contain', 'w-36', customClass]">
  </a>
</template>