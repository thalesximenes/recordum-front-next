import { Row, RowItem } from "@/components/Row";
import { resetLogin, startLogin } from "@/redux/Session/slice";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Btn from "@/components/Btn";
import Head from "next/head";
import type { NextPage } from "next";
import PasswordInput from "@/components/TextInput";
import { RootState } from "@/redux/rootReducer";
import TextInput from "@/components/TextInput";
import styled from "@emotion/styled";
import { useEffect } from "react";
import useNavigatorOnLine from "@/hooks/useNavigatorOnline";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { replace } = useRouter();
  const { isTablet } = useWindowSize();
  const firstUpdateRef = useRef(true);
  const isOnline = useNavigatorOnLine();

  const { usuario } = useSelector((store: RootState) => store.User);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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

  const handleLogin = useCallback(() => {
    dispatch(
      startLogin({
        usuario: email,
        senha: senha,
      })
    );
  }, [email, senha]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <form action="">
          <Row
            style={{
              backgroundColor: "white",
              padding: "2rem",
              height: "100%",
            }}
          >
            <RowItem>
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
                  <PasswordInput
                    label="Senha"
                    value={senha}
                    setValue={setSenha}
                  />
                </RowItem>
              </Row>
              <Row>
                <Btn
                  template="primary"
                  // loading={loadingUserInfo}
                  onClick={handleLogin}
                  disabled={!email || !senha || !isOnline}
                  fullWidth
                  type="submit"
                >
                  {isOnline ? "Entrar" : "Conecte-se à internet"}
                </Btn>
              </Row>
            </RowItem>
          </Row>
        </form>
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

export default Home;
