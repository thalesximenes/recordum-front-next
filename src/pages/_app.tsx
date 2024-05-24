import "@public/styles/globals.css";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import StoreProvider from "../redux/StoreProvider";
import { theme } from "../components/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </StoreProvider>
  );
}