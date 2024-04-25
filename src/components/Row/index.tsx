import { Group, GroupItem } from "./styles";

import { GroupProps } from "@mantine/core";
import { RowItemProps } from "./interfaces";

const Row = (props: GroupProps) => <Group {...props}>{props.children}</Group>;
const RowItem = ({ children, ...otherProps }: RowItemProps) => (
  <GroupItem {...otherProps}>{children}</GroupItem>
);

export { Row, RowItem };
