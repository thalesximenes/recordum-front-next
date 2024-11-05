import { Row, RowItem } from "@/components/Row";

import Accordion from "@/components/Accordion";
import { NextPage } from "next";
import VideoThumb from "@/components/VideoThumb";
import bgMaterias from "@/public/images/bgMaterias.png";
import { setBackgroundImage } from "@/redux/Session/slice";
import thumb from "@/public/images/bgCadastro.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MateriaPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!router?.query?.slug) router.push("/home");
    dispatch(setBackgroundImage({ backgroundImage: bgMaterias.src }));
  }, []);

  return (
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
  );
};

export default MateriaPage;
