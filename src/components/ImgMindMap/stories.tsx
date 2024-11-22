import { Meta, StoryObj } from "@storybook/react";

import { ImageProps } from "next/image";
import Img from ".";
import genetica from "../../../public/images/genetica.png";

export default {
  title: "Image/ImgMentalMap",
  component: Img,
  args: {
    src: genetica,
    alt: "Imagem",
    width: 750,
    height: 375,
    mindMaps: [
      {
        x: 141,
        y: 70,
        info: "Teste Info",
      },
      {
        x: 87,
        y: 281,
        info: "Teste Info",
      },
      {
        x: 319,
        y: 188,
        info: "Teste Info",
      },
      {
        x: 472,
        y: 38,
        info: "Teste Info",
      },
    ],
  },
} as Meta<ImageProps>;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
