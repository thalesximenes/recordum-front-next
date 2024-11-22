import BreadCrumbs from "@/components/BreadCrumbs";
import ConteudoPage from "./conteudo";
import MateriaPage from "./materia";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Materia: NextPage = () => {
  const router = useRouter();
  console.log("aqui");

  switch (router?.query?.slug?.length) {
    case 1:
      return (
        <>
          <BreadCrumbs />
          <MateriaPage />
        </>
      );
    case 2:
      return (
        <>
          <BreadCrumbs />
          <ConteudoPage />
        </>
      );
    default:
      <></>;
  }
};

export default Materia;
