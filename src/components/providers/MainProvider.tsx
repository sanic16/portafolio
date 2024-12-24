"use client";

import dynamic from "next/dynamic";
import { type FC } from "react";

const ThemeContextProvider = dynamic(
  () => import("@/context/theme/ThemeContextProvider"),
  {
    ssr: false,
  }
);

type MainProviderProps = {
  children: React.ReactNode;
};
const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default MainProvider;
