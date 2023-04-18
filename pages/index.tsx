import React from "react";
import { CityWeatherCard } from "@/components";

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
