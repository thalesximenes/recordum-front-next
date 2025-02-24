import { Text, createPolymorphicComponent } from "@mantine/core";

import { TextProps } from "./interfaces";
import styled from "@emotion/styled";

const _Container = styled(Text)<TextProps>`
  margin: 0px;
  width: fit-content !important;
  color: ${({ c }) => c};
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ fw }) => fw};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    text-decoration: ${({ textDecoration }) => textDecoration || "underline"};
  }
`;

const Container = createPolymorphicComponent<"p", TextProps>(_Container);

export { Container };
