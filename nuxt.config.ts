// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      CLOUDINARY_API_KEY: process.env.NUXT_PUBLIC_CLOUDINARY_API_KEY,
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: "Recipes",
    },
  },
  css: ["~/assets/styles/reset.scss"],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Onest: {
        wght: [400, 500, 600],
      },
    },
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/denisveleaev/image/upload/",
    },
  },
});
