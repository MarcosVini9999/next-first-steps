import React from "react";
import { Layout } from "@/components";
import { ThemeProvider } from "next-themes";
import { CityProvider } from "@/contexts/city";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <CityProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CityProvider>
  );
}
