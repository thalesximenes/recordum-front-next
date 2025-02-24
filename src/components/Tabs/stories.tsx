import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import Tabs from "./index";
import { TabsProps } from "./interfaces";

export default {
  title: "Layout/Tabs",
  component: Tabs,
  args: {
    placeholder: "Digite algo!",
    items: [
      {
        label: "Teste",
        content: <div>Tab Conteúdo</div>,
      },
      {
        label: "Teste",
        content: "Tab Conteúdo 2",
      },
    ],
  },
} as Meta<TabsProps>;

type Story = StoryObj<TabsProps>;

export const Default: Story = {};

export const OneItemDisabled: Story = {
  args: {
    items: [
      {
        label: "Teste",
        content: <div>Tab Conteúdo</div>,
      },
      {
        label: "Teste",
        content: "Tab Conteúdo 2",
        disabled: true,
      },
    ],
  },
};
