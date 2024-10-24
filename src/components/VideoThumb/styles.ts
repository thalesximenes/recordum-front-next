import { defaultTransition } from "../themes";
import styled from "@emotion/styled";

const Container = styled("div")`
  transition: ${defaultTransition};
  width: fit-content;
  padding: 0;
  position: relative;
  border-radius: 0px;
  border: none;
  margin-right: 1.5rem;
`;

export { Container };
