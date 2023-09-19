import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { PenSmall } from "../ui/pen/PenSmall";

const meta: Meta = {
  title: "shared/Icons",
  component: PenSmall,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PenSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PenSmallLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PenSmallDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
