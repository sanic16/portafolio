import prisma from "@/lib/prisma";
import "./projects.css";
import ProjectItem from "@/components/project/ProjectItem";
import SectionWrapper from "../section-wrapper/SectionWrapper";

interface ProjectsProps {
  translations: {
    title: string;
    description: string;
  };
  lang: "en" | "es";
}

const Projects: React.FC<ProjectsProps> = async ({ translations, lang }) => {
  const projects = await prisma.project.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "brayalex",
            mode: "insensitive",
          },
          lang: lang,
        },
        {
          title: {
            contains: "servic",
            mode: "insensitive",
          },
          lang,
        },
        {
          title: {
            contains: "conesiee",
            mode: "insensitive",
          },
          lang,
        },
      ],
    },
    orderBy: {
      title: "asc",
    },
  });
  return (
    <SectionWrapper id="projects">
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <div className="container">
        <div className="projects__container">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
