import { AppProps } from "next/app";
import "@/design-system/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
