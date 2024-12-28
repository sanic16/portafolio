export const getLocalStorage = <T>(
  key: string,
  defaultValue: T,
  guard: (value: unknown) => value is T
): T => {
  if (typeof window !== "undefined") {
    console.warn(
      "localStorage is not available on the server, returning default value."
    );
    return defaultValue;
  }

  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    try {
      const parsedValue = JSON.parse(storedValue);
      if (guard(parsedValue)) {
        return parsedValue;
      } else {
        console.warn(
          `Value for key "${key}" is not of type ${typeof defaultValue}, returning default value.`
        );
      }
    } catch (error) {
      console.warn(
        `Error parsing value for key "${key}", returning default value:`,
        error
      );
    }
  }
  return defaultValue;
};

export const isMode = (value: unknown): value is Mode => {
  return value === "static" || value === "cycle";
};
export const isPrimary = (value: unknown): value is Primary => {
  if (typeof value === "object" && value !== null) {
    return (
      "--primary-color" in value &&
      typeof value["--primary-color"] === "string" &&
      "--primary-hue" in value &&
      typeof value["--primary-hue"] === "string"
    );
  }
  return false;
};
