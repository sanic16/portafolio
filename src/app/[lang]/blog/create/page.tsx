import CreatePostForm from "@/components/forms/CreatePostForm";
import prisma from "@/lib/prisma";

export default async function BlogPage() {
  const categories = await prisma.postCategory.findMany({
    select: {
      name: true,
    },
  });
  const categoriesArray = categories.map((category) => category.name);
  return <CreatePostForm category={categoriesArray} />;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
