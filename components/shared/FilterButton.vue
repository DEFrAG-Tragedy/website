<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineProps } from "vue";
import {ActiveFilter} from "~/shared/interfaces/search";

const props = defineProps<{
  filter?: ActiveFilter
  activeFilter?: ActiveFilter | null
  label?: string
}>()

// Emit event to change filter
const emit = defineEmits(["set-filter"]);

// Method to toggle the filter
const toggleFilter = () => {
  if (props.activeFilter === props.filter) {
    emit("set-filter", null);
  } else {
    emit("set-filter", props.filter);
  }
};
</script>

<template>
  <button
      @click="toggleFilter"
      :class="[
      'px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2',
      activeFilter === filter ? 'bg-red text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    ]"
  >
    <span v-if="activeFilter !== filter">{{ label }}</span>
    <span v-else>{{ label }} <font-awesome-icon icon="fa-solid fa-xmark" class="ml-2" /></span>
  </button>
</template>
