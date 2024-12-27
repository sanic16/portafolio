import { Suspense } from "react";
import Search from "./search/Search";

type SearchPageProps = {
  searchParams: Promise<{ search: string }>;
  params: Promise<{ lang: "en" | "es" }>;
};

export default async function SearchPage({
  searchParams,
  params,
}: SearchPageProps) {
  const { search } = await searchParams;
  const { lang } = await params;

  console.log(search, lang);

  return (
    <div>
      <Suspense>
        <Search term={search} lang={lang} />
      </Suspense>
    </div>
  );
}
