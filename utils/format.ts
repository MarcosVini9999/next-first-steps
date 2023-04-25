import convert from "convert";

export const KelvinToCelsius = (kevil: number) => {
  return Number(convert(kevil, "kelvin").to("celsius").toFixed(2));
};

export const MetersTokilometres = (Meters: number) => {
  return Number(convert(Meters, "meters").to("kilometre").toFixed(2));
};
