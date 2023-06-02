import { FormspreeProvider } from "@formspree/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <FormspreeProvider>
          <Main />
          <NextScript />
        </FormspreeProvider>
      </body>
    </Html>
  );
}
