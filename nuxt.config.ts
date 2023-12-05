// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ],
  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 600],
      },
    },
  },
});
