import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { PlusMedium } from "../ui/plus/PlusMedium";

const meta: Meta = {
  title: "shared/Icons",
  component: PlusMedium,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PlusMedium>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlusMediumLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PlusMediumDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
