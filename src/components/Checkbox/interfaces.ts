import {
  CheckboxProps,
  CheckboxGroupProps as MCheckboxGroupProps,
} from "@mantine/core";
import { ReactNode } from "react";

export interface CheckboxGroupProps
  extends Omit<MCheckboxGroupProps, "children"> {
  onChange?: (value: any) => void;
  loading?: boolean;
  center?: boolean;
  items?: ItemProps[];
  children?: ReactNode;
  noWrap?: boolean;
}

export type ItemProps = CheckboxProps;
