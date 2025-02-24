import "@mantine/core/styles.css";
import "react-toastify/dist/ReactToastify.css";

import api, { configureApi } from "api/index";

import Layout from "@/components/Layout";
import { MantineProvider } from "@mantine/core";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { RootState } from "redux/rootReducer";
import Toast from "@/styles/toast";
import { theme } from "../components/themes";
import { useEffect } from "react";
import wrapper from "@/redux/store";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const persistor = store.__persistor;

  configureApi(store);

  const setApiAuthorization = (token: any) => {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
  };

  useEffect(() => {
    const token = (store.getState() as RootState).Session.token;

    if (token) {
      setApiAuthorization(token);
    }
  }, []);

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

export default wrapper.withRedux(App);
