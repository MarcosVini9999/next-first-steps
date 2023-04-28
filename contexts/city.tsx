import React from "react";
import { useStorage } from "@/hooks/useStorage";

interface CityContextInfo {
  citiesSaved: Array<string> | undefined;
  postNewCity: (city: string) => void;
  deleteCity: (city: string) => void;
}

interface CityProviderProps {
  children: React.ReactElement;
}

export const CityContext = React.createContext({} as CityContextInfo);

export function CityProvider({ children }: CityProviderProps) {
  const [citiesSaved, saveCities, removeValue] = useStorage("cities", [] as Array<string>);

  const postNewCity = (city: string) => {
    const list = [...citiesSaved];
    if (citiesSaved.indexOf(city) >= 0) return;
    list.push(city);
    saveCities(list);
  };

  const deleteCity = (city: string) => {
    removeValue(city);
  };

  return (
    <CityContext.Provider value={{ citiesSaved, postNewCity, deleteCity }}>
      {children}
    </CityContext.Provider>
  );
}
