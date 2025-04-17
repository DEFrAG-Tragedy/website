<template>
  <section class="bg-light container mx-auto px-4 my-24 min-h-[50vh] text-justify">
    <h1 class="text-3xl font-bold mb-8 text-red">{{ $t('developmentTeam') }}</h1>

    <div
      v-for="member in devTeam"
      :key="member.name"
      class="my-6 text-base text-gray-700"
    >
      <a
        :href="member.url"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {{ member.name }}
      </a><br />
      <span v-html="$t(member.descriptionKey)" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface DevMember {
  name: string;
  url: string;
  descriptionKey: string;
}

const devTeam: DevMember[] = [
  { 
    name: 'Lorenzo Bocchi', 
    url: 'https://www.linkedin.com/in/lorenzobocchi99/',
    descriptionKey: 'lorenzoBocchiDescription' 
  },
  {
    name: 'Francesco Antonio Sessa',
    url: 'https://www.linkedin.com/in/francescoasessa/',
    descriptionKey: 'francescoSessa',
  },
  {
    name: 'Giuseppe Speranza',
    url: 'https://www.linkedin.com/in/giuseppe-speranza/',
    descriptionKey: 'giuseppeSperanza',
  },
];
</script>
