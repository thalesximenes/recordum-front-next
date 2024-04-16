import "@public/styles/globals.css";

import type { AppProps } from "next/app";
import StoreProvider from "../redux/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
