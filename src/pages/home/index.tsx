import { Row, RowItem } from "@/components/Row";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { setEixo, startGetEixos } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";

import BtnList from "@/components/BtnList";
import Card from "@/components/Card";
import { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import { Text } from "@mantine/core";
import VideoThumb from "@/components/VideoThumb";
import { theme } from "@/components/themes";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const dispatch = useDispatch();

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
                alt="Int. à Genética"
                src={thumb}
                title="Int. à Genética"
                description="Genética"
                description2="Biologia"
              />
            </Card>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Card title="Hora da Revisão">
              <VideoThumb
                alt="Conteúdo Y"
                src={thumb}
                title="Conteúdo Y"
                summarized
              />
            </Card>
          </RowItem>
        </Row>
      </HomeLayout>
    </>
  );
};

const HomeLayout = ({ children }) => (
  <Row style={{ flexDirection: "row", width: "100%" }}>
    <RowItem>{children}</RowItem>
    <SideMenu />
  </Row>
);

const SideMenu = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { eixos } = useSelector((store: RootState) => store.Conteudo);

  return (
    <Row style={{ marginTop: 0 }}>
      <Row style={{ flexDirection: "column" }}>
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
    </Row>
  );
};

export default Home;
