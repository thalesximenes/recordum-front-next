import {
  AccordionControlProps as MAccordionControlProps,
  AccordionItemProps as MAccordionItemProps,
} from "@mantine/core";

export interface AccordionProps extends Omit<MAccordionItemProps, "value"> {
  title?: string;
  icon?: any;
  loading?: boolean;
  value?: string;
  titleCentered?: boolean;
}

export interface AccordionControlProps extends MAccordionControlProps {
  closed?: boolean;
}
