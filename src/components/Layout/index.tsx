import Header from "../Header";
import { Main } from "./styles";
import { useEffect, useRef } from "react";
import useScrollPercentage from "../../hooks/useScrollPercentage";

const Layout = ({ children }: any) => {
  const firstUpdate = useRef(true);
  const [scrollRef] = useScrollPercentage();

  useEffect(() => {
    firstUpdate.current = false;
  }, []);

  return (
    <Main ref={scrollRef}>
      <Header />
      {!firstUpdate.current && children}
    </Main>
  );
};

export default Layout;
