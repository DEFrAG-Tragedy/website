<script setup lang="ts">
import { ref, computed } from "vue";
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <div class="relative inline-block">
    <!-- Dropdown Button -->
    <button
        @click="toggleDropdown"
        class="border bg-white border-white text-red rounded-full py-2 px-4 flex items-center cursor-pointer space-x-2"
    >
       <span
           class="fi fis mr-2"
           :class="{
              'fi-gb': locale === 'en',
              'fi-it': locale === 'it',
            }"
       ></span>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="isDropdownOpen ? 'rotate-180' : 'rotate-0'"
          class="h-5 w-5 transform transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <ul
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg"
    >
      <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="hover:bg-gray-100"
      >
        <NuxtLink
            :to="switchLocalePath(locale.code)"
            class="flex items-center px-4 py-2 text-sm text-gray-700"
            @click.prevent.stop="() => { setLocale(locale.code); isDropdownOpen = false; }"
        >
          <span
              class="fi fis mr-2"
              :class="{
              'fi-gb': locale.code === 'en',
              'fi-it': locale.code === 'it',
            }"
          ></span>
          <p>
            {{ locale.code === 'en' ? 'English' : 'Italiano' }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "node_modules/flag-icons/css/flag-icons.min.css";
</style>
