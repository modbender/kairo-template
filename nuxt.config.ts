// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["aos/dist/aos.css", "@/assets/css/main.css"],

  site: {
    url: "https://kairo.netlify.app/",
    name: "Kairo Template",
    description: "Welcome to my awesome site!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },

  devtools: { enabled: true }, // Enabled only for dev automatically

  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "@nuxtjs/seo"],

  tailwindcss: {
    // Options
  },
});
