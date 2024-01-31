import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fontawesome-free-6.2.1-web/css/solid.css"
        />
        <link rel="stylesheet" href="/fontawesome-free-6.2.1-web/css/all.css" />
        <link
          rel="stylesheet"
          href="/fontawesome-free-6.2.1-web/css/brands.css"
        />
        <link
          rel="stylesheet"
          href="/fontawesome-free-6.2.1-web/css/regular.css"
        />
        <link
          rel="stylesheet"
          href="/fontawesome-free-6.2.1-web/css/fontawesome.css"
        />
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
