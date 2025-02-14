import { AspectRatio, Text } from "@mantine/core";
import { Aula, MapaTexto } from "@/redux/Conteudo/interfaces";
import { Row, RowItem } from "@/components/Row";
import { startGetAula, startGetMapasTextos } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useRef } from "react";

import Accordion from "@/components/Accordion";
import IconBtn from "@/components/IconBtn";
import Image from "next/image";
import ImgMindMap from "@/components/ImgMindMap";
import ImgMindMapViewer from "@/components/ImgMindMap/ImgMindMapViewer";
import { NextPage } from "next";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { RootState } from "@/redux/rootReducer";
import Tabs from "@/components/Tabs";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import genetica from "../../../public/images/genetica.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import { theme } from "@/components/themes";
import thumb from "@/public/images/bgCadastro.png";
import { useRouter } from "next/router";

const AulaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firstLoad = useRef(false);

  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  const { idAula, aula, mapasTextos } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setBackgroundImage({ backgroundImage: "" }));
    dispatch(startGetAula(idAula));
    dispatch(startGetMapasTextos(idAula));
  }, []);

  return (
    <Row>
      <RowItem style={{ width: "fill-content" }}>
        <Tabs
          items={[
            {
              label: "Aula",
              content: <TabConteudo aula={aula} />,
            },
            {
              label: "Revisão",
              content: <TabRevisao aula={aula} mapasTextos={mapasTextos} />,
            },
          ]}
        />
      </RowItem>
      <Row style={{ width: "30%" }}>
        <RowItem>aqui</RowItem>
      </Row>
    </Row>
  );
};

const TabConteudo = ({ aula }: { aula: Aula }) => {
  return (
    <>
      <Row>
        <RowItem>
          <Text size="lg" c={theme.colors.purple[5]} fw={600}>
            {aula.nome}
          </Text>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <AspectRatio ratio={16 / 9} maw={900}>
            <iframe
              src={aula.aula}
              title={aula.nome}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ alignSelf: "left" }}
            />
          </AspectRatio>
        </RowItem>
      </Row>
    </>
  );
};

const TabRevisao = ({
  aula,
  mapasTextos,
}: {
  aula: Aula;
  mapasTextos: MapaTexto[];
}) => {
  return (
    <>
      <Row>
        <RowItem>
          <Text size="lg" c={theme.colors.purple[5]} fw={600}>
            #Revisao: {aula.nome}
          </Text>
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <div>
            <ImgMindMap
              // src={`http://127.0.0.1:8000${aula.mapa}`}
              src={genetica}
              mindMaps={mapasTextos}
              alt={aula.nome}
              width={750}
              height={375}
            />
          </div>
        </RowItem>
      </Row>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default AulaPage;
