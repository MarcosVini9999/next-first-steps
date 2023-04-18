import React from "react";
import { CityWeatherDialog } from "@/components";

interface CityWeatherCardProps {
  city: string;
}

export const CityWeatherCard: React.FC<CityWeatherCardProps> = ({ city }) => {
  return (
    <React.Fragment>
      <h1>{city}</h1>
      <CityWeatherDialog />
    </React.Fragment>
  );
};
