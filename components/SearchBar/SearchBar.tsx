import React from "react";
import { DropdownMenu } from "@/components";

export function SearchBar() {
  return (
    <React.Fragment>
      <input type="text" />
      <button>search</button>
      <DropdownMenu />
    </React.Fragment>
  );
}
