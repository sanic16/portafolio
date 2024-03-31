import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar/Navbar";
import ModalContextProvider from "@/context/modal/ModalContextProvider";
import ThemeModal from "@/theme/ThemeModal";
import ThemeMenu from "@/sections/theme-modal-menu/ThemeMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalContextProvider>
          <Navbar />
          <main>
              { children }
          </main>
          <ThemeMenu />
          <ThemeModal />
        </ModalContextProvider>
        
      </body>
    </html>
  );
}
