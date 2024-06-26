// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "nuxt-mail",
    "@vueuse/nuxt",
    "nuxt-gtag",
  ],
  runtimeConfig: {
    GMAIL_USERNAME: process.env.GMAIL_USERNAME,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  },
  css: ["~/assets/css/main.css"],
  mail: {
    message: {
      to: "danielagzba@gmail.com",
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSKEY,
      },
    },
  },
  gtag: {
    id: "G-06DHNR8LFF",
  },
});
