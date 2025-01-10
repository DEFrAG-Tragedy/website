<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useAppStore} from "~/store/app";
import { useRouter } from 'vue-router';
import Logo from "~/components/shared/Logo.vue";


const appStore = useAppStore();
const router = useRouter();

const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.getElementById('hs-offcanvas-menu-comment');
  const buttonToggleSidebar = document.getElementById('buttonToggleSidebar');

  if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      buttonToggleSidebar &&
      !buttonToggleSidebar.contains(event.target as Node)
  ) {
    appStore.closeXmlContent();
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  router.beforeEach((to, from, next) => {
    appStore.closeXmlContent();
    next();
  });
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});

const props = defineProps<{
  ribbonTop?: string;
  title: string;
}>();

</script>
<template>
  <div class="ribbon" :style="{ top: ribbonTop }" @click="appStore.toggleComment()">
    <span>{{title}}</span>
  </div>

  <div
      v-if="appStore.isCommentOpened"
      id="sidebarBackdrop"
      class="hs-overlay-backdrop transition-opacity duration-300 fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900"
      style="z-index: 59;"
      @click="appStore.closeComment()"
  ></div>

  <div
      id="hs-offcanvas-menu-comment"
      class="
    fixed top-0 right-0 bottom-0 z-[60] w-[100%] md:w-[40%] bg-white border-l border-gray-200 pt-7 pb-10 overflow-y-auto
    transition-transform duration-300 ease-in-out"
      :class="{
          'translate-x-0': appStore.isCommentOpened,
          'translate-x-full': !appStore.isCommentOpened,
        }"
      role="dialog"
      tabindex="-1"
      aria-label="Sidebar"
  >
    <!-- Contenuto della sidebar -->
    <div class="px-9 cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-menu-comment" aria-label="Toggle navigation" @click="appStore.closeComment()">
      <font-awesome-icon icon="fa-solid fa-xmark" size="2x" />
    </div>

    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <div class="flex items-center flex-1 justify-center mb-10">
        <Logo />
      </div>

      <slot></slot>
    </nav>
  </div>
</template>

<style scoped>
.ribbon {
  width: 0;
  height: 400px; /* Aumenta l'altezza del ribbon */
  background-color: transparent;
  position: absolute;
  right: 6rem;
  zoom: 1;
  border: solid 30px var(--red); /* Aumenta la larghezza del border */
  border-bottom: solid 30px transparent; /* Aumenta il border-bottom proporzionalmente */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
  transform: translateX(0) rotate(90deg);
  top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    right: 8rem;
  }

  span {
    position: absolute;
    transform: rotate(-90deg);
    color: white;
    font-weight: bold;
    font-size: 2rem;
    white-space: nowrap;
  }
}



.ribbon:active {
  /*
  ---- Transform stretch: ----
  (Less pretty)

  transform: translate(0, 20px)
             scale(0.8, 1.4);


  ---- width/height adjust stretch: ----
  (More choppy)

  height: 180px;
  border-left: solid 10px #B13A22;
  border-right: solid 10px #B13A22;
  right: 25px;
  */

  border-color: #d00;
  border-bottom-color: transparent;
}
</style>