import { Container, Menu, Options } from "./styles";
import { Row, RowItem } from "../Row";
import { useEffect, useState } from "react";

import Btn from "../Btn";
import IconBtn from "../IconBtn";
import Img from "../Img";
import { RootState } from "@/redux/rootReducer";
import { Text } from "@mantine/core";
import TextDisplay from "../TextDisplay";
import creditCard from "@/public/images/creditCard.png";
import logo from "@/public/images/logo.png";
import perfil from "@/public/images/perfil.png";
import { resetLogin } from "@/redux/Session/slice";
import { resetUserInfo } from "@/redux/User/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
  const { replace } = useRouter();
  const dispatch = useDispatch();

  const { usuario } = useSelector((state: RootState) => state?.User);

  useEffect(() => {
    if (!usuario) {
      replace("/");
    }
  }, [usuario]);

  const [opened, setOpened] = useState(false);
  const { isDesktop, width } = useWindowSize();

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
      <Menu opened={opened}>
        <Row style={{ padding: "2rem 0 3rem 0", height: `100%` }}>
          <CustomRow>
            <Text
              fw={700}
              c={"white"}
              size="28px"
              style={isDesktop ? { paddingLeft: "4rem" } : { padding: "8px" }}
            >
              Perfil
            </Text>
          </CustomRow>
          <RowItem>
            <Row
              wrap={isDesktop ? "nowrap" : "wrap"}
              style={isDesktop ? { paddingBottom: "2rem" } : {}}
            >
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Primeiro Nome`}
                  text={usuario?.primeiroNome}
                />
              </RowItem>
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Sobrenome`}
                  text={usuario?.sobrenome}
                />
              </RowItem>
            </Row>
            <Row style={isDesktop ? { paddingBottom: "2rem" } : {}}>
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`E-mail`}
                  text={usuario?.email}
                />
              </RowItem>
            </Row>
            <Row
              wrap={isDesktop ? "nowrap" : "wrap"}
              style={isDesktop ? { paddingBottom: "2rem" } : {}}
            >
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Escolaridade`}
                  text={usuario?.escolaridade}
                />
              </RowItem>
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Vestibulares`}
                  text={usuario?.vestibulares}
                />
              </RowItem>
            </Row>
            <Row
              wrap={isDesktop ? "nowrap" : "wrap"}
              style={isDesktop ? { paddingBottom: "2rem" } : {}}
            >
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Curso`}
                  text={usuario?.curso}
                />
              </RowItem>
              <RowItem>
                <TextDisplay
                  direction={isDesktop ? "column" : "row"}
                  size={isDesktop ? "22px" : `18px`}
                  label={`Universidade`}
                  text={usuario?.universidade}
                />
              </RowItem>
            </Row>
          </RowItem>
          <CustomRow>
            <Row
              style={{
                height: `100%`,
                flexDirection: `column`,
                justifyContent: width / 4 >= 360 ? `space-between` : `end`,
              }}
            >
              {width / 4 >= 360 && (
                <Row>
                  <RowItem>
                    <Img
                      src={creditCard}
                      width={360}
                      height={307.5}
                      alt="credit card"
                    />
                  </RowItem>
                </Row>
              )}
              <Row wrap="nowrap" style={{ alignSelf: `center` }}>
                <RowItem center>
                  <Btn
                    template="secondary"
                    size={width / 4 >= 360 ? `md` : `sm`}
                  >
                    Alterar Senha
                  </Btn>
                </RowItem>
                <RowItem center>
                  <Btn
                    size={width / 4 >= 360 ? `md` : `sm`}
                    onClick={() => {
                      dispatch(resetUserInfo());
                      dispatch(resetLogin());
                    }}
                  >
                    Sair da Conta
                  </Btn>
                </RowItem>
              </Row>
            </Row>
          </CustomRow>
        </Row>
      </Menu>
    </>
  );
};

const CustomRow = ({ children }: any) => {
  const { isDesktop } = useWindowSize();

  return isDesktop ? (
    <Row
      style={{
        width: "25%",
        height: `100%`,
        paddingTop: "0.625rem",
        margin: `0px`,
      }}
    >
      {children}
    </Row>
  ) : (
    <RowItem center>{children}</RowItem>
  );
};

export default Header;
