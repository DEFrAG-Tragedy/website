<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Navbar from "~/components/layout/Navbar.vue";
import SideBar from "~/components/layout/SideBar.vue";
import XmlContent from "~/components/pages/xml/XmlContent.vue";
</script>

<template>
  <Navbar />
  <!--<StickyNavbar />-->
  <SideBar />

  <main class="min-h-[30vh]">
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
/* Custom styling can go here if needed */
</style>
