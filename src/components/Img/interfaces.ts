import { ImageProps } from "next/image";

export interface ImgProps extends ImageProps {
  fit?: "contain" | "cover";
}
