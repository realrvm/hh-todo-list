import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { SampleSmall } from "../ui/sample/SampleSmall";

const meta: Meta = {
  title: "shared/Icons",
  component: SampleSmall,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SampleSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleSmallLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SampleSmallDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
