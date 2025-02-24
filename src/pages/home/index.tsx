import { Loader, Text } from "@mantine/core";
import { Row, RowItem } from "@/components/Row";
import {
  setAula,
  setDisciplina,
  setEixo,
  startGetEixos,
} from "@/redux/Conteudo/slice";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { useDispatch, useSelector } from "react-redux";

import BtnCarousel from "@/components/BtnCarousel";
import BtnList from "@/components/BtnList";
import Card from "@/components/Card";
import { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import VideoThumb from "@/components/VideoThumb";
import { theme } from "@/components/themes";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const { usuario } = useSelector((store: RootState) => store.User);

  useEffect(() => {
    dispatch(setPageName("Início"));
    dispatch(setBackgroundImage({ backgroundImage: "" }));
    dispatch(startGetEixos());
  }, []);

  return (
    <>
      <HomeLayout>
        <Row>
          <RowItem>
            <Text c={theme?.colors?.purple[5]} size={"1.5rem"} fw={700}>
              Olá, {usuario?.primeiroNome}!
            </Text>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Card title="Continue Assistindo">
              <VideoThumb
                alt="Introdução à Genética"
                src={thumb}
                title="Introdução à Genética"
                description="Genética"
                description2="Biologia"
                onClick={() => {
                  dispatch(setEixo(1));
                  dispatch(setDisciplina(1));
                  dispatch(setAula(1));
                  push(
                    `/eixo-tematico/Biologia/Genética/Introdução à Genética - Conceitos Iniciais`
                  );
                }}
              />
            </Card>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Card title="Hora da Revisão">
              <VideoThumb
                alt="Genética"
                src={thumb}
                title="Genética"
                summarized
                onClick={() => {
                  dispatch(setEixo(1));
                  dispatch(setDisciplina(1));
                  dispatch(setAula(1));
                  push(
                    `/eixo-tematico/Biologia/Genética/Introdução à Genética - Conceitos Iniciais`
                  );
                }}
              />
            </Card>
          </RowItem>
        </Row>
      </HomeLayout>
    </>
  );
};

const HomeLayout = ({ children }) => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 1024 && (
        <Row>
          <RowItem>
            <HeadMenu />
          </RowItem>
        </Row>
      )}
      <Row style={{ flexDirection: "row", width: "100%" }}>
        <RowItem>{children}</RowItem>
        {width >= 1024 && <SideMenu />}
      </Row>
    </>
  );
};

const HeadMenu = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { eixos, loading } = useSelector((store: RootState) => store.Conteudo);
  const { isTablet } = useWindowSize();

  return (
    <Row style={{ marginTop: 0 }}>
      <RowItem>
        <Row>
          <Text
            size={isTablet ? "1.25rem" : "1.125rem"}
            fw={700}
            c={theme.colors.purple[5]}
          >
            Eixos Temáticos
          </Text>
        </Row>
        {loading && (
          <Row>
            <RowItem center>
              <Loader />
            </RowItem>
          </Row>
        )}
        <Row style={{ flexDirection: "column" }}>
          <BtnCarousel
            buttons={eixos?.map((e) => ({
              children: e?.nome,
              onClick: () => {
                dispatch(setEixo(e?.id));
                dispatch(setDisciplina(0));
                dispatch(setAula(0));
                push(`/eixo-tematico/${e?.nome.normalize("NFKD")}`);
              },
            }))}
          />
        </Row>
      </RowItem>
    </Row>
  );
};

const SideMenu = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { eixos, loading } = useSelector((store: RootState) => store.Conteudo);

  const { isTablet } = useWindowSize();

  return (
    <Row style={{ marginTop: 0 }}>
      <RowItem>
        <Row style={{ flexDirection: "column", overflowY: "auto" }}>
          <Row>
            <Text
              size={isTablet ? "1.25rem" : "1.125rem"}
              fw={700}
              c={theme.colors.purple[5]}
            >
              Eixos Temáticos
            </Text>
          </Row>
          {loading && (
            <Row style={{ width: 336, display: "flex" }}>
              <RowItem center>
                <Loader />
              </RowItem>
            </Row>
          )}
          <BtnList
            buttons={eixos?.map((e) => ({
              children: e?.nome,
              onClick: () => {
                dispatch(setEixo(e?.id));
                push(`/eixo-tematico/${e?.nome.normalize("NFKD")}`);
              },
            }))}
          />
        </Row>
      </RowItem>
    </Row>
  );
};

export default Home;
