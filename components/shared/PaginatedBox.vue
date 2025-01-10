<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  totalItems: Number,
  itemsPerPage: Number,
  modelValue: Number,
});

const emit = defineEmits(['update:modelValue']);
const totalPages = computed(() => Math.ceil(props.totalItems! / props.itemsPerPage!));
const changePage = (page: number) => {
  emit('update:modelValue', page);
};
</script>


<template>
  <div v-if="totalPages > 1" class="flex justify-center space-x-2 mt-4">
    <button
        v-for="page in totalPages"
        :key="page"
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300"
        @click="changePage(page)"
        :class="{ 'bg-red text-red': modelValue === page }"
    >
      {{ page }}
    </button>
  </div>
</template>

