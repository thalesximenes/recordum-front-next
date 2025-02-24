import { Button, createPolymorphicComponent } from "@mantine/core";

import { BtnProps } from "../Btn/interfaces";
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

const _Container = styled(Button)<BtnProps>`
  display: inline-flex;
  font-size: 1.25rem;
  justify-content: left;
  align-items: left;
  transition: all 0.2s ease-in-out;
  width: 21rem;
  border-radius: 0px;
  padding: 0 0 0 0.75rem;
  --button-height: var(--button-height-xs) !important;

  color: ${theme?.colors?.purple?.[7]};

  &:disabled {
    border-color: #ced4da;
  }

  .mantine-Loader-root {
    --loader-color: ${({ template }) => getColor(template)} !important;
  }
`;

const Container = createPolymorphicComponent<"button", BtnProps>(_Container);

export { Container };
