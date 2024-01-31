import "@/styles/globals.css";
import type { AppProps } from "next/app";

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
      path: "ClashDisplay/ClashDisplay-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clashDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}
