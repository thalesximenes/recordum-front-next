import { Meta, StoryObj } from "@storybook/react";

import Btn from "./index";
import { BtnListProps } from "./interfaces";

export default {
  title: "Button/BtnList",
  component: Btn,
  args: {},
} as Meta<BtnListProps>;

type Story = StoryObj<BtnListProps>;

export const Default: Story = {
  args: {
    buttons: [
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
      { children: "Teste" },
    ],
  },
};
