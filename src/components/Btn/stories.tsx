import { Meta, StoryObj } from "@storybook/react";

import Btn from "./index";
import { BtnProps } from "./interface";

const storyObject = {
  title: "Button/Btn",
  component: Btn,
  args: {},
} as Meta<BtnProps>;

export default storyObject;

type Story = StoryObj<BtnProps>;

export const Default: Story = {};
