import { Row, RowItem } from "@/components/Row";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
import { startCadastrarUsuario } from "@/redux/User/slice";
import styled from "@emotion/styled";
import { theme } from "@/components/themes";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { replace, push } = useRouter();

  const { isDesktop } = useWindowSize();
  const { usuario } = useSelector((store: RootState) => store.User);

  const [personalizado, setPersonalizado] = useState(false);

  const [enderecoEmail, setEnderecoEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [curso, setCurso] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [vestibulares, setVestibulares] = useState("");

  const finalizarCadastro = () => {
    dispatch(
      startCadastrarUsuario({
        username: enderecoEmail,
        first_name: nome,
        last_name: sobrenome,
        email: enderecoEmail,
        senha: senha,
        escolaridade: escolaridade,
        vestibulares: vestibulares,
        curso: curso,
        universidade: universidade,
        callback: () => push("/"),
      })
    );
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
          <div hidden={personalizado}>
            <Row>
              <RowItem>
                <Text c={theme?.colors?.gray[7]} fw={500} size={`1.5rem`}>
                  Inscreva-se para o Recordum
                </Text>
              </RowItem>
            </Row>
          </div>
          <div hidden={personalizado}>
            <Row>
              <RowItem>
                <TextInput
                  label={`Endereço de Email`}
                  value={enderecoEmail}
                  setValue={setEnderecoEmail}
                />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <TextInput
                  label={`Primeiro Nome`}
                  value={nome}
                  setValue={setNome}
                />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <TextInput
                  label={`Sobrenome`}
                  value={sobrenome}
                  setValue={setSobrenome}
                />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <PasswordInput
                  label={`Senha`}
                  value={senha}
                  setValue={setSenha}
                />
              </RowItem>
            </Row>
          </div>
          <div hidden={personalizado}>
            <Row>
              <RowItem>
                <Btn
                  onClick={() => setPersonalizado(!personalizado)}
                  disabled={
                    enderecoEmail.trim() === "" ||
                    nome.trim() === "" ||
                    sobrenome.trim() === "" ||
                    senha.trim() === ""
                  }
                  template="primary"
                  fullWidth
                >
                  Prosseguir
                </Btn>
              </RowItem>
            </Row>
            <Row>
              <RowItem center>
                <TextHover
                  onClick={() => push("/")}
                  style={{ cursor: `pointer` }}
                  c={theme?.colors?.purple[4]}
                  hoverColor={theme?.colors?.purple[7]}
                >
                  Já é Cadastrado?
                </TextHover>
              </RowItem>
            </Row>
          </div>
          <div hidden={!personalizado}>
            <Row>
              <RowItem>
                <Text c={theme?.colors?.gray[7]} fw={500} size={`1.5rem`}>
                  Recordum para você
                </Text>
              </RowItem>
            </Row>
            <Row>
              <Text c={theme?.colors?.gray[7]} size="sm">
                Personalize o Recordum para as suas necessidades e obtenha uma
                melhor experiência de aprendizado.
              </Text>
            </Row>
          </div>
          <div hidden={!personalizado}>
            <Row>
              <RowItem>
                <TextInput
                  label={`Escolaridade`}
                  value={escolaridade}
                  setValue={setEscolaridade}
                />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <TextInput label={`Curso`} value={curso} setValue={setCurso} />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <TextInput
                  label={`Universidade`}
                  value={universidade}
                  setValue={setUniversidade}
                />
              </RowItem>
            </Row>
            <Row>
              <RowItem>
                <TextInput
                  label={`Vestibulares`}
                  value={vestibulares}
                  setValue={setVestibulares}
                />
              </RowItem>
            </Row>
          </div>
          <div hidden={!personalizado}>
            <Row style={{ flexWrap: `nowrap` }}>
              <RowItem>
                <Btn onClick={() => setPersonalizado(!personalizado)} fullWidth>
                  Voltar
                </Btn>
              </RowItem>
              <RowItem>
                <Btn
                  disabled={
                    escolaridade.trim() === "" ||
                    curso.trim() === "" ||
                    universidade.trim() === "" ||
                    vestibulares.trim() === ""
                  }
                  onClick={() => finalizarCadastro()}
                  template="primary"
                  fullWidth
                >
                  Finalizar
                </Btn>
              </RowItem>
            </Row>
            <Row>
              <RowItem center>
                <TextHover
                  onClick={() => push("/")}
                  style={{ cursor: `pointer` }}
                  c={theme?.colors?.purple[4]}
                  hoverColor={theme?.colors?.purple[7]}
                >
                  Já é Cadastrado?
                </TextHover>
              </RowItem>
            </Row>
          </div>
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

export default Home;
