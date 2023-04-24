import { CityContext } from "@/contexts/city";
import React from "react";

interface DropdownMenuProps {
  open: boolean;
}

export function DropdownMenu({ open }: DropdownMenuProps) {
  const { citiesSaved } = React.useContext(CityContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const renderCities = () => {
    return citiesSaved && citiesSaved.length > 0 ? (
      citiesSaved?.map((city) => (
        <h1
          className="rounded p-3 hover:cursor-pointer hover:bg-slate-100 hover:dark:bg-slate-500"
          key={city}
          onClick={() => {
            window.location.pathname = `/${city}`;
          }}
        >
          {city}
        </h1>
      ))
    ) : (
      <h1>NENHUMA CIDADE SALVA</h1>
    );
  };

  return (
    <div
      className={`max-h-48 overflow-y-scroll animate-fade-in-down flex flex-col gap-2 absolute p-3 rounded w-full bg-slate-300 dark:bg-slate-600 ${
        open ? "block" : "hidden"
      }`}
    >
      {mounted && renderCities()}
    </div>
  );
}
