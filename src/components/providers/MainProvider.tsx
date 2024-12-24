"use client";

import dynamic from "next/dynamic";
import { type FC } from "react";

// const Main = dynamic(() => import("@/components/main/Main"), {
//   ssr: false,
// });

type MainProviderProps = {
  children: React.ReactNode;
};
const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default MainProvider;
