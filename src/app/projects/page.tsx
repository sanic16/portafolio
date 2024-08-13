import ProjectItem from "@/components/project/ProjectItem";
import classes from "./page.module.css";
import prisma from "@/lib/prisma";

export default async function page() {
  const projects = await prisma.project.findMany();
  return (
    <div className={`${classes.projects}`}>
      <div className={`container  ${classes.projects__container}`}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
