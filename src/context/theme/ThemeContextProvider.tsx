"use client";
import React, { useEffect, useReducer, createContext, useContext } from "react";
import themeReducer from "./themeReducer";
const themeContext = createContext<ThemeContext>({
  theme: {
    primary: "color-1",
    bg: "bg-1",
  },
  setTheme: () => {},
});

let avoidFirstRender = true;
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: Theme = {
    primary: "color-4",
    bg: "bg-1",
  };

  const [theme, dispatchTheme] = useReducer(themeReducer, initialState);
  const setTheme = (theme: Primary | Bg) => {
    dispatchTheme({ type: theme });
    console.log(theme);
  };

  useEffect(() => {
    const localTheme: Theme = JSON.parse(localStorage.getItem("theme") || "{}");
    if (localTheme) {
      dispatchTheme({ type: localTheme.primary });
      dispatchTheme({ type: localTheme.bg });
      console.log("uselayou", localTheme);
    }
  }, []);

  useEffect(() => {
    console.log("THEME", theme);
  }, [theme]);

  useEffect(() => {
    if (!avoidFirstRender) {
      localStorage.setItem("theme", JSON.stringify(theme));
      console.log("useEffect", theme);
    }
    avoidFirstRender = false;
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
