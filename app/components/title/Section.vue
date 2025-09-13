<template>
  <div class="title">
    <div class="title-line">
      <h1><span>#</span>{{ title }}</h1>
      <div class="line"></div>
    </div>
    <NuxtLink v-if="link !== ''" :to="link"
      >See more <Icon name="mdi:arrow-right"
    /></NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  link: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-line {
  display: grid;
  grid-template-columns: 2fr 5fr;
  align-items: center;
  gap: 1rem;
}
.line {
  width: 100%;
  height: 2px;
  background-color: var(--span-color);
}

a {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1350px) {
  .title-line {
    grid-template-columns: 1fr 3fr;
  }
}

@media screen and (max-width: 1000px) {
  .title-line {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 550px) {
  .title-line {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .line {
    margin-left: 3rem;
  }
}
</style>
