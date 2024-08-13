import prisma from "@/lib/prisma";
import "./projects.css";
import Image from "next/image";

const Projects = async () => {
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
      <h1>Mis Proyectos</h1>
      <p>Aquí encontrarás una lista de mis proyectos</p>
      <div className="container">
        <div className="projects__container">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div className="project__body">
                <div className="project__image">
                  <Image src={project.imageUrl} alt="" fill />
                </div>
                <h3 className="project__title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project__actions">
                <a
                  className="btn primary"
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver
                </a>
                <a
                  className="btn black"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {/* {project.github_frontend && (
                  <a
                    className="btn black"
                    href={project.github_frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Frontend
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
