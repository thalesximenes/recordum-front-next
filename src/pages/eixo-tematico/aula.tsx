import { Row, RowItem } from "@/components/Row";
import { startGetAula, startGetMapasTextos } from "@/redux/Conteudo/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useRef } from "react";

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
import thumb from "@/public/images/bgCadastro.png";
import { useRouter } from "next/router";

const AulaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firstLoad = useRef(false);

  const eixo = router?.query?.slug?.[0];
  const disciplina = router?.query?.slug?.[1];

  const { idAula, aula } = useSelector((store: RootState) => store.Conteudo);

  
  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setBackgroundImage({ backgroundImage: "" }));
    dispatch(startGetAula(idAula));
    dispatch(startGetMapasTextos(idAula));
  }, []);

  return (
    <Row>
      <RowItem></RowItem>
    </Row>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default AulaPage;
