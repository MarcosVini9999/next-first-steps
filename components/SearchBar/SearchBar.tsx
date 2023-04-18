import React from "react";
import { DropdownMenu } from "@/components";
import Link from "next/link";

export function SearchBar() {
  const [city, setCity] = React.useState("");

  const handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") window.location.pathname = `/${city}`;
  };

  return (
    <React.Fragment>
      <input
        type="text"
        value={city}
        onChange={handleCityInput}
        onKeyDown={keyPress}
      />
      <Link href={`/${city}`}>search</Link>
      <DropdownMenu />
    </React.Fragment>
  );
}
