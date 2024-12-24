"use client";

import React, { useEffect, useReducer, useContext } from "react";
import themeReducer from "./themeReducer";
import { ContextTheme } from "./ContextTheme";
import { setBGCSSVariables, setPrimaryCSSVariables } from "@/utils/bg";
import { nextPrimary } from "@/utils/primaryColors";

const initialState: Theme =
  typeof window !== "undefined" &&
  localStorage.getItem("theme") &&
  typeof JSON.parse(localStorage.getItem("theme") as string) === "object" &&
  "primary" in JSON.parse(localStorage.getItem("theme") as string) &&
  "bg" in JSON.parse(localStorage.getItem("theme") as string)
    ? JSON.parse(localStorage.getItem("theme") as string)
    : {
        primary: {
          "--primary-hue": "0",
          "--primary-color": "hsl(0, 88%, 36%)",
        },
        bg: {
          "--white-lightness": "14%",
          "--light-lightness": "18%",
          "--dark-lightness": "85%",
          "--black-lightness": "94%",
          "--white-color": "hsl(0, 0%, 14%)",
          "--light-color": "hsl(0, 0%, 18%)",
          "--dark-color": "hsl(0, 0%, 85%)",
          "--black-color": "hsl(0, 0%, 94%)",
        },
      };

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialState);

  const setPrimary = (primary: Primary) => {
    dispatchTheme({ type: "SET_PRIMARY", payload: primary });
  };

  const setBg = (bg: Bg) => {
    dispatchTheme({ type: "SET_BG", payload: bg });
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    setBGCSSVariables(theme.bg);
  }, [theme.bg]);

  useEffect(() => {
    setPrimaryCSSVariables(theme.primary);
    const primaryInterval = setInterval(() => {
      setPrimary(nextPrimary(theme.primary));
    }, 50);

    return () => clearInterval(primaryInterval);
  }, [theme.primary]);

  return (
    <ContextTheme.Provider
      value={{
        theme,
        setPrimary: setPrimary,
        setBg: setBg,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ContextTheme);
