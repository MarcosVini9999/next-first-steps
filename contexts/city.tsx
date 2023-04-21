import React from "react";
import { useStorage } from "@/hooks/useStorage";

interface CityContextInfo {
  citiesSaved: Array<string> | undefined;
  postNewCity: (city: string) => void;
}

interface CityProviderProps {
  children: React.ReactElement;
}

export const CityContext = React.createContext({} as CityContextInfo);

export function CityProvider({ children }: CityProviderProps) {
  const [citiesSaved, saveCities] = useStorage("cities", [] as Array<string>);

  const postNewCity = (city: string) => {
    const list = [...citiesSaved];
    if (citiesSaved.indexOf(city) >= 0) return;
    list.push(city);
    saveCities(list);
  };

  return (
    <CityContext.Provider value={{ citiesSaved, postNewCity }}>
      {children}
    </CityContext.Provider>
  );
}
