<template>
  <div>
    <div class="title__page">
      <h1><span>/</span>contacts</h1>
      <p>Contact me</p>
      <IndexContact />

      <TitleSection title="all-media" />
      <div class="media__logo">
        <div class="media__item">
          <a href="https://github.com/tfajar123" target="_blank">
            <Icon name="simple-icons:github" /> Github
          </a>
        </div>
        <div class="media__item">
          <a href="https://www.instagram.com/tfk_drn/" target="_blank">
            <Icon name="simple-icons:instagram" /> Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contacts',
});
</script>

<style scoped>
.media__logo {
  padding-top: 3rem;
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  color: var(--primary-color);
}
</style>
