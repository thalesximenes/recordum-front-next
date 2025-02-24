import {
  TabsProps as MTabsProps,
  TabsListProps,
  TabsTabProps,
} from "@mantine/core";

import { ReactNode } from "react";

export interface TabsProps extends Omit<MTabsProps, "children"> {
  items?: Item[];
  children?: ReactNode;
  loading?: boolean;
  justify?: "left" | "center" | "right" | "apart";
  grow?: boolean;
}

export type ListProps = TabsListProps;

export interface Item extends Omit<TabsTabProps, "value"> {
  content?: any;
  label?: string | ReactNode;
  loading?: boolean;
  value?: string;
  help?: string | React.ReactNode;
}
