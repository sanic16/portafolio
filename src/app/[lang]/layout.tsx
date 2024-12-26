import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/sections/navbar/Navbar";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import ThemeModal from "@/theme/ThemeModal";
import ThemeMenu from "@/sections/theme-modal-menu/ThemeMenu";
import Footer from "@/sections/footer/Footer";
import GoogleAdsense from "@/components/google-adsense/GoogleAdsense/GoogleAdsense";
import { SessionProvider } from "next-auth/react";
import { getDictionary } from "./dictionaries";
import classes from "./layout.module.css";
import MainProvider from "@/components/providers/MainProvider";
import ControlsMenu from "@/components/audio/controlsMenu/ControlsMenu";
import TrackBar from "@/components/audio/trackBar/TrackBar";

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description: "Desarrollador web fullstack, especializado en React y Next.js.",
};

type RootLayoutProps = {
  params: Promise<{
    lang: "es" | "en";
  }>;
  children: React.ReactNode;
};

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body>
        <SessionProvider>
          <MainProvider>
            <ModalContextProvider>
              <Navbar translations={t.navbar} />
              <TrackBar />
              <div className={classes.main}>{children}</div>
              <Footer {...t.footer} />
              <ThemeMenu />
              <ThemeModal />
              <ControlsMenu />
              <GoogleAdsense />
            </ModalContextProvider>
          </MainProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
