import { ButtonProps } from "@mantine/core";

export interface BtnProps extends ButtonProps {
  template?: "primary" | "secondary" | "gradient";
  shadow?: boolean;
  onClick?: (any: any) => void;
}
