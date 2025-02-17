import { Container, Control, Item, Panel } from "./styles";
import React, { useState } from "react";

import { SideMenuProps } from "./interfaces";
import { LoadingOverlay } from "@mantine/core";
import DoubleArrow from "@/public/images/doubleArrow.svg"

const SideMenu = ({
  children,
  loading = false,
  value: initialValue = "",
}: SideMenuProps) => {
  const [value, setValue] = useState<string | string[] | null>(initialValue);
  return (
    <Container
      value={value}
      onChange={setValue}
      radius={"md"}
      variant="contained"
    >
      <Item value="default">
        <Control icon={DoubleArrow} closed={value !== "default"} />
        <Panel>{children}</Panel>
        <LoadingOverlay visible={loading} />
      </Item>
    </Container>
  );
};

export default SideMenu;
