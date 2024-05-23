import { Meta, StoryObj } from "@storybook/react";

import { ImageProps } from "next/image";
import Img from ".";
import perfil from "../../../public/images/perfil.png";

export default {
  title: "Image/Img",
  component: Img,
  args: {
    src: perfil,
    alt: "Imagem",
    width: 200,
    height: 200,
  },
} as Meta<ImageProps>;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
