export const getLocalStorage = <T>(
  key: string,
  defaultValue: T,
  guard: (value: unknown) => value is T
): T => {
  if (typeof window === "undefined") {
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

export const isBg = (value: unknown): value is Bg => {
  if (typeof value === "object" && value !== null) {
    return (
      "--white-lightness" in value &&
      typeof value["--white-lightness"] === "string" &&
      "--light-lightness" in value &&
      typeof value["--light-lightness"] === "string" &&
      "--dark-lightness" in value &&
      typeof value["--dark-lightness"] === "string" &&
      "--black-lightness" in value &&
      typeof value["--black-lightness"] === "string" &&
      "--white-color" in value &&
      typeof value["--white-color"] === "string" &&
      "--light-color" in value &&
      typeof value["--light-color"] === "string" &&
      "--dark-color" in value &&
      typeof value["--dark-color"] === "string" &&
      "--black-color" in value &&
      typeof value["--black-color"] === "string"
    );
  }
  return false;
};

export const isTheme = (value: unknown): value is Theme => {
  if (typeof value === "object" && value !== null) {
    if (
      "primary" in value &&
      isPrimary(value.primary) &&
      "bg" in value &&
      isBg(value.bg)
    ) {
      return true;
    }
  }
  return false;
};

type tokenStorage = {
  token: string;
  exp: number;
};

export const getTokenFromLocalStorage = (
  key: string
): tokenStorage | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    try {
      const parsedValue = JSON.parse(storedValue);
      if (
        isTokenStorage(parsedValue) &&
        parsedValue.exp > Math.floor(Date.now() / 1000)
      ) {
        return parsedValue;
      } else {
        console.warn(`
          The parsed value does not match the expected type.
          `);
      }
    } catch (error) {
      console.warn(
        `
        Error parsing the stored value.
        `,
        error
      );
    }
  }

  return undefined;
};

const isTokenStorage = (value: unknown): value is tokenStorage => {
  if (typeof value === "object" && value !== null) {
    return (
      "token" in value &&
      typeof value.token === "string" &&
      "exp" in value &&
      typeof value.exp === "number"
    );
  }
  return false;
};
