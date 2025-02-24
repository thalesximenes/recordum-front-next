import { Loader, Text, Tooltip } from "@mantine/core";
import { Row, RowItem } from "@/components/Row";
import { setAula, startGetTemas } from "@/redux/Conteudo/slice";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@/components/Accordion";
import IconBtn from "@/components/IconBtn";
import Img from "@/components/Img";
import NadaAqui from "@/public/images/nada_aqui.svg";
import { NextPage } from "next";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { RootState } from "@/redux/rootReducer";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { theme } from "@/components/themes";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const TemaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { width, isTablet } = useWindowSize();
  const { idDisciplina, temas, loading } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setPageName("Aulas"));
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
    dispatch(startGetTemas(idDisciplina));
  }, []);

  return (
    <>
      {loading && (
        <Row>
          <RowItem center>
            <Loader />
          </RowItem>
        </Row>
      )}
      {!loading && temas.length === 0 && (
        <Row>
          <RowItem center>
            <NadaAqui width={isTablet ? width / 2 : width - 60} />
          </RowItem>
        </Row>
      )}
      <Row>
        <RowItem>
          {temas.map((d, index) => (
            <Row key={index}>
              <RowItem>
                <Accordion
                  title={`${index + 1}. ${d.tema}`}
                  value={d?.aulas.length === 0 ? "" : "default"}
                >
                  {d?.aulas.length === 0 && (
                    <>
                      <Row>
                        <RowItem center>
                          <NadaAqui width={isTablet ? 350 : width - 60} />
                        </RowItem>
                      </Row>
                    </>
                  )}
                  {d?.aulas?.map((a, index) => (
                    <Row key={index}>
                      <>
                        {width >= 480 ? (
                          <VideoDesktop aula={a} />
                        ) : (
                          <VideoMobile aula={a} />
                        )}
                      </>
                    </Row>
                  ))}
                </Accordion>
              </RowItem>
            </Row>
          ))}
        </RowItem>
      </Row>
    </>
  );
};

const VideoDesktop = ({ aula }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  return (
    <>
      <RowItem>
        <VideoThumb
          direction="row"
          alt={aula?.nome}
          src={thumb}
          title={aula?.nome}
          summarized
          onClick={() => {
            dispatch(setAula(aula?.id));
            router.push(
              `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize(
                "NFC"
              )}`
            );
          }}
        />
      </RowItem>
      <Row
        style={{
          alignSelf: "center",
          justifyContent: "end",
          marginTop: 0,
          paddingLeft: 0,
        }}
      >
        <Text style={{ alignSelf: "center" }}>{+aula?.duracao} min. |</Text>
        <IconBtn disabled>
          <Rating width={30} />
        </IconBtn>
        <IconBtn disabled>
          <Quiz width={30} />
        </IconBtn>
      </Row>
    </>
  );
};

const VideoMobile = ({ aula }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  const { width } = useWindowSize();
  return (
    <RowItem>
      <Img
        src={thumb}
        alt={aula?.nome}
        width={width - 80}
        height={(width - 120) * 0.6}
        onClick={() => {
          dispatch(setAula(aula?.id));
          router.push(
            `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize(
              "NFC"
            )}`
          );
        }}
        onKeyDown={() => null}
      />
      <Row style={{ alignItems: "center" }}>
        <RowItem>
          <Tooltip label={aula?.nome}>
            <Text
              lh={"20px"}
              c={theme?.colors?.purple[6]}
              h={"100%"}
              fw={500}
              size="16px"
              style={{ alignSelf: "center" }}
              onClick={() => {
                dispatch(setAula(aula?.id));
                router.push(
                  `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize(
                    "NFC"
                  )}`
                );
              }}
            >
              {aula?.nome}
            </Text>
          </Tooltip>
        </RowItem>
        <Row
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: 0,
            paddingLeft: 0,
          }}
          wrap="nowrap"
        >
          <Text style={{ alignSelf: "center" }}>{+aula?.duracao} min. |</Text>
          <IconBtn disabled>
            <Rating width={30} />
          </IconBtn>
          <IconBtn disabled>
            <Quiz width={30} />
          </IconBtn>
        </Row>
      </Row>
    </RowItem>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default TemaPage;
