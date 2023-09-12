import type { Preview } from "@storybook/react";

import { ReduxDecorator } from "../../src/shared/configs/storybook/ReduxDecorator";
import { StyleDecorator } from "../../src/shared/configs/storybook/StyleDecorator";
import { ThemeProviderDecorator } from "../../src/shared/configs/storybook/ThemeProviderDecorator";
import { RouterDecorator } from "../../src/shared/configs/storybook/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    ReduxDecorator,
    StyleDecorator,
    ThemeProviderDecorator,
    RouterDecorator,
  ],
};

export default preview;
