<script setup>
import { useRoute } from 'vue-router';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const route = useRoute();
const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;



const editorUrl = computed(() => {

  const documentPath = route.query.document;
  if (route.path === '/xml-render' && documentPath ) {
    return `https://editor.defragtragedy.eu/exist/apps/DEFrAG${decodeURIComponent(documentPath.toString())}?view=div&odd=annotations`;
  }
  return 'https://editor.defragtragedy.eu/exist/apps/DEFrAG/index.html';
});
</script>

<template>
  <a target="_blank"
     :href="editorUrl"
     class="border bg-white border-white text-red rounded-full py-2 px-4 flex items-center cursor-pointer space-x-2">
    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
    <span>  {{ $t('goToEditor') }}</span>
  </a>
</template>