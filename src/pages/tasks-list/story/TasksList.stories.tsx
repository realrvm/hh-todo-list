import type { Meta, StoryObj } from "@storybook/react";

import TasksList from "../ui/TasksList";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "pages/TasksList",
  component: TasksList,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TasksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TasksListLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const TasksListDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
