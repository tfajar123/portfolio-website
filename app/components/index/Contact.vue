<template>
  <section class="contact">
    <TitleSection title="contacts" />
    <div class="contact__container">
      <div class="contact__content">
        <p>
          If you have any questions or inquiries, don't hesitate to reach out to
          me.
        </p>
      </div>
      <div class="contact__info">
        <p>Message me here</p>
        <div class="contact__item">
          <a href="mailto:tfajar321321@gmail.com"
            ><Icon name="mdi:email" /> tfajar321321@gmail.com</a
          >
        </div>
        <div class="contact__item">
          <a href="https://linkedin.com/in/tfajar123" target="_blank"
            ><Icon name="simple-icons:linkedin" /> tfajar123
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact {
  width: 100%;
  height: auto;
  padding: 5rem 0;
}

.contact__container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
}

.contact__content {
  width: 100%;
  max-width: 1200px;
  color: var(--secondary-color);
}

.contact__info {
  width: 18rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-color);
  padding: 1rem 0.5rem;
  gap: 1rem;
}
.contact__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
}
span {
  color: var(--secondary-color);
  transform: scale(1.2);
}
</style>
