import "./globals.css";
import type { Metadata } from "next";
import MainProvider from "@/components/providers/MainProvider";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNue = Bebas_Neue({
  variable: "--font-bebas-nue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description: "Desarrollador web fullstack, especializado en React y Next.js.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className={`${bebasNue.variable}`}>
        <SessionProvider>
          <MainProvider>
            <ModalContextProvider>{children}</ModalContextProvider>
          </MainProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
