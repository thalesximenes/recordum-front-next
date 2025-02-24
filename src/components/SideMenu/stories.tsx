import { Meta, StoryObj } from "@storybook/react";

import React from "react";
import SideMenu from "./index";
import { SideMenuProps } from "./interfaces";

export default {
<<<<<<< HEAD
  title: "Layout/Side Menu2",
=======
  title: "Layout/Side Menu",
>>>>>>> 597cc64c325b22b137b2e2fc59b5c92d63ac4820
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
