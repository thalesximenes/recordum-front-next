import { Container, List, Panel, Tab } from "./styles";

import { Loader } from "@mantine/core";
import React from "react";
import { TabsProps } from "./interfaces";

const Tabs = (props: TabsProps) => {
  const { items, loading = false, justify, grow, ...otherProps } = props;

  return (
    <Container
      defaultValue={items?.length ? "0" : null}
      {...otherProps}
      variant="outline"
    >
      <div style={{ position: "relative" }}>
        <List grow={grow} justify={justify}>
          {items?.map(
            (
              {
                hidden,
                value,
                content,
                loading = false,
                help,
                label,
                ...otherProps
              },
              index
            ) =>
              !hidden && (
                <Tab
                  key={index}
                  {...otherProps}
                  value={value ?? index?.toString()}
                >
                  {label}
                </Tab>
              )
          )}
        </List>
        {items?.map(
          ({ hidden = false, value, content, loading = false }, index) =>
            !hidden && (
              <Panel key={index} value={value ?? index?.toString()}>
                {content}
                {loading && <Loader />}
              </Panel>
            )
        )}
        {loading && <Loader />}
      </div>
    </Container>
  );
};

export default Tabs;
