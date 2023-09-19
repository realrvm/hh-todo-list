import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { SampleMedium } from "../ui/sample/SampleMedium";

const meta: Meta = {
  title: "shared/Icons",
  component: SampleMedium,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SampleMedium>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleMediumLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SampleMediumDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
