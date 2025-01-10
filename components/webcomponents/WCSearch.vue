<script setup lang="ts">

import {useAppStore} from "~/store/app";
import {useSaveLastSearchedValue} from "~/composables/useLocalStorage";
import {ref} from "vue";


const resetButton = ref(null);
const searchButton = ref(null);
const localValue = ref('');
const appStore = useAppStore();



const handleSearch = () => {
  appStore.toggleShowResults();
}


window.addEventListener('pb-load', function (event) {
  console.log('Evento transcription ricevuto:', event, event.detail.params);
  useSaveLastSearchedValue((event as any).detail.params);
  resetButton.value?.click();
});
</script>

<template>
  <div class="container mx-auto  relative mb-20 ">
    <pb-progress></pb-progress>

    <pb-search
        :value="localValue"
        subscribe="saveResults"
        emit="saveResults"
        name="search-input"
        place-holder="Cerca"
        id="search-form">
      <!-- <div class="targets">
       <paper-checkbox name="tei-target" value="tei-text">
          Filtra per Sezioni
        </paper-checkbox>
        <paper-checkbox name="tei-target" value="tei-head">
          Filtra per Headings
        </paper-checkbox>
      </div>-->
      <div class="grid grid-cols-2 gap-2 mt-5">
        <paper-button
            ref="searchButton"
            @click.prevent="handleSearch"
            slot="searchButton"
            class="pe-0 py-3 bg-red text-lg uppercase text-white hover:bg-red-600 w-full">
          Cerca
        </paper-button>
        <paper-button
            ref="resetButton"
            slot="resetButton"
            class="pe-0 py-3 bg-red text-lg uppercase text-white hover:bg-red-600 w-full"
        >
          Reset
        </paper-button>
      </div>
    </pb-search>
  </div>
</template>
<style  lang="scss">

</style>