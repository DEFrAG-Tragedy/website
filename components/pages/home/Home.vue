<script setup lang="ts">
import Hero from "~/components/pages/home/Hero.vue";
</script>

<template>
  <div>
    <Hero />

  <section class="bg-light container mx-auto max-w-screen-xl p-12">
    <div class="flex flex-col items-center flex-1 justify-center mb-10">
      <p class="text-base text-gray-700 text-justify" v-html="$t('homeParagraph')" />
     </div>
  </section>
  </div>
</template>
