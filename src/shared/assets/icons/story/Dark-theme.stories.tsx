import type { Meta, StoryObj } from "@storybook/react";

import { DarkTheme } from "../ui/dark-theme/DarkTheme";

const meta: Meta = {
  title: "shared/Icons",
  component: DarkTheme,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DarkTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkThemeIcon: Story = {
  args: {},
};
