<template>
  <section class="bg-light container mx-auto px-4 my-24 min-h-[50vh] text-justify">
    <h1 class="text-3xl font-bold mb-8 text-red">{{ $t('researchGroup') }}</h1>

    <div
      v-for="person in people"
      :key="person.name"
      class="my-6 text-base text-gray-700 text-justify"
    >
      <strong>{{ person.name }}</strong><br />
      <span v-html="$t(person.descriptionKey)" class="block text-justify" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Person {
  name: string;
  descriptionKey: string;
}

const people: Person[] = [
  { name: 'Sabina Castellaneta', descriptionKey: 'sabinaCastellanetaDescription' },
  { name: 'Andrea Giannotti', descriptionKey: 'andreaGiannottiDescription' },
  { name: 'Nadia Rosso', descriptionKey: 'nadiaRossoDescription' },
  { name: 'Lorenza Savignago', descriptionKey: 'lorenzaSavignagoDescription' },
];
</script>