import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

export default async function page() {
  const projects = await prisma.project.findMany();
  return (
    <div className="page__center">
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
    </div>
  );
}
