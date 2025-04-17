<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {useAppStore} from "~/store/app";
import { useRoute } from 'vue-router';

const appStore = useAppStore();


const handleLinkClick = () => {
  appStore.showResults = false;
}


const route = useRoute();
const isSpecialRoute = computed(() => {
  const routesToHighlight = ['/contatti', '/comitato-scientifico', '/gruppo-di-ricerca'];
  return routesToHighlight.includes(route.path);
});
</script>

<template>
  <div class="hidden md:flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 ">
    <NuxtLinkLocale @click="handleLinkClick" to="/progetto" class="flex items-center gap-x-3.5 text-white ">
      <font-awesome-icon icon="fas fa-diagram-project" />
      {{ $t('project') }}
    </NuxtLinkLocale>
    <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
      <button
          id="hs-navbar-example-dropdown"
          type="button"
          :class="[
                'hs-dropdown-toggle flex items-center w-full  font-medium',
                isSpecialRoute ? 'text-white' : 'text-white'
              ]"
           aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
        <font-awesome-icon icon="fas fa-users" class="mr-3" />
        {{ $t('who') }}
        <svg class="hs-dropdown-open:-rotate-180 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>

      <div class="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
        <NuxtLinkLocale @click="handleLinkClick" to="/gruppo-di-ricerca" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black submenu">
          {{ $t('research') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale @click="handleLinkClick" to="/comitato-scientifico" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black submenu">
          {{ $t('committee') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale @click="handleLinkClick" to="/collaboratori" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black submenu">
          {{ $t('collaborators') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale @click="handleLinkClick" to="/team-sviluppo" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black submenu">
          {{ $t('developmentTeam') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale @click="handleLinkClick" to="/contatti" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black submenu">
          {{ $t('contacts') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-link-active {
  color: white!important;
  text-decoration: underline;
  text-decoration-thickness: 2px;

  &.submenu {
    color: var(--red)!important;
  }
}
</style>
