import type { Meta, StoryObj } from "@storybook/react";

import TaskDetails from "../ui/TaskDetails";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "pages/TaskDetails",
  component: TaskDetails,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TaskDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaskDetailsLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const TaskDetailsDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
