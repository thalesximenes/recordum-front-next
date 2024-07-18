import "@mantine/core/styles.css";

import Layout from "@/components/Layout";
import { MantineProvider } from "@mantine/core";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { RootState } from "redux/rootReducer";
import Toast from "@/styles/toast";
import api from "api";
import { theme } from "../components/themes";
import { useEffect } from "react";
import wrapper from "@/redux/store";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const persistor = store.__persistor;

  const setApiAuthorization = (token: any) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  useEffect(() => {
    const token = (store.getState() as RootState).Session.token;
    if (token) {
      setApiAuthorization(token);
    }
  }, [store]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MantineProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toast autoClose={10000} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
};

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return {
        pageProps,
        initialState: store.getState(),
      };
    }
);

export default wrapper.withRedux(App);
