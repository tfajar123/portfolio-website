<template>
  <button @click="theme.toggleTheme()" class="theme-btn">
    <Icon name="mdi:theme-light-dark" />
  </button>
</template>

<script setup>
const theme = useThemeStore();
onMounted(() => {
  theme.initTheme();
});
</script>

<style scoped>
.theme-btn {
  padding-top: 0.2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}
@media screen and (max-width: 550px) {
  .theme-btn {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
  }
}
</style>
