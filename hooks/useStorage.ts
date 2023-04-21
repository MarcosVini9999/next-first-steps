import React from "react";

import { storage } from "@/utils/storage";

export function useStorage(key: string, initialValue?: any) {
  const [value, setValue] = React.useState<string | any>(
    () => storage("get", key) || initialValue
  );

  const storeValue = (newValue: any) => {
    setValue(newValue);
    storage("set", key, newValue);
  };

  return [value, storeValue];
}
