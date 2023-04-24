import React from "react";
import { GetServerSideProps } from "next";
import { LocationMeasurement } from "@/config/interfaces/ILocationMeasurement";
import { Button } from "@/components";
import { CityContext } from "@/contexts/city";

interface CityProps {
  LocationMeasurement: LocationMeasurement;
  message: string;
}

export default function City({ LocationMeasurement }: CityProps) {
  const { postNewCity } = React.useContext(CityContext);

  return (
    <React.Fragment>
      <h1>Cidade: {LocationMeasurement.name}</h1>
      <h1>País: {LocationMeasurement.sys.country}</h1>
      <h1>Temperatura: {LocationMeasurement.main.temp}</h1>
      <h1>Temperatura Max: {LocationMeasurement.main.temp_max}</h1>
      <h1>Temperatura Min: {LocationMeasurement.main.temp_min}</h1>
      <h1>Humidade: {LocationMeasurement.main.humidity}</h1>
      <h1>Sensação Térmica: {LocationMeasurement.main.feels_like}</h1>
      <Button
        onClick={() => {
          postNewCity(LocationMeasurement.name);
        }}
      >
        Salvar cidade
      </Button>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!(context.params && process.env.TOKEN)) {
    return {
      props: { LocationMeasurement: null, message: "No parameter or token" },
    };
  }

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${context.params.city}&appid=${process.env.TOKEN}`
  );

  const LocationMeasurement = await data.json();

  return {
    props: {
      LocationMeasurement,
      message: "Everything is ok",
    },
  };
};
