<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useAppStore} from "~/store/app";
import { useRouter } from 'vue-router';
import Logo from "~/components/shared/Logo.vue";
import {links} from "~/shared/constants/sections";


const appStore = useAppStore();
const router = useRouter();

const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.getElementById('hs-offcanvas-menu');
  const buttonToggleSidebar = document.getElementById('buttonToggleSidebar');

  if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      buttonToggleSidebar &&
      !buttonToggleSidebar.contains(event.target as Node)
  ) {
    appStore.closeSidebar(); // Chiudi la sidebar
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  router.beforeEach((to, from, next) => {
    appStore.closeSidebar();
    next();
  });
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside); // Rimuovi l'event listener quando il componente si smonta
});

const handleLinkClick = () => {
  appStore.showResults = false;
}

</script>
<template>
  <!-- Backdrop -->
  <div
      v-if="appStore.isSidebarOpened"
      id="sidebarBackdrop"
      class="hs-overlay-backdrop transition-opacity duration-300 fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900"
      style="z-index: 59;"
      @click="appStore.closeSidebar"
  ></div>

  <div
      id="hs-offcanvas-menu"
      class="
      fixed top-0 left-0 bottom-0 z-[60] w-[100%] md:w-[40%] bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto
      transition-transform duration-300 ease-in-out"
      :class="{
      'translate-x-0': appStore.isSidebarOpened,
      '-translate-x-full': !appStore.isSidebarOpened,
      }"
      role="dialog"
      tabindex="-1"
      aria-label="Sidebar"
  >
    <!-- Contenuto della sidebar -->
    <div class="px-9 cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-menu" aria-label="Toggle navigation" @click="appStore.closeSidebar">
      <font-awesome-icon icon="fa-solid fa-xmark" size="2x" />
    </div>

    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <div class="flex items-center flex-1 justify-center mb-10">
        <Logo />
      </div>

      <ul class="space-y-1.5">
        <li v-for="(link, index) in links" :key="index" class="flex items-center gap-x-3.5 py-2 px-4 text-lg rounded-lg uppercase justify-between">
          <NuxtLinkLocale @click="handleLinkClick" :to="link.to" class="flex items-center gap-x-3.5 text-black hover:bg-gray-100">
            <font-awesome-icon :icon="link.icon" />
            {{ $t(link.value) }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style scoped lang="scss">
.router-link-active {
  text-decoration: underline;
  text-decoration-thickness: 2px;

  &.submenu {
    color: var(--red)!important;
  }
}
</style>