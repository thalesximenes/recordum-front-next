import { Row, RowItem } from "@/components/Row";

import Accordion from "@/components/Accordion";
import BreadCrumbs from "@/components/BreadCrumbs";
import { NextPage } from "next";

const EixoTematico: NextPage = () => {
  return (
    <>
      <BreadCrumbs />
      <Row style={{ textAlign: "center", justifyContent: "center" }}>
        <RowItem>
          <Accordion
            title="Nenhum resultado encontrado"
            value="default"
            titleCentered
          />
        </RowItem>
      </Row>
    </>
  );
};

export default EixoTematico;
