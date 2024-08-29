import prisma from "@/lib/prisma";
import classes from "./projects.module.css";
import ProjectItem from "../project/ProjectItem";
import Link from "next/link";

interface ProjectsProps {
  page: string;
  lang: string;
}

const Projects: React.FC<ProjectsProps> = async ({ page, lang }) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const totalItems = await prisma.project.count({
    where: { lang: lang === "en" ? "EN" : "ES" },
  });
  const totalPages = Math.ceil(totalItems / 6);
  let numPage = parseInt(page);
  if (isNaN(numPage) || numPage < 1 || numPage > totalPages) {
    numPage = 1;
  }

  const projectsPage = await prisma.project.findMany({
    take: 6,
    skip: 6 * (numPage - 1),
    where: {
      lang: lang === "en" ? "EN" : "ES",
    },
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
};

export default Projects;
