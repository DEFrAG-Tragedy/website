<script setup lang="ts">
defineProps<{
  isSearchPanelOpen: boolean
}>()

const emit = defineEmits(['update:visible']);
function toggleVisibility() {
  emit('update:visible');
}

const searchDocument = () => {
  console.log('search')
}
</script>


<template>
  <div
      v-show="isSearchPanelOpen"
      @click="toggleVisibility"
      class="fixed inset-0 z-10 bg-primary-darker"
      style="opacity: 0.5"
      aria-hidden="true"
  ></div>

  <!-- Panel -->
  <transition-expand axis="x">
    <section
        v-show="isSearchPanelOpen"
        @keydown="toggleVisibility"
        class="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
    >
      <div class="absolute right-0 p-2 transform translate-x-full">
        <!-- Close button -->
        <button @click="toggleVisibility" class="p-2 text-white rounded-md focus:outline-none focus:ring">
          <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <h2 class="sr-only">Pannello di Ricerca</h2>
      <!-- Panel content -->
      <div class="flex flex-col h-screen">
        <!-- Panel header (Search input) -->
        <div
            @click.stop="searchDocument"
            class="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700"
        >
              <span class="absolute inset-y-0 inline-flex items-center px-4">
                <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
          <input
              @keydown.stop
              type="text"
              class="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
              placeholder="Ricerca..."
          />
        </div>

        <!-- Panel content (Search result) -->
        <div class="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
          <h3 class="py-2 text-sm font-semibold text-gray-600 dark:text-light">Crologia Ricerche</h3>
          <p>...</p>
        </div>
      </div>
    </section>
  </transition-expand>
</template>