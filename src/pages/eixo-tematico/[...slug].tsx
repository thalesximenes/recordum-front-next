import BreadCrumbs from "@/components/BreadCrumbs";
import DisciplinaPage from "./disciplina";
import { NextPage } from "next";
import TemaPage from "./tema";
import { useRouter } from "next/router";

const Materia: NextPage = () => {
  const router = useRouter();

  switch (router?.query?.slug?.length) {
    case 1:
      return (
        <>
          <BreadCrumbs />
          <DisciplinaPage />
        </>
      );
    case 2:
      return (
        <>
          <BreadCrumbs />
          <TemaPage />
        </>
      );
    case 3:
      return (
        <>
          <BreadCrumbs />
        </>
      );
    default:
      <></>;
  }
};

export default Materia;
