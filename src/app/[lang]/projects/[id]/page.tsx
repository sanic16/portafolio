import Projects from "@/components/projects/Projects";
import { Suspense } from "react";
import RotatingLoader from "@/components/rotating-loader/RotatingLoader";
import prisma from "@/lib/prisma";

export default async function page({
  params: { lang, id },
}: {
  params: {
    lang: string;
    id: string;
  };
}) {
  return (
    <Suspense fallback={<RotatingLoader />}>
      <Projects page={id} lang={lang} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  const totalEnglishItems = await prisma.project.count({
    where: { lang: "EN" },
  });
  const totalSpanishItems = await prisma.project.count({
    where: { lang: "ES" },
  });

  const totalEnglishPages = Math.ceil(totalEnglishItems / 6);
  const totalSpanishPages = Math.ceil(totalSpanishItems / 6);

  const englishPages = Array.from(
    { length: totalEnglishPages },
    (_, i) => i + 1
  );
  const spanishPages = Array.from(
    { length: totalSpanishPages },
    (_, i) => i + 1
  );

  const englishParams = englishPages.map((page) => ({
    lang: "en",
    id: page.toString(),
  }));
  const spanishParams = spanishPages.map((page) => ({
    lang: "es",
    id: page.toString(),
  }));

  console.log(englishParams, spanishParams);
  return [...englishParams, ...spanishParams];
}
