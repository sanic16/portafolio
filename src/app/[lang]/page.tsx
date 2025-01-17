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

type HomoPageProps = {
  params: Promise<{ lang: "en" | "es" }>;
};

export default async function HomePage({ params }: HomoPageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <>
      <Header translations={t.header} lang={lang} />
      <About translations={t.about} lang={lang} />
      <Projects translations={t.projects} lang={lang} />
      <Services translations={t.services} />
      <Education translations={t.education} />
      <FloatMenu />
    </>
  );
}
