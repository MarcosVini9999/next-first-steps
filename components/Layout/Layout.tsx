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
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
