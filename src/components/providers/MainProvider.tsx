"use client";

import ContextPlayerProvider from "@/context/player/ContextPlayerProvider";
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
  return (
    <ThemeContextProvider>
      <ContextPlayerProvider>{children}</ContextPlayerProvider>
    </ThemeContextProvider>
  );
};

export default MainProvider;
