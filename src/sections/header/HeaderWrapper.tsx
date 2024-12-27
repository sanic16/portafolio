"use client";
import { FC, PropsWithChildren } from "react";
import classes from "./Header.module.css";
import { useThemeContext } from "@/context/theme/ThemeContextProvider";

const HeaderWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useThemeContext();

  return (
    <header
      id="header"
      className={`${classes.header} ${mode === "cycle" ? classes.cyclic : ""}`}
    >
      {children}
    </header>
  );
};

export default HeaderWrapper;
