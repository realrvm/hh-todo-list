import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";
import { Ellipse } from "../ui/ellipse/Ellipse";

const meta: Meta = {
  title: "shared/Icons",
  component: Ellipse,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Ellipse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EllipseLight: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const EllipseDark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};
