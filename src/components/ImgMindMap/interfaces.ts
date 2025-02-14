import { ImageProps } from "next/image";

export interface ImgMindMapProps extends ImageProps {
  fit?: "contain" | "cover";
  mindMaps?: MindMaps[];
  template?: "VIEW" | "EDIT";
}

interface MindMaps {
  x: number;
  y: number;
  texto: string;
}
