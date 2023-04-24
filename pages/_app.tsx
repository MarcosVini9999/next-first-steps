import React from "react";
import { Layout } from "@/components";
import { ThemeProvider } from "next-themes";
import { CityProvider } from "@/contexts/city";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
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
