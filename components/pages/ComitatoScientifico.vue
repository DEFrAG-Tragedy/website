<template>
  <section class="bg-light container mx-auto px-4 my-24 min-h-[50vh]">
    <h1 class="text-3xl font-bold mb-8 text-red">{{ $t('committee') }}</h1>

    <div
      v-for="member in committee"
      :key="member.name"
      class="my-6 text-base text-gray-700 text-justify"
    >
      <strong>{{ member.name }}</strong><br />
      <span v-html="$t(member.descriptionKey)" class="block text-justify"  />
    </div>
  </section>
</template>

<script setup lang="ts">
interface CommitteeMember {
  name: string;
  descriptionKey: string;
}

const committee: CommitteeMember[] = [
  { name: 'Claudio De Stefani', descriptionKey: 'claudioStefaniDescription' },
  { name: 'George Alexander Gazis', descriptionKey: 'georgeAlexanderGazisDescription' },
  { name: 'Giorgio Ieranò', descriptionKey: 'giorgioIeranoDescription' },
  { name: 'Olimpia Imperio', descriptionKey: 'olimpiaImperioDescription' },
  { name: 'Maria Napoli', descriptionKey: 'mariaNapoliDescription' },
];
</script>
