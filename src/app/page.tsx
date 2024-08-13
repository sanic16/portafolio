import About from "@/sections/about/About";
import Education from "@/sections/education/Education";
import FloatMenu from "@/sections/float-menu/FloatMenu";
import Header from "@/sections/header/Header";
import Projects from "@/sections/projects/Projects";
import Services from "@/sections/services/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Julio Sanic - Desarrollador Web",
  description:
    "Desarrollador web fullstack con experiencia en react y next.js.",
  keywords:
    "Desarrollador web, React, Next.js, Fullstack, MERN, TypeScript, react native",
};

export default function page() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Services />
      <Education />
      <FloatMenu />
    </>
  );
}
