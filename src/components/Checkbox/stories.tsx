import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./index";
import { CheckboxGroupProps } from "./interfaces";

export default {
  title: "Input/Checkbox",
  component: Checkbox,
  args: {},
} as Meta<CheckboxGroupProps>;

type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  args: {
    label: "Opções",
    items: [
      { value: "value1", label: "Opção 1" },
      { value: "value2", label: "Opção 2" },
    ],
  },
};

export const Error: Story = {
  args: {
    label: "Opções",
    items: [
      { value: "value1", label: "Opção 1" },
      { value: "value2", label: "Opção 2" },
    ],
    error: "Erro teste",
  },
};
