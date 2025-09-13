<template>
  <section class="about">
    <TitleSection v-if="showTitle" title="about-me" />
    <div class="about__container">
      <div class="about__content">
        <p>Hello, I'm Taufik Fajar!</p>
        <p>
          I'm a fullstack developer based in Bandung, Indonesia. I can develope
          responsive website from scratch and raise them into modern
          user-friendly web experiences. I can also build a robust backend for
          your needs, with many languages such as PHP, Go, Javascript, etc.
        </p>
        <p>
          My passion lies in crafting elegant solutions that are both functional
          and delightful to use. I'm constantly honing my skills to stay ahead
          in the ever-evolving tech landscape. For me, coding is more than just
          a job; it's a creative outlet where I can build meaningful experiences
          for users.
        </p>
        <NuxtLink v-if="showButton" to="/about"
          >Read More <Icon name="mdi:arrow-right"
        /></NuxtLink>
      </div>
      <div class="about__img">
        <img src="~/assets/img/hero2.png" alt="about" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  showTitle: { type: Boolean, default: true },
  showButton: { type: Boolean, default: true },
});
</script>

<style scoped>
.about__container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.about__content {
  padding-top: 3rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--secondary-color);
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 10rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--span-color);
  font-size: 1rem;
}

a:hover {
  background-color: var(--span-color);
  color: var(--primary-color);
}

span {
  color: var(--secondary-color);
}

.about__content p {
  font-size: 1.2rem;
}

.about__img {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__img img {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid var(--span-color);
}

@media screen and (max-width: 1500px) {
  .about__content p {
    font-size: 1rem;
  }

  a {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 1100px) {
  .about__content p {
    font-size: 0.8rem;
  }

  a {
    font-size: 0.8rem;
  }

  .about__img img {
    width: 100%;
    max-width: 300px;
  }
}

@media screen and (max-width: 768px) {
  .about__container {
    flex-direction: column;
  }

  .about__content {
    width: 100%;
  }
  .about__content p {
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
    width: 10rem;
  }

  .about__img {
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .about__img img {
    width: 80%;
    max-width: 250px;
  }
}
</style>
