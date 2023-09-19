import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { ExcludeSmall } from "../ui/exclude/ExcludeSmall";

const meta: Meta = {
  title: "shared/Icons",
  component: ExcludeSmall,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ExcludeSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExcludeSmallLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ExcludeSmallDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
