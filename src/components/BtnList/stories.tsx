import { Meta, StoryObj } from "@storybook/react";

import BtnList from "./index";
import { BtnListProps } from "./interfaces";

export default {
  title: "Button/Btn List",
  component: BtnList,
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
