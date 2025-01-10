<script setup lang="ts">
import Home from "~/components/pages/home/Home.vue";
import Results from "~/components/pages/home/Results.vue";
import {useAppStore} from "~/store/app";

const appStore = useAppStore();

</script>

<template>
  <Home v-if="!appStore.showResults"/>
  <Results v-else />
</template>