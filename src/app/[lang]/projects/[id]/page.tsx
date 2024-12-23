import Projects from "@/components/projects/Projects";
import { Suspense } from "react";
import RotatingLoader from "@/components/rotating-loader/RotatingLoader";
import prisma from "@/lib/prisma";

type ProjectPageProps = {
  params: Promise<{ lang: string; id: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id, lang } = await params;

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

  return [...englishParams, ...spanishParams];
}
