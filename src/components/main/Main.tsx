"use client";

import { useThemeContext } from "@/context/theme/ThemeContextProvider";
import { useEffect } from "react";

const colorStyles = {
  "color-1": {
    "--primary-hue": "350",
    "--primary-color": "hsl(350, 88%, 36%)",
  },
  "color-2": { "--primary-hue": "30", "--primary-color": "hsl(30, 88%, 36%)" },
  "color-3": { "--primary-hue": "80", "--primary-color": "hsl(80, 88%, 36%)" },
  "color-4": {
    "--primary-hue": "150",
    "--primary-color": "hsl(150, 88%, 36%)",
  },
  "color-5": {
    "--primary-hue": "190",
    "--primary-color": "hsl(190, 88%, 36%)",
  },
  "color-6": {
    "--primary-hue": "215",
    "--primary-color": "hsl(215, 88%, 36%)",
  },
  "color-7": {
    "--primary-hue": "260",
    "--primary-color": "hsl(260, 88%, 36%)",
  },
  "color-8": {
    "--primary-hue": "300",
    "--primary-color": "hsl(300, 88%, 36%)",
  },
};

const Main = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const root = document.documentElement;
    const primaryHue = root.style.getPropertyValue("--primary-hue");
    root.style.setProperty(
      "--primary-hue",
      colorStyles[theme.primary]["--primary-hue"]
    );
    const primary = root.style.getPropertyValue("--primary-color");
    root.style.setProperty(
      "--primary-color",
      colorStyles[theme.primary]["--primary-color"]
    );
  }, [theme.primary]);

  return (
    <main className={`${theme.primary} ${theme.bg}`} style={{}}>
      {children}
    </main>
  );
};

export default Main;
