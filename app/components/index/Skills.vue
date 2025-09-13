<template>
  <section class="skills">
    <TitleSection title="skills" />

    <div class="skill__container">
      <div class="skill__item">
        <CardsSkills
          v-for="(skill, i) in skills"
          :key="i"
          v-bind="skill"
          :class="`skills${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    title: 'Languages',
    description: 'JavaScript PHP Go Python',
  },
  {
    title: 'Frameworks',
    description: 'Laravel Vue Nuxt React',
  },
  {
    title: 'Tools',
    description: 'Git Scalar Linux Figma',
  },
  {
    title: 'Databases',
    description: 'MySQL MariaDB PostgreSQL MongoDB SQLServer',
  },
  {
    title: 'Other',
    description: 'HTML CSS Bootstrap Tailwind',
  },
];
</script>

<style scoped>
.skill__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 0;
}
.skill__item {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 8px;
}

.skill__item > * {
  flex: 1 1 calc(20% - 8px);
}

@media screen and (max-width: 1100px) {
  .skill__container {
    flex-direction: column;
  }
  .skill__item {
    width: 50%;
    padding-top: 2rem;
  }
  img {
    width: 100%;
    max-width: 300px;
  }
}

@media screen and (max-width: 768px) {
  .skill__item {
    width: 100%;
  }
}
</style>
