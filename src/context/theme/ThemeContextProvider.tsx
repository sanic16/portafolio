"use client";

import React, { useEffect, useReducer, useContext } from "react";
import themeReducer from "./themeReducer";
import { ContextTheme } from "./ContextTheme";

const initialState: Theme =
  typeof window !== "undefined" && localStorage.getItem("theme")
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

  console.log("theme", theme);

  const setPrimary = (primary: Primary) => {
    dispatchTheme({ type: primary });
  };

  const setBg = (bg: Bg) => {
    dispatchTheme({ type: bg });
  };

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);

  useEffect(() => {
    console.log("theme.primary", theme.primary);
    document.documentElement.style.setProperty(
      "--primary-hue",
      theme.primary["--primary-hue"]
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primary["--primary-color"]
    );
    document.documentElement.style.setProperty(
      "--white-lightness",
      theme.bg["--white-lightness"]
    );
    document.documentElement.style.setProperty(
      "--light-lightness",
      theme.bg["--light-lightness"]
    );
    document.documentElement.style.setProperty(
      "--dark-lightness",
      theme.bg["--dark-lightness"]
    );
    document.documentElement.style.setProperty(
      "--black-lightness",
      theme.bg["--black-lightness"]
    );
    document.documentElement.style.setProperty(
      "--white-color",
      theme.bg["--white-color"]
    );
    document.documentElement.style.setProperty(
      "--light-color",
      theme.bg["--light-color"]
    );
    document.documentElement.style.setProperty(
      "--dark-color",
      theme.bg["--dark-color"]
    );
    document.documentElement.style.setProperty(
      "--black-color",
      theme.bg["--black-color"]
    );
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
