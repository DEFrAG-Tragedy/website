<script setup >

</script>

<template>
  <!-- Links -->
  <div class="container mx-auto mt-8 px-4 md:flex text-center">
      <div class="flex overflow-x-auto whitespace-nowrap space-x-5 hide-scrollbar">
        <NuxtLink class="text-dark hover:underline" to="/progetto/">
          {{ $t('project') }}
        </NuxtLink>

        <NuxtLink class="text-dark hover:underline" to="/gruppo-di-ricerca/">
          {{ $t('research') }}
        </NuxtLink>

        <NuxtLink class="text-dark hover:underline" to="/comitato-scientifico/">
          {{ $t('committee') }}
        </NuxtLink>

        <!-- <NuxtLink class="text-dark hover:underline" to="/faq">
          FAQ
        </NuxtLink> -->
      </div>
  </div>
</template>