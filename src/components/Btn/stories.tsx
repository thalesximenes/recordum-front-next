import { Meta, StoryObj } from "@storybook/react";

import Btn from "./index";
import { BtnProps } from "./interfaces";
import { Row } from "../Row";

export default {
  title: "Button/Btn",
  component: Btn,
  args: { children: "Teste" },
} as Meta<BtnProps>;

type Story = StoryObj<BtnProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
    template: "primary",
  },
};

export const Templates: Story = {
  render: (args) => (
    <Row>
      <Btn {...args}>Default</Btn>
      <Btn template="primary">Primary</Btn>
      <Btn template="secondary">Secondary</Btn>
    </Row>
  ),
};
