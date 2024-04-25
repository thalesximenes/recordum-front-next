import {
  CardProps as MCardProps,
  CardSectionProps as MCardSectionProps,
  MenuItemProps as MMenuItemProps,
} from "@mantine/core";

export interface CardProps extends MCardProps {
  title?: string;
  titleCentered?: boolean;
  loading?: boolean;
  form?: boolean;
  menuItens?: MenuItemProps[];
  width?: number | string;
}

export interface MenuItemProps extends MMenuItemProps {
  link?: string;
  onClick?: (...any: any) => any;
}

export type CardSectionProps = MCardSectionProps;
