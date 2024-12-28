import { Suspense } from "react";
import Search from "./search/Search";
import RotatingLoader from "@/components/rotating-loader/RotatingLoader";

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
      <Suspense fallback={<RotatingLoader />}>
        <Search term={search} lang={lang} />
      </Suspense>
    </div>
  );
}
