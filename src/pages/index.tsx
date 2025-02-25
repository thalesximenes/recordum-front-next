import { Row, RowItem } from "@/components/Row";
import { resetLogin, startLogin } from "@/redux/Session/slice";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Btn from "@/components/Btn";
import Head from "next/head";
import Img from "@/components/Img";
import LogoExtenson from "@/public/images/Logo_extenso.png";
import type { NextPage } from "next";
import PasswordInput from "@/components/PasswordInput";
import { RootState } from "@/redux/rootReducer";
import { Text } from "@mantine/core";
import TextHover from "@/components/TextHover";
import TextInput from "@/components/TextInput";
import styled from "@emotion/styled";
import { theme } from "@/components/themes";
import useNavigatorOnLine from "@/hooks/useNavigatorOnline";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const firstUpdateRef = useRef(true);
  const { replace, push } = useRouter();

  const { isDesktop } = useWindowSize();
  const { usuario } = useSelector((store: RootState) => store.User);

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    dispatch(resetLogin());
    if (firstUpdateRef.current) {
      firstUpdateRef.current = false;
    }
  }, []);

  useEffect(() => {
    if (usuario) {
      replace("/home");
    }
  }, [usuario]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container action="">
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            borderRadius: `8px`,
            gap: `2rem`,
            width: `80%`,
            backgroundColor: "white",
            padding: "2.675rem 2rem 2rem 2rem",
            height: "100%",
          }}
        >
          <Row>
            <RowItem center={!isDesktop}>
              <Img
                src={LogoExtenson.src}
                alt="Recordum"
                fit="contain"
                width={180}
                height={30}
              />
            </RowItem>
          </Row>
          {isDesktop && (
            <div>
              <Row>
                <RowItem>
                  <Text fw={500} size={`2rem`}>
                    Entre no Recordum ou
                  </Text>
                  <span>
                    <TextHover
                      fw={500}
                      size={`2rem`}
                      style={{ cursor: `pointer`, width: "fit-content" }}
                      c={theme?.colors?.purple[5]}
                      hoverColor={theme?.colors?.purple[7]}
                      textDecoration="underline"
                      onClick={() => push("cadastro")}
                    >
                      Cadastre-se
                    </TextHover>
                  </span>
                </RowItem>
              </Row>
            </div>
          )}
          {!showLogin && !isDesktop ? (
            <LoginStart setButton={() => setShowLogin(true)} />
          ) : (
            <Login />
          )}
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Login = () => {
  const dispatch = useDispatch();
  const isOnline = useNavigatorOnLine();

  const { push } = useRouter();
  const { loading } = useSelector((store: RootState) => store.Session);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = useCallback(() => {
    dispatch(
      startLogin({
        username: email,
        password: senha,
      })
    );
  }, [email, senha]);

  return (
    <>
      <div>
        <Row>
          <RowItem>
            <TextInput
              label="Endereço de email"
              value={email}
              setValue={setEmail}
            />
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <PasswordInput label="Senha" value={senha} setValue={setSenha} />
          </RowItem>
        </Row>
      </div>
      <div>
        <Row>
          <RowItem>
            <Btn
              style={{ width: "100%" }}
              template="primary"
              loading={loading}
              onClick={handleLogin}
              disabled={!email || !senha || !isOnline}
              fullWidth
              type="submit"
            >
              {isOnline ? "Entrar" : "Conecte-se à internet"}
            </Btn>
          </RowItem>
        </Row>
        <Row>
          <RowItem center>
            <TextHover
              onClick={() => push("/recuperar")}
              style={{ cursor: `pointer` }}
              c={theme?.colors?.purple[4]}
              hoverColor={theme?.colors?.purple[7]}
            >
              Esqueci minha senha
            </TextHover>
          </RowItem>
        </Row>
      </div>
    </>
  );
};

const LoginStart = ({ setButton }) => {
  const { push } = useRouter();
  return (
    <>
      <Row>
        <Btn onClick={() => setButton()} template="primary" fullWidth>
          Login
        </Btn>
        <Btn onClick={() => push("cadastro")} fullWidth>
          Cadastre-se
        </Btn>
      </Row>
    </>
  );
};

export default Home;
