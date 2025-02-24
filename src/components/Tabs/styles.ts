import { ListProps, TabsProps } from "./interfaces";
import {
  customScroll,
  defaultTransition,
  invisibleScroll,
  onTablet,
  theme,
} from "../themes";

import { Tabs } from "@mantine/core";
import styled from "@emotion/styled";

const Container = styled(Tabs)<TabsProps>`
  border-radius: 8px;
  transition: ${defaultTransition};
  height: 100%;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const List = styled(Tabs.List)<ListProps>`
  border: none;
  transition: ${defaultTransition};
  flex-wrap: nowrap;

  ${invisibleScroll}
`;

const Tab = styled(Tabs.Tab)`
  padding: 0.375rem 0.625rem;
  border: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid ${theme?.colors?.dark?.[0]};
  border-bottom: none;
  background: ${theme?.colors?.gray?.[3]};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme?.colors?.dark?.[4]};
  transition: ${defaultTransition};

  .mantine-Tooltip-tooltip {
    overflow: initial;
    white-space: initial;
    text-align: center;
    font-weight: 600;
    color: ${theme?.colors?.dark?.[4]};
  }

  &:not(:first-of-type) {
    margin-left: 0.125rem;
  }

  &[aria-selected="true"] {
    background: ${theme.colors.purple[7]};
    color: whitesmoke !important;
  }

  &::before {
    display: none;
  }

  ${onTablet} {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }
`;

const Panel = styled(Tabs.Panel)`
  position: relative;
  transition: ${defaultTransition};
  padding: 0.5rem;
  border: 1px solid ${theme?.colors?.gray?.[3]};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: ${theme?.shadows?.md};

  overflow: auto;
  ${customScroll()};

  ${onTablet} {
    padding: 0.625rem;
  }
`;

export { Container, List, Tab, Panel };
