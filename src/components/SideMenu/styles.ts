import { defaultTransition, onDesktop } from "../themes";

import { SideMenuProps } from "./interfaces";
import styled from "@emotion/styled";

const SideMenuContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "isOpen" && prop !== "width" && prop !== "collapsedWidth",
})<SideMenuProps>`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: row;
  background-color: ${({ isOpen }) => (isOpen ? `white` : `none`)};
  transition: ${defaultTransition};

  border: ${({ isOpen }) => (isOpen ? `2px solid #BAB8D7` : `none`)};
  border-right: none;
  align-items: center;
  padding: 10px 20px 10px 0;
  margin-top: 26px;
  transform: ${({ isOpen }) =>
    isOpen ? `translate(0, 0)` : `translate(${300 + 20}px , 0)`};

  ${onDesktop} {
    margin-top: 32px;
    transform: ${({ isOpen, width }) =>
      isOpen ? `translate(0, 0)` : `translate(${width + 20}px , 0)`};
  }

  .content {
    margin-left: ${({ isOpen }) => (isOpen ? `-8px` : `none`)};
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-self: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 22px;
`;

const Content = styled.div<SideMenuProps>`
  flex-grow: 1;
  display: flex;
  align-self: flex-start;
  flex-direction: column;

  width: 300px;
  ${onDesktop} {
    width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  }

  opacity: 1;
  transition: opacity ${defaultTransition};
`;

export { SideMenuContainer, ToggleButton, Content };
