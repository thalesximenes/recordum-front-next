import { Meta, StoryObj } from "@storybook/react";

import { ImageProps } from "next/image";
import Img from ".";
import logo_extenso from "../../../public/images/Logo_extenso.png";

export default {
  title: "Image/Img",
  component: Img,
  args: {
    src: logo_extenso,
    alt: "Imagem",
    width: 232,
    height: 35,
  },
} as Meta<ImageProps>;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
