<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goToSearch = () => {
  router.push(`search`);
}

</script>


<template>

    <div class="flex flex-col items-center justify-center text-center">
      <div class="bg-red text-white px-12 py-4 inline-block  text-lg uppercase cursor-pointer  rounded-full  " @click="goToSearch">
        {{ $t('find') }}
      </div>
    </div>

</template>
