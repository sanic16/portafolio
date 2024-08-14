import ProjectItem from "@/components/project/ProjectItem";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function page({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const totalItems = await prisma.project.count();
  const totalPages = Math.ceil(totalItems / 6);
  let numPage = parseInt(searchParams.page);
  if (isNaN(numPage) || numPage < 1 || numPage > totalPages) {
    numPage = 1;
  }

  const projectsPage = await prisma.project.findMany({
    take: 6,
    skip: 6 * (numPage - 1),
  });

  return (
    <div className={`${classes.projects}`}>
      <div className={`container  ${classes.projects__container}`}>
        {projectsPage.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className={classes.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={page === numPage ? classes.active : undefined}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}
