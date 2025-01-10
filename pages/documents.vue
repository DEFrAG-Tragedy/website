<script setup lang="ts">

import {useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

const collectionPath = route.query.collection;
let collectionPathValue = ref(`api/collection/${collectionPath}`)

console.log("collectionPath ''''", collectionPath)

window.addEventListener('pb-results-received', function (event) {
  const { content } = event.detail;


  content.querySelectorAll('[data-collection]').forEach((link) => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();

      const collectionName = link.getAttribute('data-collection');
      const input = document.getElementById('hiddenCollection');
      input.value = collectionName;


     // router.push(`documents?collection=${collection.value}`);
      window.location.replace(`documents?collection=${collectionName}`);
    });
  });
})

</script>

<template>
  <section class="bg-light container mx-auto px-4  sm:px-0 min-h-[60vh] mt-8">
    <!-- Main Content: Documenti -->
    <div class="max-w-screen-lg mx-auto grid-cols-1 sm:col-span-2 bg-white p-12 shadow-md rounded-md">
      <div class="flex flex-col justify-between h-full">
        <pb-custom-form class="options">
          <input id="hiddenCollection" type="hidden" name="collection" value="" data-template="pages:parse-params"/>
        </pb-custom-form>

        <div>
          <div id="custom-toolbar"></div>

          <pb-load :url="collectionPathValue" auto="true" subscribe="search" expand=""  emit="search"/>
        </div>

      </div>
    </div>
  </section>
</template>
<style lang="scss">
.tree ul {
  list-style-type: none;
  padding-left: 50px;
  margin: 0;
  position: relative;
}

.tree li {
  position: relative;
  margin: 0;
  padding-left: 10px;
  line-height: 2;
  color: #007bff;
}
.tree li::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #ccc;
}

.tree li::after {
  content: '';
  position: absolute;
  left: -10px;
  top: calc(50% - 1px);
  width: 10px;
  height: 1px;
  background: #ccc;
}


.tree li:last-child::before {
  height: 50%;
}

.tree a {
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--red);
  font-weight: bold;
  transition: color 0.3s;
}

.tree ul ul a::after  {
  content: '→';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--red);
}
.tree a:hover {
  color: var(--red-darker);
}


</style>