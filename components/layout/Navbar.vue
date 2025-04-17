<script setup lang="ts">
import { useAppStore } from "~/store/app";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import LinksNavbar from "~/components/layout/LinksNavbar.vue";
import GoToEditor from "~/components/shared/GoToEditor.vue";
import LangSwitcher from "~/components/shared/LangSwitcher.vue";

// Importiamo il logo in modo che Vite/Webpack gestisca correttamente l'asset
import defragLogo from "@/assets/images/defrag_logo.png";

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const isHomePage = ref(route.name === "index" || route.name === "search-page");
const isXmlRenderPage = ref(
  route.name === "xml-render" || route.name === "search" || route.name === "documents"
);

const { showResults } = storeToRefs(appStore);

watch(route, (newRoute) => {
  isHomePage.value = newRoute.name === "index" || newRoute.name === "search-page";
  isXmlRenderPage.value =
    newRoute.name === "xml-render" || newRoute.name === "search" || newRoute.name === "documents";
});

const goBack = () => {
  appStore.resetStore();
  //router.replace('/search');
  router.back();
};
</script>

<template>
  <header class="text-dark px-4 bg-red md:px-0 p-4 flex justify-center flex-col">
    <!-- Navbar -->
    <div class="container mx-auto flex items-center justify-between ">
      <div class="flex items-center space-x-4">
        <!-- Condizione per visualizzare la freccia indietro se si è sulla pagina xml-render -->
        <button
          v-if="isXmlRenderPage"
          @click="goBack"
          class="text-[#333333] focus:outline-none flex gap-2 items-center"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-white" />
          <span class="text-xl text-white">{{ $t("back") }}</span>
        </button>

        <!-- Mostra il pulsante "Naviga" se non siamo su xml-render -->
        <div v-else class="flex items-center">
          <button
            id="buttonToggleSidebar"
            class="text-[#333333] focus:outline-none flex gap-2 items-center md:hidden"
            @click="appStore.toggleSidebar"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-offcanvas-menu"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span class="text-xl text-white">{{ $t("navigate") }}</span>
          </button>
          <!-- Logo Defrag -->
          <a href="/" rel="noopener">
            <img
              :src="defragLogo"
              alt="Defrag logo"
              class="h-8 w-auto ml-4 hidden md:block"
            />
          </a>
        </div>
      </div>
      <!-- Right side -->
      <div class="flex items-center space-x-4">
        <LinksNavbar class="mr-4" />
        <GoToEditor />
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>
