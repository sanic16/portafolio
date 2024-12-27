import "./globals.css";
import type { Metadata } from "next";
import MainProvider from "@/components/providers/MainProvider";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description: "Desarrollador web fullstack, especializado en React y Next.js.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <SessionProvider>
          <MainProvider>
            <ModalContextProvider>{children}</ModalContextProvider>
          </MainProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
