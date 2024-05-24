import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./index";
import { TextInputProps } from "./interfaces";

export default {
  title: "Input/TextInput",
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    label: "Teste",
  },
};
