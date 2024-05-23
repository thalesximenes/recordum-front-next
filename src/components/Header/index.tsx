import { Container, Menu, Options } from "./styles";

import IconBtn from "../IconBtn";
import Img from "../Img";
import logo from "@/public/images/logo.png";
import perfil from "@/public/images/perfil.png";
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Container>
        <IconBtn>
          <Img width={57} height={48} src={logo} alt={"icone_logo"} />
        </IconBtn>
        <Options>
          <h1>Premium</h1>
          <IconBtn onClick={() => setOpened(!opened)}>
            <Img width={48} height={48} src={perfil} alt={"icone_perfil"} />
          </IconBtn>
        </Options>
      </Container>
      <Menu opened={opened}></Menu>
    </>
  );
};

export default Header;
