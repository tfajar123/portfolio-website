<template>
  <div>
    <HeaderComponents />

    <div class="main__container">
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
  --purple-color: #c778dd;
  --gray-color: #abb2bf;
  --bg-color: #282c33;
  --white-color: #ffffff;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: var(--gray-color);
}

body {
  font-family: 'Fira Code', monospace;
}
</style>
