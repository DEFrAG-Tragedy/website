<script setup>
useHead(() => ({
  status: 404,
  title: "Page not found",
}));
definePageMeta({
  layout: "error",
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-light-darker text-[#333333]">
    <div class="text-center">
      <!-- Icona 404 -->
      <div class="text-red text-9xl font-bold mb-4">404</div>
      <h1 class="text-4xl font-semibold text-[#333333] mb-4">Pagina non trovata</h1>
      <p class="text-lg text-[#333333] mb-6">
        Sembra che la pagina che stai cercando non esista.
      </p>
      <NuxtLink class="bg-red text-white py-3 px-4 rounded-full inline-block font-semibold hover:bg-red-dark" to="/"> Torna alla Home</NuxtLink>
    </div>
  </div>
</template>

<style scoped>


.hover\:bg-red-dark:hover {
  background-color: #b3363b;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
