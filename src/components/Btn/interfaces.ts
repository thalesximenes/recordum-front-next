import { ButtonProps } from "@mantine/core";

export interface BtnProps extends ButtonProps {
  template?: "primary" | "secondary" | "gradient";
  type?:"button" | "submit" | "reset"; 
  shadow?: boolean;
  onClick?: (any: any) => void;
}
