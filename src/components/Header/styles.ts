import {
  defaultTransition,
  onDesktop,
  onTablet,
  theme,
} from "@/components/themes";

import { HeaderProps } from "./interfaces";
import styled from "@emotion/styled";

const Container = styled.header<HeaderProps>`
  background-color: ${theme?.colors?.purple?.[6]};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 11;

  width: 100%;
  height: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 1rem;
  }

  transition: ${defaultTransition};

  ${onTablet} {
    height: 10%;
  }
`;

const Options = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  img,
  > svg {
    width: 100%;
    max-width: 200px !important;

    ${onDesktop} {
      max-width: 300px !important;
    }
  }

  button {
    margin: 0 1rem 0 0;
  }

  h1 {
    color: #fff;
    font-size: 1.25rem;
    margin-right: 1rem;

    ${onTablet} {
      font-size: 1.375rem;
    }
  }
`;

const Menu = styled.div<any>`
  background-color: #20003e;
  display: flex;
  flex-direction: column;

  position: fixed;
  width: 100%;

  top: 8%;
  height: ${({ opened }) => (opened ? "92%" : "0")};

  padding: 0;
  padding-bottom: ${({ opened }) => (opened ? "0.5rem" : "0")};

  overflow-y: hidden;
  overflow-x: hidden;
  transition: ${defaultTransition};

  ${onTablet} {
    top: 10%;
    height: ${({ opened }) => (opened ? "90%" : "0")};

    padding: 0;
    padding-bottom: ${({ opened }) => (opened ? "0.625rem" : "0")};
  }
`;

export { Container, Options, Menu };
