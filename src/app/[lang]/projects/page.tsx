import { redirect } from "next/navigation";

export default async function page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  redirect(`/${lang}/projects/1`);
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
