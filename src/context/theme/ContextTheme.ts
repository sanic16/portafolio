import { createContext } from "react";

export const ContextTheme = createContext<ThemeContext>({
  theme: {
    primary: "color-1",
    bg: "bg-1",
  },
  setTheme: () => {},
});
