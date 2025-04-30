<template>
  <section class="bg-light container mx-auto px-4 my-24 min-h-[50vh] text-justify">
    <h1 class="text-3xl font-bold mb-8 text-red">{{ $t('collaborators') }}</h1>

    <div
      v-for="person in collaborators"
      :key="person.name"
      class="my-6 text-base text-gray-700 text-justify"
    >
      <strong>
        {{ person.name }}
      </strong><br />
      <span v-html="$t(person.descriptionKey)" class="block text-justify" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Collaborator {
  name: string;
  descriptionKey: string;
}

const collaborators: Collaborator[] = [
{ name: 'Daniela Colomo', descriptionKey: 'danielaColomoDescription' },
  { name: 'Francesco Lupi', descriptionKey: 'francescoLupiDescription' },
  { name: 'Francesco Mambrini', descriptionKey: 'francescoMambriniDescription' },
];
</script>
