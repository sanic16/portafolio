import Projects from "@/components/projects/Projects";
import { Suspense } from "react";
import classes from "./page.module.css";
import RotatingLoader from "@/components/rotating-loader/RotatingLoader";

export default async function page({
  searchParams: { page },
  params: { lang },
}: {
  searchParams: {
    page: string;
  };
  params: {
    lang: string;
  };
}) {
  return (
    <div className={classes.page}>
      <Suspense fallback={<RotatingLoader />}>
        <Projects page={page} lang={lang} />
      </Suspense>
    </div>
  );
}
