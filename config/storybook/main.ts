import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "./src/app/styles/variables/sass.scss";',
          },
        },
      },
    });
  },
};
export default config;
