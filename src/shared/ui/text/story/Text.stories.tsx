import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { Text } from "../ui/Text";
import { TextThemes } from "../types";

const meta: Meta = {
  title: "shared/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    children: "Lorem ipsum",
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    children: "Lorem ipsum",
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

export const SecondaryLight: Story = {
  args: {
    children: "Lorem ipsum",
    theme: TextThemes.SECONDARY,
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SecondaryDark: Story = {
  args: {
    children: "Lorem ipsum",
    theme: TextThemes.SECONDARY,
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};
