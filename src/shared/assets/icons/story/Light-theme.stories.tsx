import type { Meta, StoryObj } from "@storybook/react";

import { LightTheme } from "../ui/light-theme/LightTheme";

const meta: Meta = {
  title: "shared/Icons",
  component: LightTheme,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LightTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightThemeIcon: Story = {
  args: {},
};
