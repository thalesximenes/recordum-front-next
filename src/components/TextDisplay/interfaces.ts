import { TextProps as MTextProps } from "@mantine/core";

export interface TextProps extends MTextProps {
  label?: string | number;
  labelColor?: string;
  text?: string | number | React.ReactNode;
  textColor?: string;
  weight?: string;
  direction?: "row" | "column";
  fitContent?: boolean;
}
