<script setup lang="ts">

const showPaginate = ref(false);
const searchButton = ref();
const paperInput = document.getElementById('search');
if(paperInput) {
  paperInput.remove();
}

/*
 <pb-select label="Cerca" name="tei-target" value="tei-text" data-template="pages:parse-params">
              <paper-item value="tei-text"></paper-item>
              <paper-item value="tei-head"></paper-item>
            </pb-select>

 */
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    searchButton.value.click();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <section class="bg-light container mx-auto px-4 sm:px-0 min-h-[60vh] mt-8">

    <div class="grid sm:grid-cols-3 gap-8">
      <!-- Sidebar: Filtri -->
      <div class="grid-cols-1 bg-white p-6 shadow-md rounded-md mb-6 h-full max-h-[500px] ">
        <h2 class="text-2xl font-bold mb-6"> {{ $t('filters') }}</h2>

        <!-- Sezione di Ricerca -->
        <div class="mb-4 h-full flex flex-col justify-between">
          <pb-search
              :place-holder="$t('performSearch')"
              class="h-full"
              id="search-form"
              disableAutocomplete="true"
              subscribe="search"
              :submit-on-load="true"
          >

              <div class="relative my-8 flex justify-center items-center">
                <!--<span class="basis-1/4 ">Cerca In</span>-->
                <select name="field" class=" py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  <option value="text">{{ $t('fullTextSearch') }} </option>
                  <option value="head">{{ $t('title') }}</option>
                  <option value="author">{{ $t('author') }}</option>
                  <option value="person">{{ $t('person') }}</option>
                  <option value="placeName">{{ $t('place') }}</option>
                </select>
              </div>


            <iron-icon slot="prefix"></iron-icon >

            <paper-button
                slot="searchButton"
                ref="searchButton"
                @click="showPaginate = true"
                class="pe-0 mt-12 py-3 bg-red text-lg uppercase text-white hover:bg-red-600 w-full">
              {{ $t('find') }}
            </paper-button>
          </pb-search>

        </div>
      </div>

      <!-- Main Content: Documenti -->
      <div class="grid-cols-1 sm:col-span-2 bg-white p-6 shadow-md rounded-md">
        <div class="flex flex-col justify-between h-full">

          <div>
            <h2 class="text-2xl font-bold mb-6">{{ $t('documents') }}</h2>

            <pb-load  v-if="showPaginate" url="api/search" subscribe="search" silent="true" ></pb-load>
            <span class="text-lg font-semibold" v-else>
              {{ $t('noSearches') }}
            </span>

          </div>
          <pb-paginate
              found-label=""
              v-if="showPaginate"
              id="paginate" per-page="10" range="5" subscribe="search" emit="search"/>

        </div>
      </div>
    </div>

  </section>
</template>
<style lang="scss">


div > h5.tei-title1 {
  display: none;
}
</style>