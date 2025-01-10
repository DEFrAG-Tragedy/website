<script setup lang="ts">
import Logo from "~/components/shared/Logo.vue";
import BrowseFiles from "~/components/pages/home/BrowseFiles.vue";
import LastAuthors from "~/components/pages/home/LastSearched.vue";
</script>

<template>
  <div class="bg-gray-800   flex items-center">
    <div class="container  mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
      <!-- Image Section -->
      <div class="flex justify-center md:justify-start bg-red p-8 logo-container">
        <Logo class="w-auto" custom-class="w-[25rem] h-[15rem]" />
      </div>

      <!-- Text Section -->
      <div class="text-white col-span-2 text-left space-y-6 ">
        <h1 class="text-3xl md:text-5xl  leading-tight text-white">
          Digital Edition  of Fragmentary Ancient Greek Tragedy
        </h1>
        <div class="flex gap-8">
          <LastAuthors />
          <BrowseFiles />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Aggiunta opzionale per un'animazione quando si passa sopra i pulsanti */
button {
  transition: background-color 0.3s;
}
.logo-container {
  width: 300px;
  height: 300px;
  clip-path: path('M 0 0 H 150 A 150 150 0 1 1 150 300 H 0 Z');
  /* Il valore `clip-path` qui crea una forma che assomiglia a una "D". */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
