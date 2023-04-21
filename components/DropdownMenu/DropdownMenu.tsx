import { CityContext } from "@/contexts/city";
import React from "react";

export function DropdownMenu() {
  const { citiesSaved } = React.useContext(CityContext);
  const [list, setList] = React.useState([] as Array<string> | undefined);

  React.useEffect(() => setList(citiesSaved), [citiesSaved]);

  return (
    <React.Fragment>
      {list?.map((city) => (
        <h1 key={city}>{city}</h1>
      ))}
    </React.Fragment>
  );
}
