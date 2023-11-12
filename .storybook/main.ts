import type { StorybookConfig } from "@storybook/nextjs";
import StylexPlugin from "@stylexjs/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-swc",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.plugins = config.plugins || [];
    config.plugins.push(new StylexPlugin({
      filename: 'styles.css',
      // get webpack mode and set value for dev
      dev: config.mode === 'development',
      // Required for CSS variable support
      appendTo: 'head',
    }));

    return config;
  },
};
export default config;
