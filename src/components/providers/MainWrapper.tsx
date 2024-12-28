"use client";

import { useThemeContext } from "@/context/theme/ThemeContextProvider";
import classes from "./mainWrapper.module.css";
import { FC, PropsWithChildren } from "react";

const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useThemeContext();
  return (
    <div
      className={`${classes.main} ${mode === "cycle" ? classes.cyclic : ""}`}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
