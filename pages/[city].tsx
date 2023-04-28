import React from "react";
import { GetServerSideProps } from "next";
import { LocationMeasurement } from "@/config/interfaces/ILocationMeasurement";
import { Button } from "@/components";
import { CityContext } from "@/contexts/city";
import { KelvinToCelsius, MetersTokilometres } from "@/utils/format";

interface CityProps {
  locationMeasurement: LocationMeasurement;
  message: string;
}

export default function City({ locationMeasurement }: CityProps) {
  const { citiesSaved, postNewCity, deleteCity } = React.useContext(CityContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <React.Fragment>
      {locationMeasurement.name ? (
        <div className="bg-zinc-400 dark:bg-slate-800 h-full p-10">
          <h1 className="flex items-center gap-2 font-bold text-2xl md:text-4xl lg:text-5xl">
            <img
              src={`https://openweathermap.org/img/wn/${locationMeasurement.weather[0].icon}@2x.png`}
              alt="icon"
            />
            {locationMeasurement.name}, {locationMeasurement.sys.country}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </h1>
          <div className="m-3 p-3">
            <h1>Temperatura: {KelvinToCelsius(locationMeasurement.main.temp)} °C</h1>
            <h1>Temperatura Max: {KelvinToCelsius(locationMeasurement.main.temp_max)} °C</h1>
            <h1>Temperatura Min: {KelvinToCelsius(locationMeasurement.main.temp_min)} °C</h1>
            <h1>Humidade: {locationMeasurement.main.humidity}%</h1>
            <h1>Sensação Térmica: {KelvinToCelsius(locationMeasurement.main.feels_like)} °C</h1>
            <h1>Velocidade do Vento: {locationMeasurement.wind.speed} m/s</h1>
            <h1>Visibilidade: {MetersTokilometres(locationMeasurement.visibility)} Km</h1>
          </div>
          {mounted &&
          citiesSaved?.filter((city) => city === locationMeasurement.name)[0] ===
            locationMeasurement.name ? (
            <Button
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700"
              onClick={() => {
                deleteCity(locationMeasurement.name);
              }}
            >
              Salva !!!
            </Button>
          ) : (
            <Button
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700"
              onClick={() => {
                postNewCity(locationMeasurement.name);
              }}
            >
              Salvar cidade
            </Button>
          )}
        </div>
      ) : (
        <h1 className="text-center">Cidade não encontrada ☹</h1>
      )}
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!(context.params && process.env.TOKEN)) {
    return {
      props: { locationMeasurement: null, message: "No parameter or token" },
    };
  }

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${context.params.city}&appid=${process.env.TOKEN}`
  );

  const locationMeasurement = await data.json();

  return {
    props: {
      locationMeasurement,
      message: "Everything is ok",
    },
  };
};
