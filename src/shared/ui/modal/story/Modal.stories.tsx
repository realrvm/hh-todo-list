import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../ui/Modal";
import { ThemeDecorator } from "@/shared/configs/storybook/ThemeDecorator";
import { Themes } from "@/app/providers/theme-provider";

const meta: Meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.LIGHT)],
};

export const ModalDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};
