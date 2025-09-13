<template>
  <div class="card__container">
    <h1 class="card__title">{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<style scoped>
.card__container {
  width: 10rem;
  height: auto;
  border: 1px solid var(--secondary-color);
}

.card__title {
  color: var(--primary-color);
  border-bottom: 1px solid var(--secondary-color);
  padding: 0.5rem;
  font-size: 1.2rem;
}

p {
  padding: 0.5rem;
  color: var(--secondary-color);
}
</style>
