<template>
  <div class="wrapper">
    <IndexHero />
    <IndexQuote />
    <IndexWorks />
    <IndexSkills />
    <IndexAbout />
    <IndexContact />
  </div>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Home page',
    },
  ],
});
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 0 10rem;
}

@media screen and (max-width: 1500px) {
  .wrapper {
    padding: 0 5rem 0 5rem;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding: 5rem 2rem 0 2rem;
  }
}
</style>
