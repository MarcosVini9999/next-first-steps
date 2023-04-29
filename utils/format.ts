import convert from "convert";

export const KelvinToCelsius = (kevil: number) => {
  return Number(convert(kevil, "kelvin").to("celsius").toFixed(2));
};

export const MetersTokilometres = (Meters: number) => {
  return Number(convert(Meters, "meters").to("kilometre").toFixed(2));
};

export const UnixToLocalTime = (dt: number, timezone: number) => {
  const time = new Date((dt + timezone) * 1000)
    .toISOString()
    ?.match(/\d{2}:\d{2}/)
    ?.toString();
  return time?.startsWith("0") ? time.slice(1) : time;
};

export const DegToCompass = (degree: number) => {
  const value = degree / 22.5 + 0.5;
  const compass = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return compass[Math.floor(value % 16)];
};
