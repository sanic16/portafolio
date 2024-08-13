import { Project } from "@prisma/client";
import classes from "./projectItem.module.css";
import Image from "next/image";

interface ProjectProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectProps) => {
  return (
    <div key={project.id} className={classes.project}>
      <div className={classes.project__body}>
        <div className={classes.project__image}>
          <Image src={project.imageUrl} alt="" fill />
        </div>
        <h3 className={classes.project__title}>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className={classes.project__actions}>
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
  );
};

export default ProjectItem;
