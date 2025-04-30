<script setup lang="ts">

</script>

<template>

    <div class="flex flex-col items-center justify-center text-center">
      <NuxtLinkLocale
      to="/documents?collection="
      class="bg-red text-white px-12 py-4 inline-block text-lg uppercase cursor-pointer rounded-full"
    >
      {{ $t('browse') }}
    </NuxtLinkLocale>
    </div>

</template>