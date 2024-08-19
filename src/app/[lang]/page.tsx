import About from "@/sections/about/About";
import Education from "@/sections/education/Education";
import FloatMenu from "@/sections/float-menu/FloatMenu";
import Header from "@/sections/header/Header";
import Projects from "@/sections/projects/Projects";
import Services from "@/sections/services/Services";
import { Metadata } from "next";
import React from "react";
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
  title: "Julio - Desarrollador Web",
  description:
    "Desarrollador web fullstack con experiencia en react y next.js.",
  keywords:
    "Desarrollador web, React, Next.js, Fullstack, MERN, TypeScript, react native",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const t = await getDictionary(lang);
  return (
    <>
      <Header translations={t.header} />
      <About translations={t.about} />
      <Projects />
      <Services />
      <Education />
      <FloatMenu />
    </>
  );
}
