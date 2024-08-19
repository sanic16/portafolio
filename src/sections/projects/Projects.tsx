import prisma from "@/lib/prisma";
import "./projects.css";
import ProjectItem from "@/components/project/ProjectItem";

interface ProjectsProps {
  translations: {
    title: string;
    description: string;
  };
}

const Projects: React.FC<ProjectsProps> = async ({ translations }) => {
  const projects = await prisma.project.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Coral y Mar",
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: "smilecook",
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: "juliusblog",
            mode: "insensitive",
          },
        },
      ],
    },
  });
  return (
    <section id="projects" className="projects">
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <div className="container">
        <div className="projects__container">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
