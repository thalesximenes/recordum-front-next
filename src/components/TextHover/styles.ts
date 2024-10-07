import { theme } from "../themes";

import { TextProps } from "./interfaces";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";

const _Container = styled(`p`)<TextProps>`
  margin: 0px;
  color: ${({ c }) => c && c};
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: ${({ fw }) => fw && fw};

  &:hover {
    color: ${({ hoverColor }) => hoverColor && hoverColor};
    text-decoration: ${({ textDecoration }) =>
      textDecoration ? textDecoration : ""};
  }
`;

const Container = createPolymorphicComponent<"p", TextProps>(_Container);

export { Container };
