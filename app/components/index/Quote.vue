<template>
  <section class="quote">
    <div class="quote__container">
      <div class="quote__text">
        <img src="~/assets/img/quotes.png" alt="quote" class="quote-1" />
        <h1>Code is like humor. When you have to explain it, it's bad.</h1>
        <img src="~/assets/img/quotes.png" alt="quote" class="quote-2" />
      </div>
      <div class="author">
        <p>- Cory House</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.quote {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
}

.quote__container {
  display: inline-block;
  text-align: end;
  color: var(--primary-color);
}

.quote__text {
  margin-top: 10rem;
  position: relative;
  border: solid 1px var(--secondary-color);
  padding: 2rem 3rem;
}

.quote-1 {
  position: absolute;
  top: -13%;
  left: 2%;
}

.quote-2 {
  position: absolute;
  bottom: -13%;
  right: 2%;
}

.quote__text h1 {
  font-size: 2rem;
}

.author {
  width: fit-content;
  border: solid 1px var(--secondary-color);
  padding: 1rem;
  float: right;
}

.author p {
  font-size: 2rem;
}

@media screen and (max-width: 1500px) {
  .quote__container {
    padding: 0 5rem 0 5rem;
  }
}

@media screen and (max-width: 1100px) {
  .quote__text h1 {
    font-size: 1.5rem;
  }

  .author p {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .quote__container {
    padding: 0 2rem 0 2rem;
  }

  .quote__text {
    margin-top: 5rem;
    padding: 1rem 1.5rem;
  }

  .quote__text h1 {
    font-size: 1rem;
  }

  .author p {
    font-size: 1rem;
  }

  .quote-1 {
    transform: scale(0.7);
    top: -17%;
  }

  .quote-2 {
    transform: scale(0.7);
    bottom: -17%;
  }
}
</style>
