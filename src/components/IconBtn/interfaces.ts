import { ActionIconProps } from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";

type Props = ActionIconProps & ComponentPropsWithoutRef<"button">;

export interface IconBtnProps extends Props {
  name?: string;
  linkPath?: string;
  title?: string;
  onClick?: (any: any) => void;
  template?: "primary" | "secondary" | "gradient";
  shadow?: boolean;
}
