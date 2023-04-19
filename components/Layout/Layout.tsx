import React from "react";
import Head from "next/head";
import { Header, Footer } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Wheater app</title>
        <link rel="icon" type="image/x-icon" href="/sky-sun-logo.ico"></link>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Weather Location Next" />
        <meta property="og:site_name" content="Weather Location Next" />
        <meta
          property="og:description"
          content="A website that uses a public weather api to look up any location the user wants"
        />
        <meta property="og:url" content="weather-location-next.vercel.app/" />
        <meta property="og:image" content="/sky-sun-logo.svg" />
        <meta property="og:image:secure_url" content="/sky-sun-logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/svg" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
