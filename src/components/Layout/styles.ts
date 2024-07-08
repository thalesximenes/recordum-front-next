import {
  customScroll,
  defaultTransition,
  onDesktop,
  onTablet,
} from "../themes";

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

export { Main };
