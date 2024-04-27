import "@/styles/globals.css";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
