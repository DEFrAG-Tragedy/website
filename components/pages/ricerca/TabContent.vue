<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  search: {
    type: String,
    required: false,
  },
});


</script>
<template>
  <div class="container mx-auto p-8">
    <!-- Titolo della sezione -->
    <h2 class="text-gray-700 text-lg font-bold uppercase tracking-wider">
      {{ title }}
    </h2>
    <!-- Linea separatrice -->
    <hr class="border-t border-gray-400 my-4">

    <!-- Slot per contenuti personalizzati -->
    <div class="">
      <slot />
    </div>
  </div>
</template>

