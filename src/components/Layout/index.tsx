import { Container, Main, MainContainer, MainLogin } from "./styles";

import Header from "../Header";
import { useRouter } from "next/router";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

const Layout = ({ children }: any) => {
  const [scrollRef] = useScrollPercentage();
  const { pathname } = useRouter();

  const { pageName, backgroundImage } = useSelector(
    (store: RootState) => store.Session
  );

  return (
    <>
      {pathname === "/" || pathname === "/cadastro" ? (
        <MainLogin ref={scrollRef}>
          <MainContainer>{children}</MainContainer>
        </MainLogin>
      ) : (
        <Main ref={scrollRef}>
          <Header />
          <Container backgroundImage={backgroundImage}>{children}</Container>
        </Main>
      )}
    </>
  );
};

export default Layout;
