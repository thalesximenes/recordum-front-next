import { useEffect, useRef } from "react";

import Header from "../Header";
import { Main } from "./styles";
import useScrollPercentage from "../../hooks/useScrollPercentage";

const Layout = ({ children }: any) => {
  const [scrollRef] = useScrollPercentage();

  return (
    <Main ref={scrollRef}>
      <Header />
      {children}
    </Main>
  );
};

export default Layout;
