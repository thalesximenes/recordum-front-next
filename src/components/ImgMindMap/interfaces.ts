import { ImageProps } from "next/image";

export interface ImgMindMapProps extends ImageProps {
  fit?: "contain" | "cover";
  mindMaps?: MindMaps[];
}

interface MindMaps {
  x: number;
  y: number;
  info: string;
}
