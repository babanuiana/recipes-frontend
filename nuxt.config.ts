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

  eslint: {
    lintOnStart: false,
  },

  modules: [
    "@nuxtjs/eslint-module",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/storybook",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/test-utils/module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [{ code: "en" }, { code: "ru" }],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },
  },

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

  compatibilityDate: "2024-07-14",
});
