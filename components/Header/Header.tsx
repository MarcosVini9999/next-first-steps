import React from "react";
import Link from "next/link";
import { Button, DropdownMenu, SearchBar } from "@/components";
import { useTheme } from "next-themes";

export function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeButton = () => {
    const currentColor = theme === "system" ? systemTheme : theme;

    return (
      <Button
        className="bg-gray-300 dark:bg-gray-700"
        onClick={() => {
          setTheme(currentColor === "dark" ? "light" : "dark");
        }}
      >
        {currentColor === "dark" ? (
          <img src="/moon.svg" alt="moon svg" />
        ) : (
          <img src="/sun.svg" alt="sun svg" />
        )}
      </Button>
    );
  };

  return (
    <header className="inline-flex">
      <Link href="/" className="flex items-center space-x-1">
        <img className="w-7" src="/sky-sun-logo.svg" alt="sun and clouds" />
        <span className="font-bold text-2x1 tracking-tight whitespace-nowrap">
          WHEATHER APP
        </span>
      </Link>
      <SearchBar />
      <DropdownMenu />
      {renderThemeButton()}
    </header>
  );
}
