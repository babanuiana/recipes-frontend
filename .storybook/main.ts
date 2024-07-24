import { loadConfigFromFile } from "vite";

const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    const userConfig = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, userConfig);
  },

  docs: {},
};
