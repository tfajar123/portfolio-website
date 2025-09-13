<template>
  <div>
    <div class="title__page">
      <h1><span>/</span>Projects</h1>
      <p>List of my projects</p>
    </div>
    <TitleSection title="fullstack & frontend" />
    <IndexWorks :show-title="false" :show-all-index="true" />
  </div>
</template>

<script setup>
useHead({
  title: 'Projects',
});
</script>

<style scoped>
.title__page {
  padding-top: 2rem;
  padding-bottom: 5rem;
}
</style>
