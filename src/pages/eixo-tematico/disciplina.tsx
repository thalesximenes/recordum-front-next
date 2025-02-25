import { Row, RowItem } from "@/components/Row";
import { setBackgroundImage, setPageName } from "@/redux/Session/slice";
import { setDisciplina, startGetDisciplinas } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";

import Accordion from "@/components/Accordion";
import NadaAqui from "@/public/images/nada_aqui.svg";
import { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import thumb from "@/public/images/bgCadastro.png";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const DisciplinaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eixo = router?.query?.slug?.[0];
  const { isTablet, width } = useWindowSize();

  const { idEixo, disciplinas, loading } = useSelector(
    (store: RootState) => store.Conteudo
  );

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setPageName("Disciplina"));
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
    dispatch(startGetDisciplinas(idEixo));
  }, []);

  return (
    <Row>
      <RowItem>
        <Accordion
          title={eixo?.toUpperCase()}
          value={"default"}
          titleCentered
          loading={loading}
        >
          <Row>
            {!loading && disciplinas.length === 0 ? (
              <RowItem>
                <Row>
                  <RowItem center>
                    <NadaAqui width={isTablet ? 350 : width - 60} />
                  </RowItem>
                </Row>
              </RowItem>
            ) : (
              <>
                {disciplinas?.map((d, index) => (
                  <RowItem key={index}>
                    <VideoThumb
                      alt={d?.nome}
                      src={thumb}
                      title={d?.nome.normalize("NFKC")}
                      width={width <= 480 && width - 80}
                      height={width <= 480 && (width - 120) * 0.6}
                      description={`${d?.quantidade_aulas || 0} aula(s)`}
                      description2={eixo}
                      onClick={() => {
                        dispatch(setDisciplina(d?.id));
                        router.push(
                          `/eixo-tematico/${
                            router?.query?.slug?.[0]
                          }/${d?.nome.normalize("NFD")}`
                        );
                      }}
                    />
                  </RowItem>
                ))}
              </>
            )}
          </Row>
        </Accordion>
      </RowItem>
    </Row>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default DisciplinaPage;
