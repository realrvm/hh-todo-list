import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { ExcludeMedium } from "../ui/exclude/ExcludeMedium";

const meta: Meta = {
  title: "shared/Icons",
  component: ExcludeMedium,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ExcludeMedium>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExcludeMediumLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ExcludeMediumDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
