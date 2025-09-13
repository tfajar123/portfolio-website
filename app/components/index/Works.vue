<template>
  <section class="projects">
    <TitleSection v-if="showTitle" title="projects" link="/projects" />
    <div class="projects__container">
      <CardsProject
        v-for="(project, i) in showAllIndex ? projects : projects.slice(0, 3)"
        :key="i"
        v-bind="project"
      />
    </div>
    <TitleSection v-if="showAllIndex" title="backend" />
    <div v-if="showAllIndex" class="projects__container">
      <CardsProject
        v-for="(project, i) in backendProjects"
        :key="i"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  showTitle: { type: Boolean, default: true },
  showAllIndex: { type: Boolean, default: false },
});
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
  {
    title: 'Positivus Landing Page',
    tags: 'Vue JS',
    description: 'Implementation of Positivus Landing Page Figma Design',
    image: '/assets/img/Projects4.png',
  },
  {
    title: 'Restaurant Management System',
    tags: 'Vue JS, .NET Framework, SQL Server',
    description: 'Food Ordering System',
    image: '/assets/img/Projects5.png',
  },
];

const backendProjects = [
  {
    title: 'SQLC Gin',
    tags: 'Go, PostgreSQL',
    description: 'Build GO REST API with Gin, SQLC and PostgreSQL',
  },
  {
    title: 'Anime Streaming API',
    tags: 'Go, PostgreSQL',
    description: 'API for Anime Streaming Platform',
  },
  {
    title: 'Mangofusion API',
    tags: '.NET Framework 9, SQL Server',
    description: 'API for Restaurant Management System',
  },
  {
    title: 'Event API',
    tags: 'Laravel, MySQL',
    description: 'Event Management System',
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
  background-color: var(--span-color);
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
