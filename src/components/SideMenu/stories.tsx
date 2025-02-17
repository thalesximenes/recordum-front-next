import { Meta, StoryObj } from "@storybook/react";
import { Row, RowItem } from "../Row";

import SideMenu from "./index";
import { SideMenuProps } from "./interfaces";
import Card from "../Card/index";
import React from "react";

export default {
  title: "Layout/Side Menu",
  component: SideMenu,
  args: {
    title: "Título teste",
    children: "Ver mais!",
  },
} as Meta<SideMenuProps>;

type Story = StoryObj<SideMenuProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const VersusCard: Story = {
  args: {
    title: "SideMenu",
  },
  render: (args) => (
    <Row grow align="flex-start">
      <RowItem>
        <SideMenu {...args} />
      </RowItem>
      <RowItem>
        <Card title="Card">
          <div>Ver mais!</div>
        </Card>
      </RowItem>
    </Row>
  ),
};
