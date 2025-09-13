import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isLight: false,
  }),
  actions: {
    toggleTheme() {
      this.isLight = !this.isLight;
      if (this.isLight) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      }
    },
    initTheme() {
      if (localStorage.getItem('theme') === 'light') {
        this.isLight = true;
        document.body.classList.add('light-theme');
      }
    },
  },
});
