import { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "./index";
import { PasswordInputProps } from "./interfaces";

export default {
  title: "Input/Password Input",
  component: PasswordInput,
  args: {},
} as Meta<PasswordInputProps>;

type Story = StoryObj<PasswordInputProps>;

export const Default: Story = {
  args: {
    label: "Teste",
  },
};
