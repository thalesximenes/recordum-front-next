import { CardSection, Group, Menu } from "@mantine/core";
import React, { Fragment } from "react";

import { CardProps } from "./interfaces";
import { Container } from "./styles";

const Card = ({
  title,
  titleCentered,
  children,
  form,
  menuItens,
  width,
}: CardProps) => {
  return (
    <Container
      component={form ? "form" : "div"}
      withBorder
      shadow="md"
      radius="md"
      width={width}
    >
      <CardSection inheritPadding style={{ paddingLeft: 0, paddingTop: 0 }}>
        <Group justify={titleCentered ? "center" : "apart"}>
          <Group>
            <h2>{title}</h2>
          </Group>
          {menuItens?.length ? (
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Dropdown>
                {menuItens.map((item, index) => (
                  <Fragment key={index}>
                    <Menu.Item onClick={item.onClick} key={index}>
                      {item.children}
                    </Menu.Item>
                  </Fragment>
                ))}
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </Group>
      </CardSection>
      <CardSection inheritPadding p={"xs"}>
        {children}
      </CardSection>
    </Container>
  );
};

export default Card;
