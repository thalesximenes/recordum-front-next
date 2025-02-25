import { Row, RowItem } from "@/components/Row";
import { useEffect, useState } from "react";

import Btn from "@/components/Btn";
import Head from "next/head";
import Img from "@/components/Img";
import LogoExtenson from "@/public/images/Logo_extenso.png";
import type { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import { Text } from "@mantine/core";
import TextInput from "@/components/TextInput";
import styled from "@emotion/styled";
import { theme } from "@/components/themes";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useWindowSize from "@/hooks/useWindowSize";

const Recuperar: NextPage = () => {
  const { replace, push } = useRouter();

  const { isDesktop } = useWindowSize();
  const { usuario } = useSelector((store: RootState) => store.User);

  const [enderecoEmail, setEnderecoEmail] = useState("");

  const finalizarCadastro = () => {
    push("/");
  };

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
          <div>
            <Row>
              <RowItem>
                <Text c={theme?.colors?.gray[7]} fw={500} size={`1.5rem`}>
                  Informe seu endereço de e-mail para que possamos
                  indentificá-lo
                </Text>
              </RowItem>
            </Row>
          </div>
          <div>
            <Row>
              <RowItem>
                <TextInput
                  label={`Endereço de Email`}
                  value={enderecoEmail}
                  setValue={setEnderecoEmail}
                />
              </RowItem>
            </Row>
          </div>
          <div>
            <Row style={{ flexWrap: `nowrap` }}>
              <RowItem>
                <Btn onClick={() => push("/")} fullWidth>
                  Voltar
                </Btn>
              </RowItem>
              <RowItem>
                <Btn
                  disabled={enderecoEmail.trim() === ""}
                  onClick={() => finalizarCadastro()}
                  template="primary"
                  fullWidth
                >
                  Finalizar
                </Btn>
              </RowItem>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default Recuperar;
