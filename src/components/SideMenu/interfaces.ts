import {
  AccordionControlProps as MAccordionControlProps,
  AccordionItemProps as MAccordionItemProps,
} from "@mantine/core";

export interface SideMenuProps extends Omit<MAccordionItemProps, "value"> {
  title?: string;
  icon?: any;
  loading?: boolean;
  value?: string;
  titleCentered?: boolean;
}

export interface SideMenuControlProps extends MAccordionControlProps {
  closed?: boolean;
}
 