import { defaultTransition, onTablet, theme } from "../themes";

import { Accordion } from "@mantine/core";
import { AccordionControlProps } from "./interfaces";
import styled from "@emotion/styled";

const Container = styled(Accordion)`
  transition: ${defaultTransition};
  padding: 0;
  position: relative;
  border-radius: 0px;
  border: none;
`;

const Item = styled(Accordion.Item)`
  transition: ${defaultTransition};
  border-radius: 0px !important;
  border-color: transparent;
  border: none;
  background: transparent;

  .mantine-Accordion-label {
    padding: 0;
  }
`;

const Control = styled(Accordion.Control, {
  shouldForwardProp: (prop) => prop !== "closed",
})<AccordionControlProps>`
  padding: 0.25rem;
  transition: ${defaultTransition};
  border-radius: 0px !important;
  box-shadow: ${theme?.shadows?.md};

  background: ${theme?.colors?.random?.[0]};
  color: ${theme?.colors?.purple?.[6]} !important;

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 1.25rem;

    ${onTablet} {
      font-size: 1.375rem;
    }
  }

  &:hover {
    background: ${theme?.colors?.purple?.[4]};
    color: ${theme?.colors?.purple?.[0]} !important;
  }

  ${onTablet} {
    padding: 0.375rem;
  }
`;

const Panel = styled(Accordion.Panel)`
  transition: ${defaultTransition};
  background-color: transparent;
  border-radius: 0px;
  line-height: normal;
  border-top-width: 0;

  .mantine-Accordion-content {
    padding: 0.5rem;

    ${onTablet} {
      padding: 0.625rem;
    }
  }
`;

export { Container, Item, Control, Panel };
