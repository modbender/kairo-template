const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://127.0.0.1:3000";

const siteLogoIcons = [
  {
    src: "/images/logo/nuxt-48.png",
    sizes: "48x48",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-72.png",
    sizes: "72x72",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-96.png",
    sizes: "96x96",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-144.png",
    sizes: "144x144",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-168.png",
    sizes: "168x168",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-256.png",
    sizes: "256x256",
    type: "image/png",
  },
  {
    src: "/images/logo/nuxt-512.png",
    sizes: "512x512",
    type: "image/png",
  },
];

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  css: ["@/assets/scss/main.scss"],

  site: {
    url: siteUrl,
    name: process.env.NUXT_PUBLIC_SITE_NAME, // Will be displayed on home page
    description: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
  },

  runtimeConfig: {
    public: {
      siteIcons: siteLogoIcons,

      socialLinks: {
        x: process.env.NUXT_PUBLIC_SOCIAL_X_URL,
        youtube: process.env.NUXT_PUBLIC_SOCIAL_YOUTUBE_URL,
        github: process.env.NUXT_PUBLIC_SOCIAL_GITHUB_URL,
        facebook: process.env.NUXT_PUBLIC_SOCIAL_FACEBOOK_URL,
        dribbble: process.env.NUXT_PUBLIC_SOCIAL_DRIBBBLE_URL,
      },

      gtagId: process.env.NUXT_PUBLIC_GOOGLE_TAG_ID,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
    publicAssets: [
      {
        baseURL: "images",
        dir: "public/images",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      },
    ],
  },

  // Required for Netlify deployment
  routeRules: {
    "/**": { prerender: true },
  },

  devtools: { enabled: true }, // Enabled only for dev automatically

  modules: [
    // Page Transition Animation - https://auto-animate.formkit.com/
    "@formkit/auto-animate/nuxt",

    // Tailwind CSS - https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // doc https://google-fonts.nuxtjs.org/
    "@nuxtjs/google-fonts",

    // Nuxt SVG Icon - https://nuxt.com/modules/icon | https://icones.js.org/
    "nuxt-icon",

    // All in one SEO - https://nuxtseo.com/
    "@nuxtjs/seo",

    // Best Native Image optimization - https://image.nuxt.com/
    "@nuxt/image",
  ],

  image: {
    // doc: https://image.nuxtjs.org/
    // You could try format: ["avif", "webp"] for more compression
    format: ["webp"],
    domains: [siteUrl, "https://cdn.pixabay.com"],
    quality: 80,
  },

  tailwindcss: {
    // Options
  },

  googleFonts: {
    // If you face issues with font loading speed or CLS uncomment display option
    // display: "optional",
    families: {
      Roboto: [100, 300, 400, 500, 600, 700, 900],
    },
  },

  linkChecker: {
    skipInspections: ["missing-hash"],
  },
});
