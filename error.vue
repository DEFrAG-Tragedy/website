<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-light-darker text-[#333333]">
    <div class="text-center">
      <div class="text-red text-9xl font-bold mb-4">{{ error.statusCode }}</div>

      <p class="text-lg text-[#333333] mb-6">
        Sembra che la pagina che stai cercando non esista oppure che si sia verificato un problema.
      </p>
      <NuxtLink class="bg-red text-white py-3 px-4 rounded-full inline-block font-semibold hover:bg-red-dark" to="/"> Torna alla Home</NuxtLink>
    </div>
  </div>

</template>
