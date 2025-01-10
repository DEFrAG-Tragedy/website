<script setup lang="ts">
import { ActiveFilter } from "~/shared/interfaces/search";

// Props for the active filter
const props = defineProps({
  activeFilter: {
    type: ActiveFilter,
    default: null,
  },
});
</script>

<template>
  <div class="text-gray-600 mt-4">
    <p v-if="activeFilter === 'AUTHOR'">
      Stai filtrando i risultati per <strong>Autore</strong>. Clicca di nuovo per rimuovere il filtro.
    </p>
    <p v-if="activeFilter === 'WORK'">
      Stai filtrando i risultati per <strong>Opera</strong>. Clicca di nuovo per rimuovere il filtro.
    </p>
    <p v-if="activeFilter === 'CURATOR'">
      Stai filtrando i risultati per <strong>Curatore</strong>. Clicca di nuovo per rimuovere il filtro.
    </p>

    <!-- Messaggio di default quando nessun filtro è selezionato -->
    <p v-if="!activeFilter">
      Non è stato impostato nessun filtro. Seleziona un filtro per restringere i risultati.
    </p>
  </div>
</template>
