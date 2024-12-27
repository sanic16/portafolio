"use client";

import { FC, PropsWithChildren } from "react";
import classes from "./sectionWrapper.module.css";
import { useThemeContext } from "@/context/theme/ThemeContextProvider";

const SectionWrapper: FC<PropsWithChildren<{ id: string }>> = ({
  children,
  id,
}) => {
  const { mode } = useThemeContext();

  return (
    <section
      id={id}
      className={`${classes.static} ${mode === "cycle" ? classes.cyclic : ""}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
