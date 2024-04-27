/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-css-tags */
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

        {/* Meta Tags */}

        <title>Pennywise — A penny saved is apenny earned.</title>
        <meta http-equiv="Content-Type" content="text/html" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Toluwalope Akinkunmi" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="yandex" content="noyaca" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        <meta
          name="copyright"
          content="Pennywise — A penny saved is apenny earned."
        />

        <meta
          name="title"
          content="Pennywise — A penny saved is apenny earned."
        />
        <meta
          name="description"
          content="We simplify finances with our intuitive app, automating expense tracking and savings management, empowering you to stay financially healthy."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iampennywise.com/" />
        <meta
          property="og:title"
          content="Pennywise — A penny saved is apenny earned."
        />
        <meta
          property="og:description"
          content="We simplify finances with our intuitive app, automating expense tracking and savings management, empowering you to stay financially healthy."
        />
        <meta
          property="og:image"
          content="https://iampennywise.com/preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iampennywise.com/" />
        <meta
          property="twitter:title"
          content="Pennywise — A penny saved is apenny earned."
        />
        <meta
          property="twitter:description"
          content="We simplify finances with our intuitive app, automating expense tracking and savings management, empowering you to stay financially healthy."
        />
        <meta
          property="twitter:image"
          content="https://iampennywise.com/preview.png"
        />
      </head>
      <Head />
      <body className="bg-[#000B17]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
