import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { Input } from "../ui/Input";

const meta: Meta = {
  title: "shared/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const WithLabelDark: Story = {
  args: {
    label: "Label",
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};
