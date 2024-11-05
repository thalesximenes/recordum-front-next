import Accordion from "@/components/Accordion";
import Btn from "@/components/Btn";
import { Row, RowItem } from "@/components/Row";
import { setBackgroundImage } from "@/redux/Session/slice";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import bgMaterias from "@/public/images/bgMaterias.png";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { Text } from "@mantine/core";
import IconBtn from "@/components/IconBtn";
import TextHover from "@/components/TextHover";
import { theme } from "@/components/themes";

const Materia: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
  }, []);

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  if (router?.query?.slug.length > 1) {
    return (
      <>
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
          <Text>{">"}</Text>
          <TextHover
            fw={500}
            style={{ cursor: `pointer`, width: "fit-content" }}
            c={theme?.colors?.purple[5]}
            hoverColor={theme?.colors?.purple[7]}
            textDecoration="underline"
            onClick={() => router.push(`/materia/${router?.query?.slug?.[0]}`)}
          >
            {formatText(router?.query?.slug?.[0])}
          </TextHover>
          <Text>{">"}</Text>
          <TextHover
            fw={500}
            style={{ cursor: `pointer`, width: "fit-content" }}
            c={theme?.colors?.purple[5]}
            hoverColor={theme?.colors?.purple[7]}
            textDecoration="underline"
          >
            {formatText(router?.query?.slug?.[1])}
          </TextHover>
        </Row>
        <Row>
          <RowItem>
            {data.map((d) => (
              <Row>
                <RowItem>
                  <Accordion title={d.title} value={"default"}>
                    {d?.videos?.map((v) => (
                      <Row>
                        <RowItem>
                          <Btn>{v.title}</Btn>
                        </RowItem>
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
    <Row>
      <RowItem>
        <Accordion
          title={router?.query?.slug?.[0]?.toUpperCase()}
          titleCentered
        >
          <Btn
            onClick={() =>
              router.push(`/materia/${router?.query?.slug?.[0]}/genetica`)
            }
          >
            Teste
          </Btn>
        </Accordion>
      </RowItem>
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
