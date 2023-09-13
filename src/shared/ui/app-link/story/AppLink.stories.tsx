import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "../ui/AppLink";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkLight: Story = {
  args: {
    children: "AppLink",
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const LinkDark: Story = {
  args: {
    children: "AppLink",
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};
