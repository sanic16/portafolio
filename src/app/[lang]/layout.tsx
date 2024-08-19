import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/sections/navbar/Navbar";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import ThemeModal from "@/theme/ThemeModal";
import ThemeMenu from "@/sections/theme-modal-menu/ThemeMenu";
import ThemeContextProvider from "@/context/theme/ThemeContextProvider";
import dynamic from "next/dynamic";
import Footer from "@/sections/footer/Footer";
import GoogleAdsense from "@/components/google-adsense/GoogleAdsense/GoogleAdsense";
import { SessionProvider } from "next-auth/react";
import { getDictionary } from "./dictionaries";
const Main = dynamic(() => import("../../components/main/Main"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description: "Desarrollador web fullstack, especializado en React y Next.js.",
};

export default async function RootLayout({
  params: { lang },
  children,
}: Readonly<{
  params: {
    lang: string;
  };
  children: React.ReactNode;
}>) {
  const t = await getDictionary(lang);
  return (
    <html lang={lang}>
      <SessionProvider>
        <ThemeContextProvider>
          <ModalContextProvider>
            <body>
              <Main>
                <Navbar />
                {children}
                <Footer translations={t.footer} />
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
