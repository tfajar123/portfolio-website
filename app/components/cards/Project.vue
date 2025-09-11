<template>
  <div class="card__container">
    <div class="card__img">
      <img :src="image" alt="asdasd" />
    </div>
    <div class="card__tags">{{ tags }}</div>
    <div class="card__content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="button">
        <NuxtLink to="/works">See more</NuxtLink>
        <a href="github.com/tfajar123" target="_blank">Github</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  tags: String,
  description: String,
  image: String,
});
</script>

<style scoped>
.card__container {
  width: 30rem;
  height: auto;
  border: solid 1px var(--gray-color);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card__container:hover {
  border: 1px solid var(--purple-color);
}

.card__img {
  width: 100%;
  height: 15rem;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__tags {
  border-top: 1px solid var(--gray-color);
  border-bottom: 1px solid var(--gray-color);
  padding: 0.5rem;
  color: var(--gray-color);
}
.card__content {
  padding: 0.5rem 1rem;
}

.card__content h1 {
  color: var(--white-color);
  font-size: 1.5rem;
}

.card__content p {
  color: var(--gray-color);
  font-size: 1rem;
  padding: 1rem 0;
}

.button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

.button a {
  color: var(--white-color);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--white-color);
  transition: all 0.3s ease-in-out;
}

.button a:hover {
  background-color: var(--purple-color);
  border: 1px solid var(--purple-color);
}
</style>
