import { Meta, StoryObj } from "@storybook/react";

import TextHover from "./index";
import { TextProps } from "./interfaces";

export default {
  title: "Layout/TextHover",
  component: TextHover,
  args: {},
} as Meta<TextProps>;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: "Teste",
  },
};
