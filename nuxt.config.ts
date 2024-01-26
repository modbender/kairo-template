const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://127.0.0.1:3000";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  site: {
    url: siteUrl,
    name: process.env.NUXT_PUBLIC_SITE_NAME, // Will be displayed on home page
    description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
  },

  runtimeConfig: {
    gtagId: process.env.NUXT_PUBLIC_GOOGLE_TAG_ID,

    public: {
      socialLinks: {
        x: process.env.NUXT_PUBLIC_SOCIAL_X_URL,
        youtube: process.env.NUXT_PUBLIC_SOCIAL_YOUTUBE_URL,
        github: process.env.NUXT_PUBLIC_SOCIAL_GITHUB_URL,
        facebook: process.env.NUXT_PUBLIC_SOCIAL_FACEBOOK_URL,
        dribbble: process.env.NUXT_PUBLIC_SOCIAL_DRIBBBLE_URL,
      },
    },
  },

  devtools: { enabled: true }, // Enabled only for dev automatically

  modules: [
    // Tailwind CSS - https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // Nuxt SVG Icon - https://nuxt.com/modules/icon | https://icones.js.org/
    "nuxt-icon",

    // All in one SEO - https://nuxtseo.com/
    "@nuxtjs/seo",

    // Best Native Image optimization - https://image.nuxt.com/
    "@nuxt/image",
  ],

  image: {
    domains: [siteUrl, "cdn.pixabay.com"],
  },

  tailwindcss: {
    // Options
  },
});
