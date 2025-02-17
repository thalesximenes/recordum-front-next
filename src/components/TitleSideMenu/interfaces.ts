import { TextProps as MTextProps } from "@mantine/core";

export interface TextProps extends MTextProps {
  eixo?: string | number;
  eixoColor?: string;
  disciplina?: string | number | React.ReactNode;
  disciplinaColor?: string;
  weight?: string;
  direction?: "row" | "column";
  fitContent?: boolean;
}
