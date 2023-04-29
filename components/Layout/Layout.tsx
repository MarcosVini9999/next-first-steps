import React from "react";
import Head from "next/head";
import { Header, Footer, Button } from "@/components";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const renderThemeButton = () => {
    const currentColor = theme === "system" ? systemTheme : theme;

    return (
      <Button
        className="bg-gray-300 dark:bg-gray-700 fixed bottom-1 right-1 lg:bottom-4 lg:right-4"
        onClick={() => {
          setTheme(currentColor === "dark" ? "light" : "dark");
        }}
      >
        {currentColor === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </Button>
    );
  };

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
        <meta
          property="og:image:secure_url"
          content="https://weather-location-next.vercel.app/sky-sun-logo.svg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <div className="flex justify-between flex-col h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        {mounted && renderThemeButton()}
      </div>
    </React.Fragment>
  );
}
