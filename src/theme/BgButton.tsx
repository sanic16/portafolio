import { useThemeContext } from "@/context/theme/ThemeContextProvider";
import { useCallback } from "react";

const BgButton = ({ className }: { className: string }) => {
  const { theme } = useThemeContext();
  const setBg = useCallback((bg: Bg) => {
    // const setColors = (lightnessValues: Record<string, string>) => {
    //   Object.entries(lightnessValues).forEach(([key, value]) => {
    //     const color = `hsl(0, 0%, ${value})`;
    //     document.documentElement.style.setProperty(`--${key}-lightness`, value);
    //     document.documentElement.style.setProperty(`--${key}-color`, color);
    //   });
    // };
    // const removeColors = () => {
    //   const colorKeys = ["white", "light", "dark", "black"];
    //   colorKeys.forEach((key) => {
    //     document.documentElement.style.removeProperty(`--${key}-lightness`);
    //     document.documentElement.style.removeProperty(`--${key}-color`);
    //   });
    // };
    // if (bg === "bg-2") {
    //   const lightnessValues = {
    //     white: "14%",
    //     light: "18%",
    //     dark: "85%",
    //     black: "94%",
    //   };
    //   setColors(lightnessValues);
    // } else {
    //   removeColors();
    // }
  }, []);

  return <button className={className} />;
};

export default BgButton;
