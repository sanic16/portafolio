import { createContext } from "react";

export const ContextTheme = createContext<ThemeContext>({
  theme: {
    primary: {
      "--primary-hue": "350",
      "--primary-color": "hsl(350, 88%, 36%)",
    },
    bg: {
      "--white-lightness": "100%",
      "--light-lightness": "96%",
      "--dark-lightness": "20%",
      "--black-lightness": "10%",
      "--white-color": "hsl(0, 0%, 100%)",
      "--light-color": "hsl(0, 0%, 96%)",
      "--dark-color": "hsl(0, 0%, 20%)",
      "--black-color": "hsl(0, 0%, 10%)",
    },
  },
  setPrimary: () => {},
  setBg: () => {},
});
