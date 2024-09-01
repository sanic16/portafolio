import prisma from "@/lib/prisma";
import "./page.css";
import Posts from "@/components/posts/Posts";

export default async function page() {
  return (
    <div className="blog">
      <Posts />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
