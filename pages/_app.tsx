import Layout from "@/layout/default";
import SmoothScrolling from "@/layout/lenis";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SmoothScrolling>
        <Component {...pageProps} />
      </SmoothScrolling>
    </Layout>
  );
}

