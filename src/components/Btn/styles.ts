import { Button, createPolymorphicComponent } from "@mantine/core";

import { BtnProps } from "./interfaces";
import styled from "@emotion/styled";
import { theme } from "../themes";

const getColor = (template: any) => {
  switch (template) {
    case "secondary":
    case "primary":
      return "#fff";
    default:
      return theme?.colors?.purple?.[7];
  }
};

const getBorderColor = (template: any) => {
  switch (template) {
    case "secondary":
      return "#fff";
    case "primary":
      return theme?.colors?.purple?.[6];
    default:
      return theme?.colors?.purple?.[7];
  }
};

const _Container = styled(Button)<BtnProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  color: ${({ template }) => getColor(template)};
  box-shadow: ${({ shadow }) => (!shadow ? "none" : theme.shadows?.sm)};
  border: 2px solid;
  border-color: ${({ template }) => getBorderColor(template)};

  &:disabled {
    border-color: #ced4da;
  }

  .mantine-Loader-root {
    --loader-color: ${({ template }) => getColor(template)} !important;
  }

  .mantine-Button-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Container = createPolymorphicComponent<"button", BtnProps>(_Container);

export { Container };
