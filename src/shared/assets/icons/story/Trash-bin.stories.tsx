import type { Meta, StoryObj } from "@storybook/react";


import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { TrashBin } from "../ui/trash-bin/TrashBin";

const meta: Meta = {
  title: "shared/Icons",
  component: TrashBin,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TrashBin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrashBinLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const TrashBinDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
