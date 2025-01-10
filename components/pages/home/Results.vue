<script setup lang="ts">


</script>

<template>
  <section class="bg-light container mx-auto">
    <h1 class="text-6xl font-bold mb-8 text-red">Risultati Ricerca</h1>
    <!--pb-load url="templates/search-results.html"></pb-load-->
    <pb-load url="api/search" expand="expand" emit="search" >
      <span class="text-2xl">Ricerca in corso...</span>
    </pb-load>
    <pb-paginate per-page="10" range="5" subscribe="search" emit="search"></pb-paginate>

  </section>
</template>

<style lang="scss">
app-toolbar {
  display: none;
}

.document-info {
  font-size: 1.5rem;
}
.documents {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: auto outside;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 2rem;
}
.tei-teiHeader3 .tei-title1 {
  font-weight: bold;
  color: var(--red);
 }



paper-card  {
  padding: 2rem;
  max-height: 50vh;
  margin: 10px 0;
  width: 100%;

  .breadcrumbs {
    color: grey;
    font-weight: 500;
    cursor: pointer;
  }

  header  {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 2rem;
  }

  .matches {
    font-size: 1.5rem;

    .hi {
      font-weight: bold;
      color: var(--red);
    }
  }
}

pb-paginate {
  background: white;
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}

.count, .breadcrumbs {
  font-size: 1.5rem;

  font-weight: bold;
}



</style>