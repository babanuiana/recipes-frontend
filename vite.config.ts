// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dirs: ["./composables"],
      vueTemplate: true,
    }),
    Components({
      dirs: ["./components"],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      "~": ".",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/styles/_variables.scss" as *;',
      },
    },
  },
});
