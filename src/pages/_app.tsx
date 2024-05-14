import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "ClashDisplay/ClashDisplay-Bold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Semibold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "ClashDisplay/ClashDisplay-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const headers = async () => {
  return [
    {
      source: "/*",
      headers: [
        {
          key: "content-security-policy",
          value:
            "default-src 'self'; img-src *; media-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' data:; connect-src *",
        },
        {
          key: "strict-transport-security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "x-content-type-options",
          value: "nosniff",
        },
        {
          key: "x-frame-options",
          value: "sameorigin",
        },
        {
          key: "x-xss-protection",
          value: "1; mode=block",
        },
        {
          key: "referrer-policy",
          value: "same-origin, strict-origin-when-cross-origin",
        },
        {
          key: "permissions-policy",
          value:
            "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), geolocation=self",
        },
      ],
    },
  ];
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={clashDisplay.className}>
        <MantineProvider
          theme={{
            colorScheme: "light",
            primaryColor: "blue",
            fontFamily: "Clash Display, sans-serif",
          }}
        >
          <Notifications
            position="top-right"
            zIndex={3000}
            limit={3}
            autoClose={4000}
          />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </MantineProvider>
      </main>
    </>
  );
}
