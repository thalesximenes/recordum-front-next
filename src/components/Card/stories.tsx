import { Meta, StoryObj } from "@storybook/react";
import { Row, RowItem } from "../Row";

import Btn from "../Btn";
import Card from "./index";
import { CardProps } from "./interfaces";

export default {
  title: "Layout/Card",
  component: Card,
  args: {},
} as Meta<CardProps>;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: "Teste",
    children: (
      <>
        <Row>
          <Btn template="primary">Teste</Btn>
          <Btn template="secondary">Teste</Btn>
          <Btn template="primary">Teste</Btn>
        </Row>
        <Row>
          <Btn>Teste</Btn>
        </Row>
      </>
    ),
  },
};
