<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAppStore } from '~/store/app';
import { SectionsName } from "~/shared/constants/sections";
import TabContent from "~/components/pages/ricerca/TabContent.vue";
import { useAsyncData } from 'nuxt/app';

const route = useRoute();
const router = useRouter();
const searchedValue = route.params.value;
const appStore = useAppStore();
const activeTab = ref(SectionsName.OPERE);


const { data: opere, status, error } = await useLazyAsyncData('opere', () =>
    appStore.search(searchedValue.toString())
);
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};


const goToOperaPage = (operaTitolo: string) => {
  router.push(`/opera/${encodeURIComponent(operaTitolo)}`);
};
</script>

<template>
  <!-- Loader -->
  <div v-if="status === 'pending'" class="flex justify-center items-center">
    <svg class="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  </div>

  <!-- Risultati -->
  <div v-else-if="opere && opere.length > 0">
    <!-- Titolo e Risultato di Ricerca -->
    <div class="container mx-auto my-8 p-8">
      <h1 class="text-4xl font-bold mb-2 text-gray-700">RISULTATI TROVATI PER</h1>
      <h2 class="text-6xl font-serif font-bold text-gray-800">{{ searchedValue }}</h2>
    </div>

    <div class="container mx-auto">
      <!-- Scroll orizzontale per le tabs -->
      <div class="flex overflow-x-auto whitespace-nowrap space-x-2 px-4 hide-scrollbar">
        <button
            v-for="tab in SectionsName"
            :key="tab"
            @click="setActiveTab(tab)"
            :class="[
            'px-6 py-2 font-semibold text-gray-800 rounded-t-md transition-all duration-300',
            'bg-white border-t border-l border-r border-black' // se ci sarfanno piu tab da rimuovere
         //   activeTab !== tab ?  'bg-light border-t border-l border-r border-black' : 'bg-white'
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Contenuto delle tabs -->
    <div class="bg-white min-h-[80vh]">
      <TabContent v-if="activeTab === SectionsName.OPERE" title="Risultato Ricerca">
        <!-- Autori e opere -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(result, index) in opere" :key="index" class="mb-8">
            <!-- Nome dell'autore -->
            <h1 class="text-4xl font-bold text-gray-900 my-6">
              {{ result.autore }}
            </h1>
            <!-- Lista delle Opere -->
            <div class="space-y-2">
              <div
                  v-for="(opera, idx) in result.frammenti"
                  :key="idx"
                  class="text-blue-600 text-xl font-medium cursor-pointer hover:underline"
                  @click="goToOperaPage(opera.titolo)"
              >
                {{ opera.titolo }}
              </div>
            </div>
          </div>
        </div>
      </TabContent>
    </div>
  </div>

  <!-- Errore -->
  <div v-else-if="error" class="text-red-500">
    <p>{{ error.message }}</p>
  </div>

  <!-- Nessun risultato trovato -->
  <div v-else>
    <p>Nessun risultato trovato.</p>
  </div>
</template>
