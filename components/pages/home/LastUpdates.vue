<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useReadLastSearchedValue } from '~/composables/useLocalStorage';
import PaginatedBox from "~/components/shared/PaginatedBox.vue";
import {parseDocumentName} from "~/utils/parsing";

const searches = ref([]);
const router = useRouter();

const currentPage = ref(1);
const itemsPerPage = ref(10);

onMounted(() => {
  searches.value = useReadLastSearchedValue(false);
});

// Calcola le ricerche paginati
const paginatedSearches = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return searches.value.slice(start, end);
});


const redirectToResult = (url: string) => {
  router.replace(url);
};
</script>

<template>
  <div class="min-h-[300px]">
    <!-- Titolo -->
    <div class="bg-red text-white px-4 py-2 inline-block mb-4 font-semibold text-sm uppercase">
      Ultimi documenti letti
    </div>


    <ul v-if="paginatedSearches.length" class="text-dark space-y-2 text-xl">
      <li
          class="cursor-pointer underline underline-offset-2"
          v-for="(search, index) in paginatedSearches"
          :key="index"
          @click="redirectToResult(search.url)"
      >
        <strong>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</strong> - {{ parseDocumentName(search.url!) }}
      </li>
    </ul>

    <p class="text-xl" v-else>
      Nessun documento consultato.
    </p>
  </div>
  <PaginatedBox
      :totalItems="searches.length"
      :itemsPerPage="itemsPerPage"
      v-model="currentPage"
  />
</template>
