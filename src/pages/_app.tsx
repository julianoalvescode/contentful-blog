import { AppProps } from "next/app";
import "@/design-system/styles/globals.scss";

import { Inter } from "next/font/google";
import Head from "next/head";
import { Footer } from "@/design-system/components/Footer";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
