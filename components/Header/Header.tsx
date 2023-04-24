import React from "react";
import Link from "next/link";
import { SearchBar } from "@/components";

export function Header() {
  return (
    <header className="dark:bg-slate-900 bg-slate-200 flex items-center justify-between p-2 w-full mc:px-5 sm:px-10 md:px-15 lg:px-20">
      <Link href="/" className="flex items-center space-x-1">
        <img className="w-5" src="/sky-sun-logo.svg" alt="sun and clouds" />
        <span className="font-bold text-2x1 tracking-tight whitespace-pre-wrap text-center">
          WHEATHER APP
        </span>
      </Link>
      <SearchBar />
    </header>
  );
}
