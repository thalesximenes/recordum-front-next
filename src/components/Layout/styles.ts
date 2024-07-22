import { customScroll, defaultTransition, onTablet } from "../themes";

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

const Container = styled.div<any>`
  z-index: -1;
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
  padding-bottom: 0.5rem;

  overflow-y: auto;
  overflow-x: hidden;
  transition: ${defaultTransition};

  ${customScroll()};

  ${onTablet} {
    top: 0%;
    height: 100%;

    padding: 0;
    padding-bottom: 0.625rem;
  }
`;

export { Main, Container, MainLogin };
