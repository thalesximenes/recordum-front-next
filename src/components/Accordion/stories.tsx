import { Meta, StoryObj } from "@storybook/react";
import { Row, RowItem } from "../Row";

import Accordion from "./index";
import { AccordionProps } from "./interfaces";
import Card from "../Card/index";
import React from "react";

export default {
  title: "Layout/Accordion",
  component: Accordion,
  args: {
    title: "Título teste",
    children: "Ver mais!",
  },
} as Meta<AccordionProps>;

type Story = StoryObj<AccordionProps>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const VersusCard: Story = {
  args: {
    title: "Accordion",
  },
  render: (args) => (
    <Row grow align="flex-start">
      <RowItem>
        <Accordion {...args} />
      </RowItem>
      <RowItem>
        <Card title="Card">
          <div>Ver mais!</div>
        </Card>
      </RowItem>
    </Row>
  ),
};
