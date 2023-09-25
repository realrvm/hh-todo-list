import type { Meta, StoryObj } from "@storybook/react";

import { Login } from "../ui/login/Login";

const meta: Meta = {
  title: "shared/Icons",
  component: Login,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginIcon: Story = {
  args: {},
};
