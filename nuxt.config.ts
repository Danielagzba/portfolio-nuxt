// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {},
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/fonts', 'shadcn-nuxt'],
  css: ['~/assets/css/main.css'],
})
