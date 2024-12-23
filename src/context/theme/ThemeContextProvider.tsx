"use client";

import React, { useEffect, useReducer, createContext, useContext } from "react";
import themeReducer from "./themeReducer";
import { json } from "stream/consumers";
const themeContext = createContext<ThemeContext>({
  theme: {
    primary: "color-1",
    bg: "bg-1",
  },
  setTheme: () => {},
});

const initialState: Theme =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("theme") || "{}") !== null
      ? (JSON.parse(localStorage.getItem("theme") || "{}") as Theme)
      : {
          primary: "color-1",
          bg: "bg-1",
        }
    : {
        primary: "color-1",
        bg: "bg-1",
      };

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialState);
  const setTheme = (theme: Primary | Bg) => {
    dispatchTheme({ type: theme });
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <themeContext.Provider
      value={{
        theme: theme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(themeContext);
