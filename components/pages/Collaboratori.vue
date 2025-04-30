<template>
  <section class="bg-light container mx-auto px-4 my-24 min-h-[50vh] text-justify">
    <h1 class="text-3xl font-bold mb-8 text-red">{{ $t('collaborators') }}</h1>

    <div
      v-for="person in collaborators"
      :key="person.name"
      class="my-6 text-base text-gray-700"
    >
      <strong>
        {{ person.name }}
      </strong><br />
      <span v-html="$t(person.descriptionKey)" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Collaborator {
  name: string;
  descriptionKey: string;
}

const collaborators: Collaborator[] = [
  { name: 'Francesco Lupi', descriptionKey: 'francescoLupiDescription' },
  { name: 'Francesco Mambrini', descriptionKey: 'francescoMambriniDescription' },
  { name: 'Daniela Colomo', descriptionKey: 'danielaColomoDescription' },
];
</script>
