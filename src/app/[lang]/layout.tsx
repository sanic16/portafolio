import Navbar from "@/sections/navbar/Navbar";
import ThemeModal from "@/theme/ThemeModal";
import ThemeMenu from "@/sections/theme-modal-menu/ThemeMenu";
import Footer from "@/sections/footer/Footer";
import { getDictionary } from "./dictionaries";
import classes from "./layout.module.css";
import ControlsMenu from "@/components/audio/controlsMenu/ControlsMenu";
import TrackBar from "@/components/audio/trackBar/TrackBar";

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
    <>
      <Navbar translations={t.navbar} />
      <TrackBar />
      <div className={classes.main}>{children}</div>
      <Footer {...t.footer} />
      <ThemeMenu />
      <ThemeModal />
      <ControlsMenu />
    </>
  );
}
