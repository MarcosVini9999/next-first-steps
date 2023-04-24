import React from "react";
import Link from "next/link";
import { Button } from "../Button/Button";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const [city, setCity] = React.useState("");
  const [dropdownMenStatus, setDropdownMenStatus] = React.useState(false);

  const handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") window.location.pathname = `/${city}`;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div
        className="relative"
        onMouseMove={() => {
          setDropdownMenStatus(true);
        }}
        onMouseOut={() => {
          setDropdownMenStatus(false);
        }}
      >
        <input
          type="text"
          value={city}
          onChange={handleCityInput}
          onKeyDown={keyPress}
          className="p-2 w-32 font-bold text-sm rounded sm:w-60 md:text-base md:w-80 lg:text-2xl lg:w-96"
        />
        <DropdownMenu open={dropdownMenStatus} />
      </div>
      <Link href={`/${city}`}>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 sm:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Button>
      </Link>
    </div>
  );
}
