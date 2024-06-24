import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { MantineProvider } from "@mantine/core";
import { RootState } from "redux/rootReducer";
import StoreProvider from "../redux/StoreProvider";
import Toast from "@/styles/toast";
import api from "api";
import { theme } from "../components/themes";
import { useEffect } from "react";
import { useStore } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {
  const store: any = useStore();

  useEffect(() => {
    const token = (store.getState() as RootState)["Session"]["token"];
    if (token) {
      setApiAuthorization(token);
    }
  });

  const setApiAuthorization = (token: any) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  return (
    <MantineProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toast autoClose={10000} />
    </MantineProvider>
  );
};

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <App Component={Component} {...pageProps} />
    </StoreProvider>
  );
};

export default AppWrapper;
