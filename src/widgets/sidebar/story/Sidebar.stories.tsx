import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../ui/Sidebar";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const SidebarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
