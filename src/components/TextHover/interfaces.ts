import { MantineColor, TextProps as MTextProps } from "@mantine/core";

export interface TextProps extends MTextProps {
  hoverColor?: MantineColor | string;
  textDecoration?: string;
  children?: string;
  onClick?: (any: any) => void;
}
