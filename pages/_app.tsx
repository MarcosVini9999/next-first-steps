import React from "react";
import { Layout } from "@/components";
import { ThemeProvider } from "next-themes";
import { CityProvider } from "@/contexts/city";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return mounted ? (
    <CityProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CityProvider>
  ) : (
    <h1>Loading</h1>
  );
}
