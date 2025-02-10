import { Row, RowItem } from "@/components/Row";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@/components/Accordion";
import IconBtn from "@/components/IconBtn";
import { NextPage } from "next";
import Quiz from "@/public/images/quiz.svg";
import Rating from "@/public/images/rating.svg";
import { RootState } from "@/redux/rootReducer";
import { Text } from "@mantine/core";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import { startGetTemas } from "@/redux/Conteudo/slice";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const TemaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  const { idDisciplina, temas } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
    dispatch(startGetTemas(idDisciplina));
  }, []);

  return (
    <Row>
      <RowItem>
        {temas.map((d, index) => (
          <Row key={index}>
            <RowItem>
              <Accordion title={d.tema} value={"default"}>
                {d?.aulas?.map((v, index) => (
                  <Row key={index}>
                    <RowItem>
                      <VideoThumb
                        direction="row"
                        alt={v.nome}
                        src={thumb}
                        title={v.nome}
                        summarized
                        onClick={() =>
                          router.push(
                            `/eixo-tematico/${eixo}/${disciplina}/${v.nome}`
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

export default TemaPage;
