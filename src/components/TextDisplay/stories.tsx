import { Meta, StoryObj } from "@storybook/react";

import TextDisplay from "./index";
import { TextProps } from "./interfaces";
import { theme } from "../themes";

export default {
  title: "Layout/TextDisplay",
  component: TextDisplay,
  args: {},
} as Meta<TextProps>;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    label: "Teste",
    text: "Teste",
    labelColor: theme?.colors?.purple?.[5],
    textColor: "black",
  },
};
