<template>
  <section class="main__container">
    <div class="left__side">
      <h1>
        Hello, I'm a <span>programmer</span> and
        <span>fullstack developer</span>
      </h1>
      <p>
        I'm a passionate developer and I'm always looking for new challenges
      </p>
      <button>Contact me</button>
    </div>
    <div class="right__side">
      <div class="image__hero">
        <img src="~/assets/img/hero.png" alt="yahaha" class="hero" />
        <img src="~/assets/img/dots.png" alt="dots" class="dots" />
        <img src="~/assets/img/dots.png" alt="shapes" class="shapes" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.main__container {
  display: flex;
  align-items: center;
  width: 100%;
}

.left__side {
  width: 50%;
}

.left__side h1 {
  font-size: 3rem;
  font-weight: 600;
  color: var(--primary-color);
}

.left__side p {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin: 2rem 0;
}

button {
  background-color: var(--bg-color);
  color: var(--primary-color);
  padding: 0.5rem 2rem;
  border: solid 1px var(--span-color);
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.left__side button:hover {
  background-color: var(--span-color);
  border: solid 1px var(--span-color);
}

.right__side {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image__hero {
  position: relative;
  display: inline-block;
}

.image__hero img {
  display: block;
  max-width: 100%;
  height: auto;
}

.image__hero .hero {
  filter: grayscale();
}

.right__side .dots {
  position: absolute;
  bottom: 0;
  right: -10%;
}

.right__side .shapes {
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: -1;
}

@media screen and (max-width: 1100px) {
  .left__side h1 {
    font-size: 2.5rem;
  }

  .left__side p {
    font-size: 1rem;
    margin: 1.5rem 0;
  }

  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  .image__hero img {
    transform: scale(0.8);
  }

  .right__side .dots {
    transform: scale(0.8);
    right: 0;
    bottom: 10%;
  }

  .right__side .shapes {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 768px) {
  .main__container {
    flex-direction: column;
  }

  .left__side {
    width: 100%;
  }

  .right__side {
    width: 100%;
  }
}
</style>
