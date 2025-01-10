<script setup>
const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;

//http://localhost:8080/exist/apps/DEFrAG/

</script>

<template>
  <pb-page endpoint="https://editor.defragtragedy.eu/exist/apps/DEFrAG/" api-version="1.0.0" url-path="query">    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </pb-page>
</template>
<script setup lang="ts">
</script>