import React from 'react'
import './projects.css'
import ecommerce from '@/../public/images/julius_ecommerce.jpg'
import Image from 'next/image'
import projects_data from './projects-data'

const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <h1>
            Mis Proyectos
        </h1>
        <p>
            Aquí encontrarás una lista de mis proyectos
        </p>
        <div
          className='container'
        >
          <div className='projects__container'>
            {
              projects_data.map(project => (
                <div key={project.id} className='project'>
                  <div className='project__body'>
                    <div className='project__image'>
                      <Image src={project.image} alt=''/>
                    </div>
                    <h3 className='project__title'>
                      { project.title }
                    </h3>
                    <p>
                      {project.desc}
                    </p>
                  </div>
                  <div className='project__actions'> 
                      <a
                        className='btn primary' 
                        href={project.url_1}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Ver
                      </a>
                      <a
                        className='btn black' 
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        GitHub
                      </a>
                     {
                      project.github_frontend && (
                      <a
                          className='btn black' 
                          href={project.github_frontend}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          GitHub Frontend
                      </a>)
                     }

                  </div>
                </div>  
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Projects