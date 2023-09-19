import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../ui/Navbar";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const NavbarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
