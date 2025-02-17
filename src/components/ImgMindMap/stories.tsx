import { Meta, StoryObj } from "@storybook/react";

import { ImageProps } from "next/image";
import Img from ".";
import genetica from "../../../public/images/genetica.png";

export default {
  title: "Image/Img Mental Map",
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
        texto: "Teste Info",
      },
      {
        x: 87,
        y: 281,
        texto:
          "Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info Teste Info",
      },
      {
        x: 319,
        y: 188,
        texto: "Teste Info",
      },
      {
        x: 472,
        y: 38,
        texto: "Teste Info",
      },
    ],
  },
} as Meta<ImageProps>;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
