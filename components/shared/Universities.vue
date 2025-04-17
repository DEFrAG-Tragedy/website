<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-5 gap-4 ">
    <a href="https://www.uniba.it"><img src="/assets/images/logo_uniba.png" alt="Logo Uniba" class="object-contain w-full rounded-md" :class="logoHeight"></a>
    <a href="https://www.unitn.it"><img src="/assets/images/logo_unitr.png" alt="Logo Università Trento" class="object-contain w-full rounded-md" :class="logoHeight"></a>
    <a href="https://www.units.it"><img src="/assets/images/logo_units.png" alt="Logo Università Trieste" class="object-contain w-full rounded-md" :class="logoHeight"></a>
    <a href="https://www.uniupo.it"><img src="/assets/images/logo_upo.png" alt="Logo Università del Piemonte Orientale" class="object-contain w-full rounded-md" :class="logoHeight"></a>
    <a href="https://www.durham.ac.uk"><img src="/assets/images/logo_durham.png" alt="Logo Durham University" class="object-contain w-full rounded-md" :class="logoHeight"></a>
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
