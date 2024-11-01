import { Row, RowItem } from "@/components/Row";

import BtnList from "@/components/BtnList";
import Card from "@/components/Card";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <HomeLayout>
        <Row>
          <RowItem>
            <Card title="Continue Assistindo">Vídeo</Card>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <Card title="Hora da Revisão">Vídeo Resumido</Card>
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
