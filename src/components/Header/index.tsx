import { Container, Menu, Options } from "./styles";
import { Row, RowItem } from "../Row";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Btn from "../Btn";
import Burger from "@/public/images/burger.svg";
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
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
  const { replace, push } = useRouter();

  const { usuario } = useSelector((state: RootState) => state?.User);

  const { pageName } = useSelector((store: RootState) => store.Session);

  useEffect(() => {
    if (!usuario) {
      replace("/");
    }
  }, [usuario]);

  const [opened, setOpened] = useState(false);
  const { isDesktop, isTablet, width } = useWindowSize();

  return (
    <>
      <Container>
        {!isDesktop && !isTablet ? (
          <>
            <div />
            <div style={{ position: "absolute" }}>
              <IconBtn
                onClick={() => {
                  setOpened(!opened);
                }}
              >
                <Burger width={48} height={48} />
              </IconBtn>
            </div>
            <Options>
              <h1>{pageName}</h1>
            </Options>
            <div />
          </>
        ) : (
          <>
            <IconBtn
              onClick={() => {
                push("/home");
                setOpened(false);
              }}
            >
              <Img width={57} height={48} src={logo} alt={"icone_logo"} />
            </IconBtn>
            <Options>
              <h1>Premium</h1>
              <IconBtn onClick={() => setOpened(!opened)}>
                <Img width={48} height={48} src={perfil} alt={"icone_perfil"} />
              </IconBtn>
            </Options>
          </>
        )}
      </Container>
      <Menu opened={opened}>
        <Row style={{ padding: "2rem 0 3rem 0", height: `100%` }}>
          <Left isDesktop={isDesktop} />
          <Middle isDesktop={isDesktop} usuario={usuario} />
          <Right width={width} />
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
        height: "100%",
        paddingTop: "0.625rem",
        margin: "0px",
      }}
    >
      {children}
    </Row>
  ) : (
    <RowItem center>{children}</RowItem>
  );
};

const Left = ({ isDesktop }) => {
  return (
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
  );
};

const Middle = ({ isDesktop, usuario }) => {
  const style = (isDesktop) => {
    return isDesktop ? { paddingBottom: "2rem" } : {};
  };

  const wrap = (isDesktop) => {
    return isDesktop ? "nowrap" : "wrap";
  };

  const direction = (isDesktop) => {
    return isDesktop ? "column" : "row";
  };

  const size = (isDesktop) => {
    return isDesktop ? "22px" : "18px";
  };

  return (
    <RowItem>
      <Row wrap={wrap(isDesktop)} style={style(isDesktop)}>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Primeiro Nome`}
            text={usuario?.primeiroNome}
          />
        </RowItem>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Sobrenome`}
            text={usuario?.sobrenome}
          />
        </RowItem>
      </Row>
      <Row style={style(isDesktop)}>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`E-mail`}
            text={usuario?.email}
          />
        </RowItem>
      </Row>
      <Row wrap={wrap(isDesktop)} style={style(isDesktop)}>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Escolaridade`}
            text={usuario?.escolaridade}
          />
        </RowItem>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Vestibulares`}
            text={usuario?.vestibulares}
          />
        </RowItem>
      </Row>
      <Row wrap={wrap(isDesktop)} style={style(isDesktop)}>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Curso`}
            text={usuario?.curso}
          />
        </RowItem>
        <RowItem>
          <TextDisplay
            direction={direction(isDesktop)}
            size={size(isDesktop)}
            label={`Universidade`}
            text={usuario?.universidade}
          />
        </RowItem>
      </Row>
    </RowItem>
  );
};

const Right = ({ width }) => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  return (
    <CustomRow>
      <Row
        style={{
          height: `100%`,
          flexDirection: `column`,
          justifyContent: width >= 1440 ? `space-between` : `end`,
        }}
      >
        {width >= 1440 && (
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
        <Row
          wrap="nowrap"
          style={{ alignSelf: "center", position: "absolute", top: "90%" }}
        >
          <RowItem center>
            <Btn template="secondary" size={"md"}>
              Alterar Senha
            </Btn>
          </RowItem>
          <RowItem center>
            <Btn
              size={"md"}
              onClick={() => {
                dispatch(resetUserInfo());
                dispatch(resetLogin());
                push("/");
              }}
            >
              Sair da Conta
            </Btn>
          </RowItem>
        </Row>
      </Row>
    </CustomRow>
  );
};

export default Header;
