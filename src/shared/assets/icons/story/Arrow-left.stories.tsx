import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { ArrowLeft } from "../ui/arrow-left/ArrowLeft";

const meta: Meta = {
  title: "shared/Icons",
  component: ArrowLeft,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ArrowLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowLeftLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ArrowLeftDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
