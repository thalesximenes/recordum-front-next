import Head from "next/head";
import type { NextPage } from "next";
import { RootState } from "@/redux/rootReducer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Custom404: NextPage = () => {
  const router = useRouter();

  const { token } = useSelector((store: RootState) => store.Session);

  useEffect(() => {
    token && router.push("/home");
  }, []);

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          flexGrow: "1",
        }}
      >
        <h1>404 - Página não encontrada</h1>
      </div>
    </>
  );
};

export default Custom404;
