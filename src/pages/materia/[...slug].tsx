import AulaPage from "./aula";
import MateriaPage from ".";
import { NextPage } from "next";
import PageGuide from "@/components/PageGuide";
import { useRouter } from "next/router";

const Materia: NextPage = () => {
  const router = useRouter();

  switch (router?.query?.slug?.length) {
    case 1:
      return (
        <>
          <PageGuide />
          <MateriaPage />
        </>
      );
    case 2:
      return (
        <>
          <PageGuide />
          <AulaPage />
        </>
      );
    default:
      <></>;
  }
};

export default Materia;
