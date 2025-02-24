import { AspectRatio, Image, Modal, Progress, Text } from "@mantine/core";
import { Aula, MapaTexto } from "@/redux/Conteudo/interfaces";
import { Row, RowItem } from "@/components/Row";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { startGetAula, startGetMapasTextos } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CornellNotepad from "@/components/CornellNotepad";
import IconBtn from "@/components/IconBtn";
import ImgMindMap from "@/components/ImgMindMap";
import InfoCircle from "@/public/images/info-circle.svg";
import MetodoCornell from "@/public/images/metodo-cornell.png";
import { NextPage } from "next";
import Rating from "@/public/images/rating.svg";
import { RootState } from "@/redux/rootReducer";
import SideMenu from "@/components/SideMenu";
import Tabs from "@/components/Tabs";
import TitleSideMenu from "@/components/TitleSideMenu";
import { theme } from "@/components/themes";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const AulaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { width, isDesktop } = useWindowSize();

  const [open, setOpen] = useState(false);

  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  const { idAula, aula, mapasTextos } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setPageName("Aula"));
    dispatch(setBackgroundImage({ backgroundImage: "" }));
    dispatch(startGetAula(idAula));
    dispatch(startGetMapasTextos(idAula));
  }, []);

  return (
    <>
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
        {isDesktop && <Row style={{ width: "30%" }} />}
        <SideMenu width={width * 0.3 - 40}>
          <Row wrap="nowrap">
            <RowItem>
              <TitleSideMenu eixo={eixo} disciplina={disciplina} />
            </RowItem>
            <RowItem end>
              <IconBtn>
                <Rating width={40} />
              </IconBtn>
            </RowItem>
          </Row>
          <div className={"content"} style={{ marginTop: "10px" }}>
            <Row>
              <RowItem>
                <Text
                  style={{ marginTop: 0 }}
                  c={theme.colors.gray[6]}
                  fw={450}
                >
                  1/5 VIDEOS COMPLETOS
                </Text>
                <Progress.Root>
                  <Progress.Section value={20} color={theme.colors.purple[5]} />
                </Progress.Root>
              </RowItem>
            </Row>
            {data.map((d, index) => (
              <>
                <Row key={index}>
                  <RowItem>
                    <Text c={theme.colors.gray[7]}>{`${
                      index + 1
                    } - ${d.title.toUpperCase()}`}</Text>
                  </RowItem>
                </Row>
                {d.aulas.map((a, index) => (
                  <Row key={index}>
                    <RowItem>
                      <Text c={theme.colors.purple[5]} fw={500}>
                        {a.title}
                      </Text>
                    </RowItem>
                  </Row>
                ))}
              </>
            ))}
          </div>
        </SideMenu>
      </Row>
      <Row>
        <RowItem center style={{ gap: 0 }}>
          <Text size="xl" c={theme.colors.purple[5]} fw={600}>
            Notas Cornell
          </Text>
          <IconBtn onClick={() => setOpen(true)}>
            <InfoCircle width={20} />
          </IconBtn>
        </RowItem>
      </Row>
      <Row style={{ paddingBottom: "0;625rem" }}>
        <RowItem>
          <CornellNotepad />
        </RowItem>
      </Row>
      <br />
      <Modal opened={open} onClose={() => setOpen(false)} size={750}>
        <Row>
          <RowItem>
            <Image src={MetodoCornell.src} alt={"Metodo Cornell"} />
          </RowItem>
        </Row>
      </Modal>
    </>
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
              src={`${process.env.NEXT_PUBLIC_BASE_URL_BACK}${aula.mapa.slice(
                1
              )}`}
              // src={genetica}
              mindMaps={mapasTextos}
              alt={aula.nome}
              width={750}
              // height={375}
            />
          </div>
        </RowItem>
      </Row>
    </>
  );
};

const data = [
  {
    title: "Introdução à Genética",
    aulas: [{ title: "Introdução à Genética - Conceitos Iniciais" }],
  },
  {
    title: "Genética Mendeliana",
    aulas: [
      { title: "1ª Lei de Mendel" },
      { title: "2ª Lei de Mendel - Lei da Segregação Independente" },
    ],
  },
  {
    title: "Genética Moderna",
    aulas: [{ title: "Aula 1" }, { title: "Aula 2" }],
  },
];

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default AulaPage;
