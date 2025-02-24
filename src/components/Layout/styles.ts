import {
  customScroll,
  defaultTransition,
  onDesktop,
  onTablet,
} from "../themes";

import { LayoutContainerProps } from "./interface";
import bgCadastro from "@/public/images/bgCadastro.png";
import styled from "@emotion/styled";

const Main = styled.main<any>`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 8%;

  width: 100%;
  height: 92%;
  padding: 0;
  padding-bottom: 0.5rem;

  overflow-y: auto;
  overflow-x: hidden;
  transition: ${defaultTransition};

  ${customScroll()};

  ${onTablet} {
    top: 10%;
    height: 90%;

    padding: 0;
    padding-bottom: 0.625rem;
  }
`;

const MainContainer = styled.div<any>`
  height: 100%;
  align-content: center;
  z-index: -1;

  ${onDesktop} {
    width: 50%;
    background-color: white;
  }
`;

const Container = styled.div<LayoutContainerProps>`
  flex-grow: 1;
  z-index: -1;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};

  padding: 2rem 2rem 2rem 2rem;

  ${onTablet} {
    padding: 2rem 5rem 2rem 5rem;
  }
`;

const MainLogin = styled.main<any>`
  display: flex;
  flex-direction: column;
  background-image: url(${bgCadastro.src});

  position: fixed;
  top: 0%;

  width: 100%;
  height: 100%;

  padding: 0;

  overflow-y: auto;
  overflow-x: hidden;
  transition: ${defaultTransition};

  ${customScroll()};
`;

export { Main, Container, MainContainer, MainLogin };
