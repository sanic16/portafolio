"use client";

import React, {
  useEffect,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";
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
          "--primary-hue": "75",
          "--primary-color": "hsl(75, 88%, 36%)",
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
  const primaryInterval = useRef<NodeJS.Timeout | null>(null);
  const [theme, setTheme] = useState<Theme>(initialState);
  const [mode, setMode] = useState<Mode>(
    typeof window !== "undefined" &&
      localStorage.getItem("mode") !== null &&
      typeof JSON.parse(localStorage.getItem("mode") as string) === "string"
      ? JSON.parse(localStorage.getItem("mode") as string)
      : "static"
  );
  const [saturation, setSaturation] = useState<string>(
    typeof window !== "undefined" &&
      localStorage.getItem("saturation") !== null &&
      typeof JSON.parse(localStorage.getItem("saturation") as string) ===
        "string"
      ? JSON.parse(localStorage.getItem("saturation") as string)
      : "88"
  );
  const [lightness, setLightness] = useState<string>(
    typeof window !== "undefined" &&
      localStorage.getItem("lightness") !== null &&
      typeof JSON.parse(localStorage.getItem("lightness") as string) ===
        "string"
      ? JSON.parse(localStorage.getItem("lightness") as string)
      : "36"
  );

  const stopPrimaryInterval = useCallback(() => {
    if (!primaryInterval.current) return;
    clearInterval(primaryInterval.current);
  }, []);

  const startPrimaryInterval = useCallback(
    (time: number) => {
      primaryInterval.current = setInterval(() => {
        setTheme((prev) => ({
          ...prev,
          primary: nextPrimary(prev.primary, saturation, lightness),
        }));
      }, time);
    },
    [saturation, lightness]
  );

  const setPrimary = useCallback((primary: Primary) => {
    setTheme((prev) => ({ ...prev, primary }));
  }, []);

  const setBg = useCallback((bg: Bg) => {
    setTheme((prev) => ({ ...prev, bg }));
  }, []);

  const newSaturation = useCallback((saturation: string) => {
    setSaturation(saturation);
  }, []);

  const newLightness = useCallback((lightness: string) => {
    setLightness(lightness);
  }, []);

  const changeMode = useCallback((mode: Mode) => {
    setMode(mode);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("saturation", JSON.stringify(saturation));
    }
  }, [saturation]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lightness", JSON.stringify(lightness));
    }
  }, [lightness]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mode", JSON.stringify(mode));
    }
  }, [mode]);

  useEffect(() => {
    setBGCSSVariables(theme.bg);
  }, [theme.bg]);

  useEffect(() => {
    setPrimaryCSSVariables(theme.primary);
  }, [theme.primary]);

  useEffect(() => {
    if (mode === "cycle") {
      startPrimaryInterval(150);
    }
    return () => {
      stopPrimaryInterval();
    };
  }, [mode, startPrimaryInterval, stopPrimaryInterval]);

  return (
    <ContextTheme.Provider
      value={{
        theme,
        mode,
        saturation,
        lightness,
        setPrimary: setPrimary,
        setBg: setBg,
        startPrimaryInterval,
        stopPrimaryInterval,
        newSaturation,
        newLightness,
        changeMode,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ContextTheme);
