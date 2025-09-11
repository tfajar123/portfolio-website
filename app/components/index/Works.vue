<template>
  <section class="projects">
    <div class="projects__title">
      <div class="title-line">
        <h1><span>#</span>projects</h1>
        <div class="line"></div>
      </div>
      <NuxtLink to="/works">See more <Icon name="mdi:arrow-right" /></NuxtLink>
    </div>
    <div class="projects__container">
      <CardsProject
        v-for="(project, i) in projects"
        :key="i"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Fake News Detection',
    tags: 'Python, Machine Learning',
    description: 'Machine Learning Naive Bayes',
    image: '/assets/img/Projects1.jpg',
  },
  {
    title: 'Hospital Management System',
    tags: 'Laravel, MySQL',
    description: 'Hospital Management System',
    image: '/assets/img/Projects2.jpg',
  },
  {
    title: 'Guitar & Tabs Store',
    tags: 'Laravel, MySQL',
    description: 'E-commerce Guitar & Tabs Store',
    image: '/assets/img/Projects3.jpg',
  },
];
</script>

<style scoped>
.projects {
  width: 100%;
  padding-top: 5rem;
}

.projects__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-line {
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 1rem;
}
.line {
  width: 100%;
  height: 2px;
  background-color: var(--purple-color);
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

.projects__container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0 4rem 0;
}
</style>
