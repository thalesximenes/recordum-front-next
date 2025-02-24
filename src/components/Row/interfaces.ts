import { GroupProps } from "@mantine/core";

export interface RowItemProps extends GroupProps {
  end?: boolean | number;
  center?: boolean;
  children?: React.ReactNode;
}
