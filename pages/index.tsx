import { CityWeatherCard } from "@/components";
import React from "react";

export default function Home() {
  const cities = ["Sobral", "Crateus", "Russas"];

  return (
    <React.Fragment>
      <main>
        {cities.map((city) => (
          <CityWeatherCard city={city} key={city.toLowerCase()} />
        ))}
      </main>
    </React.Fragment>
  );
}
