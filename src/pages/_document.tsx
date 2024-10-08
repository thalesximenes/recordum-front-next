import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href={`/recordum/favicon.ico`} />
        <link rel="manifest" href={`/recordum/manifest.json`} />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href={`/recordum/icons/icon-192x192.png`}
        />
        <meta name="description" content="Recordum" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
