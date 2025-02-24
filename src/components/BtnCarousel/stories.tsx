import { Meta, StoryObj } from "@storybook/react";

import BtnCarousel from "./index";
import { BtnCarouselProps } from "./interfaces";

export default {
  title: "Button/Btn Carousel",
  component: BtnCarousel,
  args: {},
} as Meta<BtnCarouselProps>;

type Story = StoryObj<BtnCarouselProps>;

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
