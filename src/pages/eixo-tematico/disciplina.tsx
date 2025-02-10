import { Row, RowItem } from "@/components/Row";
import { setDisciplina, startGetDisciplinas } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@/components/Accordion";
import { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const DisciplinaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eixo = router?.query?.slug?.[0];

  const { idEixo, disciplinas } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    // if (!router?.query?.slug) router.push("/home");
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
    dispatch(startGetDisciplinas(idEixo));
  }, []);

  return (
    <Row>
      <RowItem>
        <Accordion title={eixo?.toUpperCase()} value={"default"} titleCentered>
          <Row>
            {disciplinas?.map((d, index) => (
              <RowItem key={index}>
                <VideoThumb
                  alt={d?.nome}
                  src={thumb}
                  title={d?.nome}
                  description={d?.qtdAulas}
                  description2={eixo}
                  onClick={() => {
                    dispatch(setDisciplina(d?.id));
                    router.push(
                      `/eixo-tematico/${router?.query?.slug?.[0]}/${d?.nome}`
                    );
                  }}
                />
              </RowItem>
            ))}
            <RowItem>
              <VideoThumb
                alt="Int. à Genética"
                src={thumb}
                title="Int. à Genética"
                description="Genética"
                description2="Biologia"
                onClick={() =>
                  router.push(
                    `/eixo-tematico/${router?.query?.slug?.[0]}/genetica`
                  )
                }
              />
            </RowItem>
          </Row>
        </Accordion>
      </RowItem>
    </Row>
  );
};

export default DisciplinaPage;
