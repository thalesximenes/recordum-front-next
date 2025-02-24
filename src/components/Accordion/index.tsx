import { Container, Control, Item, Panel } from "./styles";
import React, { useState } from "react";

import { AccordionProps } from "./interfaces";
import { LoadingOverlay } from "@mantine/core";

const Accordion = ({
  title,
  children,
  titleCentered = false,
  icon: Icon,
  loading = false,
  value: initialValue = "",
}: AccordionProps) => {
  const [value, setValue] = useState<string | string[] | null>(initialValue);
  return (
    <Container
      value={value}
      onChange={setValue}
      radius={"md"}
      variant="contained"
    >
      <Item value="default">
        <Control icon={Icon || null} closed={value !== "default"}>
          <h2 style={titleCentered ? { textAlign: "center" } : {}}>{title}</h2>
        </Control>
        <Panel>{children}</Panel>
        <LoadingOverlay visible={loading} />
      </Item>
    </Container>
  );
};

export default Accordion;
