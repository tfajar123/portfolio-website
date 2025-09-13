<template>
  <div>
    <HeaderComponents />

    <slot />
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
</style>
