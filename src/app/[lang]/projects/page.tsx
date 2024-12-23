import { redirect } from "next/navigation";

type ProjectsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;

  redirect(`/${lang}/projects/1`);
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
