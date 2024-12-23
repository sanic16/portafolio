"use client";

import React, {
  useEffect,
  useReducer,
  useContext,
  useMemo,
  useCallback,
} from "react";
import themeReducer from "./themeReducer";
import { ContextTheme } from "./ContextTheme";

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

const colors: Primary[] = Array.from(
  { length: 8 },
  (_, i) => `color-${i + 1}`
) as Primary[];

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, initialState);
  const setTheme = (theme: Primary | Bg) => {
    dispatchTheme({ type: theme });
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const nextColor = () => {
      const currentIndex = colors.indexOf(theme.primary);
      const nextIndex = (currentIndex + 1) % colors.length;
      dispatchTheme({ type: colors[nextIndex] });
      console.log("current index", currentIndex);
      console.log("next index", nextIndex);
      console.log("next color", colors[nextIndex]);
      console.log("theme", theme);
    };

    const interval = setInterval(() => {
      nextColor();
    }, 100);

    return () => clearInterval(interval);
  }, [theme.primary]);

  return (
    <ContextTheme.Provider
      value={{
        theme: theme,
        setTheme,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ContextTheme);
