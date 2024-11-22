import { Row, RowItem } from "@/components/Row";

import Accordion from "@/components/Accordion";
import IconBtn from "@/components/IconBtn";
import { NextPage } from "next";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { Text } from "@mantine/core";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import thumb from "@/public/images/bgCadastro.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ConteudoPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!router?.query?.slug) router.push("/home");
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
  }, []);

  return (
    <Row>
      <RowItem>
        {data.map((d, index) => (
          <Row key={index}>
            <RowItem>
              <Accordion title={d.title} value={"default"}>
                {d?.videos?.map((v, index) => (
                  <Row key={index}>
                    <RowItem>
                      <VideoThumb
                        direction="row"
                        alt={v.title}
                        src={thumb}
                        title={v.title}
                        summarized
                        onClick={() =>
                          router.push(
                            `/eixo-tematico/${router?.query?.slug?.[0]}/genetica`
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

export default ConteudoPage;
