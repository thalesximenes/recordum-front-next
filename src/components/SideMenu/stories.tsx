import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import SideMenu from "./index";
import { SideMenuProps } from "./interfaces";

export default {
  title: "Layout/Side Menu",
  component: SideMenu,
  args: {
    initialOpen: false, // Define o estado inicial para melhor visualização
    width: 200,
    collapsedWidth: 50,
    children: (
      <>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
        <div>Ver mais!</div>
      </>
    ),
  },
} as Meta<SideMenuProps>;

type Story = StoryObj<SideMenuProps>;

export const Default: Story = {};
