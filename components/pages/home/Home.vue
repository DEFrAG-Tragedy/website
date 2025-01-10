<script setup lang="ts">
import LastAuthors from "~/components/pages/home/LastSearched.vue";
// import LastUpdates from "~/components/pages/home/LastUpdates.vue";
import BrowseFiles from "~/components/pages/home/BrowseFiles.vue";
import WCSearch from "~/components/webcomponents/WCSearch.vue";
import Logo from "~/components/shared/Logo.vue";
import Hero from "~/components/pages/home/Hero.vue";
</script>

<template>
  <Hero />

  <section class="bg-light container mx-auto max-w-screen-xl p-12">
    <div class="flex flex-col items-center flex-1 justify-center mb-10">
       <h1 class="text-3xl mb-10 text-red">DEFrAG-Tragedy</h1>

      <p class="text-base text-gray-700" style="text-align: justify;">
        <b>DEFrAG-Tragedy</b>,  {{ $t('homeFirstPart') }}
        <i> {{ $t('homeTestimony') }}</i>{{ $t('homeSecondPart') }}
        {{ $t('homeThirdPart') }}
      </p>
     </div>
    <!-- Testo descrittivo arricchito -->
  </section>
</template>
