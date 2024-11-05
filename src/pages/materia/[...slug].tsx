import { Row, RowItem } from "@/components/Row";

import Accordion from "@/components/Accordion";
import Btn from "@/components/Btn";
import IconBtn from "@/components/IconBtn";
import { NextPage } from "next";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { Text } from "@mantine/core";
import TextHover from "@/components/TextHover";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import { theme } from "@/components/themes";
import thumb from "../../../public/images/bgCadastro.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Materia: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
  }, []);

  if (router?.query?.slug.length > 1) {
    return (
      <>
        <PageGuide router={router} />
        <Row>
          <RowItem>
            {data.map((d) => (
              <Row>
                <RowItem>
                  <Accordion title={d.title} value={"default"}>
                    {d?.videos?.map((v) => (
                      <Row>
                        <RowItem>
                          <VideoThumb
                            direction="row"
                            alt={v.title}
                            src={thumb}
                            title={v.title}
                            summarized
                            onClick={() =>
                              router.push(
                                `/materia/${router?.query?.slug?.[0]}/genetica`
                              )
                            }
                          />
                        </RowItem>
                        <Row
                          style={{
                            alignSelf: "center",
                            marginTop: 0,
                          }}
                        >
                          <Text style={{ alignSelf: "center" }}>
                            {+v.duracao} min. |
                          </Text>
                          <IconBtn>
                            <Rating width={30} />
                          </IconBtn>
                          <IconBtn>
                            <Quiz width={30} />
                          </IconBtn>
                        </Row>
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
  }

  return (
    <>
      <PageGuide router={router} />
      <Row>
        <RowItem>
          <Accordion
            title={router?.query?.slug?.[0]?.toUpperCase()}
            value={"default"}
            titleCentered
          >
            <VideoThumb
              alt="Int. à Genética"
              src={thumb}
              title="Int. à Genética"
              description="Genética"
              description2="Biologia"
              onClick={() =>
                router.push(`/materia/${router?.query?.slug?.[0]}/genetica`)
              }
            />
          </Accordion>
        </RowItem>
      </Row>
    </>
  );
};

const PageGuide = ({ router }) => {
  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Row wrap="nowrap">
      <TextHover
        fw={500}
        style={{ cursor: `pointer`, width: "fit-content" }}
        c={theme?.colors?.purple[5]}
        hoverColor={theme?.colors?.purple[7]}
        textDecoration="underline"
        onClick={() => router.push("/home")}
      >
        Home
      </TextHover>
      {router?.query?.slug?.map((s, i) => {
        const link = router?.query?.slug?.slice(0, i + 1)?.join("/");
        return (
          <>
            <Text>{">"}</Text>
            <TextHover
              fw={500}
              style={{ cursor: `pointer`, width: "fit-content" }}
              c={theme?.colors?.purple[5]}
              hoverColor={theme?.colors?.purple[7]}
              textDecoration="underline"
              onClick={() => router.push(`/materia/${link}`)}
            >
              {formatText(s)}
            </TextHover>
          </>
        );
      })}
    </Row>
  );
};

const data = [
  {
    title: "Genética",
    videos: [{ link: "", title: "Introdução à Genética", duracao: 5 }],
  },
  {
    title: "Genética Mendeliana",
    videos: [
      { link: "", title: "1ª Lei de Mendel", duracao: 5 },
      {
        link: "",
        title: "2ª Lei de Mendel - Lei da Segregação Independente",
        duracao: 7,
      },
    ],
  },
];

export default Materia;
