import { Button, createPolymorphicComponent } from "@mantine/core";

import { BtnCarouselProps } from "./interfaces";
import { BtnProps } from "../Btn/interfaces";
import { Carousel } from "@mantine/carousel";
import styled from "@emotion/styled";
import { theme } from "../themes";

const getColor = (template: any) => {
  switch (template) {
    case "secondary":
    case "primary":
      return "#fff";
    default:
      return theme?.colors?.purple?.[7];
  }
};

const _Container = styled(Carousel)`
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

const Slide = styled(Carousel.Slide)`
  display: inline-flex;
  justify-content: center;
`;

const Container = createPolymorphicComponent<"button", BtnCarouselProps>(
  _Container
);

const _Btn = styled(Button)<BtnProps>`
  display: inline-flex;
  font-size: 1rem;
  justify-content: left;
  align-items: left;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  border-radius: 2rem;
  border: 3px solid !important;
  padding: 0.125rem 0.5rem 0.125rem 0.5rem;
  --button-height: var(--button-height-xs) !important;

  color: ${theme?.colors?.purple?.[7]};
  background-color: transparent;
  border-color: ${({ bd }) => bd} !important;

  &:disabled {
    border-color: #ced4da;
  }

  &:hover {
    background-color: ${({ bd }) => bd} !important;
  }

  .mantine-Loader-root {
    --loader-color: ${({ template }) => getColor(template)} !important;
  }
`;

const Btn = createPolymorphicComponent<"button", BtnProps>(_Btn);

export { Container, Slide, Btn };
