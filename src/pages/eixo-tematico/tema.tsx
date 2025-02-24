import { Row, RowItem } from "@/components/Row";
import { Text, Tooltip } from "@mantine/core";
import { setAula, startGetTemas } from "@/redux/Conteudo/slice";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@/components/Accordion";
import IconBtn from "@/components/IconBtn";
import Img from "@/components/Img";
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
  const { width } = useWindowSize();
  const { idDisciplina, temas } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setPageName("Aulas"));
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
    dispatch(startGetTemas(idDisciplina));
  }, []);

  return (
    <Row>
      <RowItem>
        {temas.map((d, index) => (
          <Row key={index}>
            <RowItem>
              <Accordion title={`${index + 1}. ${d.tema}`} value={"default"}>
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
              `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize("NFC")}`
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
        <IconBtn>
          <Rating width={30} />
        </IconBtn>
        <IconBtn>
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
            `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize("NFC")}`
          );
        }}
        onKeyDown={() => null}
      />
      <Row style={{ flexWrap: "nowrap", alignItems: "center" }}>
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
                  `/eixo-tematico/${eixo}/${disciplina}/${aula?.nome.normalize("NFC")}`
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
            justifyContent: "end",
            marginTop: 0,
            paddingLeft: 0,
          }}
        >
          <Text style={{ alignSelf: "center" }}>{+aula?.duracao} min. |</Text>
          <IconBtn>
            <Rating width={30} />
          </IconBtn>
          <IconBtn>
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
