import { Container, Main, MainContainer, MainLogin } from "./styles";

import Header from "../Header";
import { useRouter } from "next/router";
import useScrollPercentage from "../../hooks/useScrollPercentage";

const Layout = ({ children }: any) => {
  const [scrollRef] = useScrollPercentage();
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" || pathname === "/cadastro" ? (
        <MainLogin ref={scrollRef}>
          <MainContainer>{children}</MainContainer>
        </MainLogin>
      ) : (
        <Main ref={scrollRef}>
          <Header />
          <Container>{children}</Container>
        </Main>
      )}
    </>
  );
};

export default Layout;
