import { Row, RowItem } from "@/components/Row";

import BtnList from "@/components/BtnList";
import Card from "@/components/Card";
import { NextPage } from "next";
import VideoThumb from "@/components/VideoThumb";
import { setBackgroundImage } from "@/redux/Session/slice";
import thumb from "../../../public/images/bgCadastro.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundImage({ backgroundImage: "" }));
  }, []);

  return (
    <>
      <HomeLayout>
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
  return (
    <Row style={{ marginTop: 0 }}>
      <Row style={{ flexDirection: "column" }}>
        <BtnList
          buttons={[
            { children: "Teste", onClick: () => push("/materia/teste") },
            { children: "Teste" },
            { children: "Teste" },
            { children: "Teste" },
            { children: "Teste" },
            { children: "Teste" },
            { children: "Teste" },
            { children: "Teste" },
          ]}
        />
      </Row>
    </Row>
  );
};

export default Home;
