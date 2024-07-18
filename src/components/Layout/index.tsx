import { Container, Main } from "./styles";

import Header from "../Header";
import useScrollPercentage from "../../hooks/useScrollPercentage";

const Layout = ({ children }: any) => {
  const [scrollRef] = useScrollPercentage();

  return (
    <Main ref={scrollRef}>
      <Header />
      <Container>{children}</Container>
    </Main>
  );
};

export default Layout;
