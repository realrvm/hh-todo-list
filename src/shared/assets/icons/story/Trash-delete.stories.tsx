import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { TrashDelete } from "../ui/trash-delete/TrashDelete";

const meta: Meta = {
  title: "shared/Icons",
  component: TrashDelete,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TrashDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrashDeleteLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const TrashDeleteDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
