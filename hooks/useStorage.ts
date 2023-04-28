import React from "react";

import { storage } from "@/utils/storage";

export function useStorage(key: string, initialValue?: any) {
  const [value, setValue] = React.useState<any>(() => storage("get", key) || initialValue);

  const storeValue = (newValue: any) => {
    setValue(newValue);
    storage("set", key, newValue);
  };

  const removeValue = (valueRemoved: any) => {
    const newValue = [...value.filter((currentValue: any) => currentValue !== valueRemoved)];
    setValue(newValue);
    storage("set", key, newValue);
  };

  return [value, storeValue, removeValue];
}
