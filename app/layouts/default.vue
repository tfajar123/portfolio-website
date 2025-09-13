<template>
  <div>
    <HeaderComponents />

    <div class="wrapper">
      <slot />
    </div>
    <FooterComponents />
  </div>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #ffffff;
  --secondary-color: #abb2bf;
  --span-color: #c778dd;
  --bg-color: #282c33;
}

.light-theme {
  --primary-color: #010d26;
  --secondary-color: #658da6;
  --span-color: #59d986;
  --bg-color: #f3ebf3;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: var(--secondary-color);
}
span {
  color: var(--span-color);
}

body {
  font-family: 'Fira Code', monospace;
  background-color: var(--bg-color);
  color: var(--primary-color);
  transition: background 0.3s, color 0.3s;
}

.wrapper {
  width: 100%;
  min-height: 100vh;
  padding: 0 10rem;
}

@media screen and (max-width: 1500px) {
  .wrapper {
    padding: 0 5rem 0 5rem;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding: 5rem 2rem 0 2rem;
  }
}
</style>
