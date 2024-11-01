import Accordion from "@/components/Accordion";
import Btn from "@/components/Btn";
import { Row, RowItem } from "@/components/Row";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Materia: NextPage = () => {
  const router = useRouter();
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

export default Materia;
