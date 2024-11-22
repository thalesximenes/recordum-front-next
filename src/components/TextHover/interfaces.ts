import { TextProps as MTextProps, MantineColor } from "@mantine/core";

export interface TextProps extends MTextProps {
  hoverColor?: MantineColor;
  textDecoration?: string;
  children?: string;
  onClick?: (any: any) => void;
}
