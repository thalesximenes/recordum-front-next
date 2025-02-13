import { BtnProps } from "../Btn/interfaces";
import { CarouselProps } from "@mantine/carousel";

export interface BtnCarouselProps extends CarouselProps {
  buttons: BtnProps[];
}
