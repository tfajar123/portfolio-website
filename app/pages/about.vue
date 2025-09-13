<template>
  <div>
    <div class="title__page">
      <h1><span>/</span>About</h1>
      <p>Who Am I ?</p>
    </div>
    <IndexAbout :show-title="false" :show-button="false" />
    <IndexSkills />
  </div>
</template>

<script setup>
useHead({
  title: 'About',
});
</script>
