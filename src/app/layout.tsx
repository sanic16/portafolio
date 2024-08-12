import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar/Navbar";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import ThemeModal from "@/theme/ThemeModal";
import ThemeMenu from "@/sections/theme-modal-menu/ThemeMenu";
import ThemeContextProvider from "@/context/theme/ThemeContextProvider";
import dynamic from "next/dynamic";
import Footer from "@/sections/footer/Footer";
import GoogleAdsense from "@/components/google-adsense/GoogleAdsense/GoogleAdsense";
import { SessionProvider } from "next-auth/react";
const Main = dynamic(() => import("../components/main/Main"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description: "Desarrollador web fullstack, especializado en React y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <SessionProvider>
        <ThemeContextProvider>
          <ModalContextProvider>
            <body>
              <Main>
                <Navbar />
                {children}
                <Footer />
                <ThemeMenu />
                <ThemeModal />
              </Main>
              <GoogleAdsense />
            </body>
          </ModalContextProvider>
        </ThemeContextProvider>
      </SessionProvider>
    </html>
  );
}
