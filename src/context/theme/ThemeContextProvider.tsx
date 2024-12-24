"use client";

import React, { useEffect, useContext, useState } from "react";
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
  const [theme, setTheme] = useState<Theme>(initialState);

  const setPrimary = (primary: Primary) => {
    setTheme((prev) => ({ ...prev, primary }));
  };

  const setBg = (bg: Bg) => {
    setTheme((prev) => ({ ...prev, bg }));
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    setBGCSSVariables(theme.bg);
  }, [theme.bg]);

  useEffect(() => {
    setPrimaryCSSVariables(theme.primary);
  }, [theme.primary]);

  useEffect(() => {
    const primaryInterval = setInterval(() => {
      setTheme((prev) => ({
        ...prev,
        primary: nextPrimary(prev.primary),
      }));
    }, 50);

    return () => clearInterval(primaryInterval);
  }, []);

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
