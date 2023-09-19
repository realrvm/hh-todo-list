import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { Cross } from "../ui/cross/Cross";

const meta: Meta = {
  title: "shared/Icons",
  component: Cross,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Cross>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CrossLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const CrossDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
