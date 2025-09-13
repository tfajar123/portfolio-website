// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  app: {
    head: {
      title: 'TFM',
      meta: [{ name: 'description', content: 'My Portfolio website' }],
    },
  },
});
