import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../ui/Button";
import { ButtonThemes } from "../types";

const meta: Meta = {
  title: "shared/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.CLEAR,
  },
};

export const Round: Story = {
  args: {
    children: "Text",
    theme: ButtonThemes.ROUND,
  },
};
