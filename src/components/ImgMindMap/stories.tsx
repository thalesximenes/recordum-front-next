import { Meta, StoryObj } from "@storybook/react";

import { ImageProps } from "next/image";
import Img from ".";
import genetica from "../../../public/images/genetica.png";

export default {
  title: "Image/Img Mental Map",
  component: Img,
  args: {
    src: genetica.src,
    alt: "Imagem",
    width: 750,
    height: 375,
    template: "VIEW",
    mindMaps: [
      {
        x: 141,
        y: 70,
        texto:
          "Segundo a primeira lei de Mendel, o pai da genética - nossas características vem 50% do nosso pai e 50% da nossa mãe, como podemos ver no pequeno Dennis aqui. O Dennis herdou os cabelos ruivos bagunçados do pai - Johnny - e os olhos azuis e habilidades vampíricas da mãe - Mavis - sendo a mistura perfeita dos dois.",
      },
      {
        x: 87,
        y: 281,
        texto:
          "Quando falamos do fenótipo, falamos de coisas visíveis como o cabelo e a cor da pele, podendo também ser alteradas pelo ambiente - como o bronze que nós pegamos ao ficar no sol. É só olhar pro nosso amigo Flecha aqui curtindo na beira da piscina, dá até uma invejinha.",
      },
      {
        x: 319,
        y: 188,
        texto:
          "Os genes são um dos termos-chave quando falamos de genética ( como o nome já diz ). Quando eles se juntam, formam o DNA. Pra facilitar isso, vamos imaginar desse jeito: o DNA é um colar de pérolas e os genes as pérolas. Melhor ainda! Que tal um monte de Pérolas admirando um colar de pérolas?",
      },
      {
        x: 472,
        y: 38,
        texto:
          "Nos cromossomos, essas características são definidas por genes que ocupam o mesmo locus gênico - ou seja, o mesmo lugar - nos cromossomos. É só olhar aqui pro desenho, pro nosso colega Louco! As mãos e os pés dele estão no mesmo lugar das nossas árvores cromossômicas, então são nesses lugares que as informações genéticas se conectam para nos proporcionar algumas das nossas características.",
      },
    ],
  },
} as Meta<ImageProps>;

type Story = StoryObj<ImageProps>;

export const Default: Story = {};
