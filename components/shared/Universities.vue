<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
    <img src="/assets/images/logo_uniba.png" alt="Logo Uniba" class="object-contain w-full rounded-md" :class="logoHeight">
    <img src="/assets/images/logo_unitr.png" alt="Logo Università Trento" class="object-contain w-full rounded-md" :class="logoHeight">
    <img src="/assets/images/logo_units.png" alt="Logo Università Trieste" class="object-contain w-full rounded-md" :class="logoHeight">
    <img src="/assets/images/logo_upo.png" alt="Logo Università del Piemonte Orientale" class="object-contain w-full rounded-md" :class="logoHeight">
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const logoHeight = computed(() => {
  return route.path != '/'
      ? 'h-14'
      : 'h-14';
});

</script>
