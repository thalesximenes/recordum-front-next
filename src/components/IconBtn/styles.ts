import { ActionIcon, createPolymorphicComponent } from "@mantine/core";
import { defaultTransition, theme } from "@/components/themes";

import { IconBtnProps } from "./interfaces";
import styled from "@emotion/styled";

const _Container = styled(ActionIcon)<IconBtnProps>`
  display: flex !important;
  transition: ${defaultTransition};
  border: none;
  background-color: transparent;

  box-shadow: ${({ shadow }) => (!shadow ? "none" : theme?.shadows?.xs)};
  width: auto;
  height: auto;

  div {
    display: flex;
  }

  svg {
    color: inherit;
    width: inherit !important;
    height: inherit !important;
  }

  &:hover {
    background-color: ${theme?.colors?.purple?.[7]};
  }

  &:disabled {
    border-color: #ced4da;
  }
`;

const Container = createPolymorphicComponent<"button", IconBtnProps>(
  _Container
);

export { Container };
