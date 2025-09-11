<template>
  <div class="nav__container">
    <div class="nav__logo">
      <NuxtLink to="/">TFM</NuxtLink>
    </div>
    <Transition name="fade">
      <div
        v-if="isOpen || notMobile"
        class="nav__link"
        :class="{ active: isOpen }"
      >
        <div class="nav__item">
          <NuxtLink to="/" class="active"><span>#</span>home</NuxtLink>
        </div>
        <div class="nav__item">
          <NuxtLink to="/works"><span>#</span>works</NuxtLink>
        </div>
        <div class="nav__item">
          <NuxtLink to="/about"><span>#</span>about-me</NuxtLink>
        </div>
        <div class="nav__item">
          <NuxtLink to="/contacts"><span>#</span>contact-me</NuxtLink>
        </div>
      </div>
    </Transition>
    <div class="burger__menu" @click="handleMenu">
      <Icon v-if="!isOpen" name="mdi:menu" />
      <Icon v-else name="mdi:close" />
    </div>
  </div>
</template>

<script setup>
const notMobile = ref(window.innerWidth > 500);
const isOpen = ref(false);

function handleMenu() {
  if (window.innerWidth <= 500) {
    isOpen.value = !isOpen.value;
  }
}

function handleResize() {
  notMobile.value = window.innerWidth > 500;

  if (notMobile.value) {
    isOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeMount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.nav__container {
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0 10rem;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav__logo {
  font-size: 1.5rem;
}
.nav__logo a {
  color: white;
}

.nav__link {
  display: flex;
  gap: 3rem;
}

.nav__item .active {
  color: white;
}
span {
  color: var(--purple-color);
}

.burger__menu {
  display: none;
}

/* Animasi fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@media screen and (max-width: 1100px) {
  .nav__container {
    padding: 0 5rem;
  }
  .nav__link {
    gap: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .nav__container {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 500px) {
  .nav__link {
    display: none;
  }

  .nav__link.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 0;
    background-color: var(--bg-color);
    width: 100%;
    height: 100vh;
    padding: 1rem;
  }
  .nav__item {
    font-size: 3rem;
    padding: 1rem;
  }
  .burger__menu {
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }
  .burger__menu span {
    color: white;
  }
}
</style>
