export const storage = (action: "set" | "get", key: string, value?: any) => {
  if (typeof window === "undefined") return;
  if (action === "set") localStorage.setItem(key, JSON.stringify(value));
  else if (action === "get")
    return JSON.parse(localStorage.getItem(key) || "[]");
};
