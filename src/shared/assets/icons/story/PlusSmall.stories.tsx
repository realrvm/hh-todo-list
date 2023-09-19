import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { PlusSmall } from "../ui/plus/PlusSmall";

const meta: Meta = {
  title: "shared/Icons",
  component: PlusSmall,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PlusSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlusSmallLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PlusSmallDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
