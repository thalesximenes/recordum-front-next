import { Container, Main, MainLogin } from "./styles";

import Header from "../Header";
import { useRouter } from "next/router";
import useScrollPercentage from "../../hooks/useScrollPercentage";

const Layout = ({ children }: any) => {
  const [scrollRef] = useScrollPercentage();
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <>
      {pathname === "/" ? (
        <MainLogin ref={scrollRef}>
          <Container style={{ height: "100%", alignContent: "center" }}>
            {children}
          </Container>
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
