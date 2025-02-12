import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface VideoThumbProps {
  src: string | StaticImport;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description?: string;
  description2?: string;
  loading?: boolean;
  value?: string;
  direction?: string;
  onClick?: () => void;
  summarized?: boolean;
}
