import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { PenMedium } from "../ui/pen/PenMedium";

const meta: Meta = {
  title: "shared/Icons",
  component: PenMedium,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PenMedium>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PenMediumLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PenMediumDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
