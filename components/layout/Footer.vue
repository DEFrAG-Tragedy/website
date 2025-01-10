<script setup lang="ts">
import Universities from "~/components/shared/Universities.vue";

const route = useRoute();

const footerHeight = computed(() => {
  if( route.path != '/') {
    return {
      'min-height': '150px'
    }
  } else {
    return {
      'min-height': '300px'
    }
  }

});

console.log('route.path ', route.path)
const footerClass = computed(() => {
  return route.path === '/search' || route.name === 'documents' || route.path === '/en/search'
      ? 'bg-white py-12 border-t border-gray-200  mt-12'
      : 'bg-white py-12 border-t border-gray-200';
});


const logoHeight = computed(() => {
  return route.path != '/'
      ? 'h-14'
      : 'h-14';
});

</script>

<template>
  <footer :class="footerClass" :style="footerHeight">
    <div class="container mx-auto px-4 grid gap-4">

      <!-- Seconda colonna: Immagini e contenuti aggiuntivi -->
      <div class="col-span-2 flex flex-col items-center space-y-12">
        <Universities />

        <!-- Immagini nella seconda colonna -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/assets/images/prinn0.png" alt="Unione Europea" class="object-contain rounded-md" :class="logoHeight">
          <img src="/assets/images/prinn1.png" alt="Ministero università e ricerca" class="object-contain rounded-md" :class="logoHeight">
          <img src="/assets/images/prinn2.png" alt="Italia Domani" class="object-contain rounded-md" :class="logoHeight">
        </div>
      </div>
    </div>

    <!-- Copyright e Links -->
    <div class="mt-12 border-t border-gray-200 pt-4 text-xs text-center flex flex-col items-center gap-2">

      <p class=" text-gray-500 mt-2">
        {{ $t('thisSite') }} <a href="https://teipublisher.com" target="_blank" class="text-blue-600 hover:underline">TEI Publisher</a>,
        {{ $t('openSource') }} <br> {{ $t('contribute')}}
        <a href="https://teipublisher.com" target="_blank" class="text-blue-600 hover:underline">TEI Publisher</a> {{ $t('contribute_second_part') }} <a href="https://github.com/DEFrAG-Tragedy" target="_blank" class="text-blue-600 hover:underline">DEFRaG-Tragedy</a>.
      </p>
      <div class="flex items-center justify-center gap-3">
        <img src="/assets/images/licenza.jpg" alt="Licenza Creative Commons" class="object-contain h-5 rounded-md" :class="logoHeight">
        <p> {{ $t('license') }}</p>
      </div>
    </div>
  </footer>

</template>
