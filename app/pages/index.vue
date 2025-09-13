<template>
  <div>
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

<style scoped></style>
