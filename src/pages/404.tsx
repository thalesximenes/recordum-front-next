import Head from "next/head";
import type { NextPage } from "next";

const Custom404: NextPage = () => {
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
