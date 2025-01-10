<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '~~/store/app';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ActiveFilter } from "~/shared/interfaces/search";
import FilterButton from "~/components/shared/FilterButton.vue";
import FilterDescription from "~/components/shared/FilterDescription.vue";

const appStore = useAppStore();
const activeFilter = ref<ActiveFilter | null>(null);
const filtersVisible = ref(false);


// Funzione per impostare o rimuovere il filtro attivo
const setFilter = (filter: ActiveFilter) => {
  if (activeFilter.value === filter) {
    activeFilter.value = null;
  } else {
    activeFilter.value = filter;
  }
  appStore.setFilter(activeFilter.value!);
};
const toggleFiltersVisibility = () => {
  filtersVisible.value = !filtersVisible.value;
};
</script>

<template>
    <div class="container mx-auto mt-10 relative mb-20 md:mb-0">
      <div class="hs-accordion-group absolute w-full" data-hs-accordion-always-open>
        <div class="hs-accordion active">
          <div class="grid grid-cols-1">
            <!-- Barra di ricerca -->
            <div class="relative md:col-span-2 text-lg">
              <input
                  v-model="appStore.query"
                  @keyup.enter="appStore.goToSearch()"
                  type="text"
                  class="peer py-3 pe-0 ps-10 w-full bg-transparent border border-black border-t-transparent border-r-transparent border-l-transparent focus:border-red text-lg focus-visible:border-red"
                  placeholder="..."
              >
              <div
                  @click="appStore.goToSearch()"
                  class="absolute inset-y-0 start-1 flex items-center cursor-pointer ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <font-awesome-icon
                    :icon="['fas', 'search']"
                    class="text-black cursor-pointer"
                />
              </div>
            </div>
            <!-- Bottoni ricerca -->
            <div class="grid grid-cols-3 md:grid-cols-3 gap-2 mt-5">
              <!-- Ricerca  -->
              <button
                  class="pe-0 py-3 bg-red text-lg uppercase text-white hover:bg-red-600 w-full"
                  aria-expanded="false"
                  aria-controls="collapse-filters"
                  @click="appStore.goToSearch()"
              >
                Ricerca
              </button>
              <!-- FILTRA Ricerca  -->
              <button
                  class="col-span-2 pe-0 py-3 bg-red text-lg uppercase text-white hover:bg-red-600  hs-accordion-active:text-red-600 "

                  @click="toggleFiltersVisibility"
              >
                Filtra Ricerca
                <font-awesome-icon
                    v-if="filtersVisible"
                    :icon="['fas', 'caret-up']"
                    class="ml-5 cursor-pointer text-white"
                />
                <font-awesome-icon
                    v-if="!filtersVisible"
                    :icon="['fas', 'caret-down']"
                    class="ml-5 cursor-pointer text-white"
                />
              </button>
            </div>
          </div>

          <!-- CONTENT ACCORDION -->
          <div
              v-if="filtersVisible"
              id="collapse-filters"
              class="hs-accordion-content  w-full overflow-hidden transition-[height] duration-300 bg-white text-lg border border-black border-t-transparent"
              role="region"
              aria-labelledby="collapse-filters-heading">

            <div class="p-10">
              <p class="text-gray-700 mb-4">
                Filtra la ricerca secondo i seguenti criteri. Utilizzare i filtri ti permetterà di restringere i risultati e ottenere informazioni più pertinenti in modo rapido e preciso. Seleziona il filtro più adatto per le tue necessità di ricerca.
              </p>

              <!-- Sezione Filtri -->
              <div class="flex justify-center space-x-4">
                <!-- Bottone Filtro Autore -->
                <FilterButton
                    :filter="ActiveFilter.AUTHOR"
                    :activeFilter="activeFilter"
                    label="Autore"
                    @set-filter="setFilter"
                />

                <!-- Bottone Filtro Opera -->
                <FilterButton
                    :filter="ActiveFilter.WORK"
                    :activeFilter="activeFilter"
                    label="Opera"
                    @set-filter="setFilter"
                />

                <!-- Bottone Filtro Curatore -->
                <FilterButton
                    :filter="ActiveFilter.CURATOR"
                    :activeFilter="activeFilter"
                    label="Curatore"
                    @set-filter="setFilter"
                />
              </div>

              <!-- Descrizione del filtro selezionato -->
              <FilterDescription :activeFilter="activeFilter" />
            </div>
          </div>

        </div>
      </div>
  </div>
</template>
