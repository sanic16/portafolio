import Image from 'next/image'

import image from '@/../public/avatar13.jpg'
import './about.css'
import Link from 'next/link'
import about_data from './about__data'

const About = () => {
  return (
    <section id='about' className='about'>
        <div className="container about__container">
            <div className='about__container-left'>
                <h1>
                    Sobre Mí
                </h1>
                <p>
                    Soy un desarrollador web fullstack autodidacta con conocimiento en los lenguajes de programación 
                    JavaScript y Python, además de tener buenas bases en HTML y CSS.
                </p>
                <p>
                    En JavaScript he trabajado con React, Next.js, Express y un poco de Nest.js para crear aplicaciones 
                    web y Rest APIS con servicios de autenticación (JWT) y bases de datos RDMS y NoSQL, tanto con ORMs (prisma) y
                    ODMs (mongoose) como con consultas SQL y NoSQL, además de otros servicios como el envío de correos electrónicos y
                    manejo de servicios de almacenamiento en la nube como AWS S3. 
                </p>
                <p>
                    En Python uso principalmente Flask para crear APIs con autenticación JWT y SQLAlchemy como ORM de bases de datos SQL.
                    Django tengo conocimeintos básicos y actualmente estoy aprendiendo FastAPI. 
                </p>
                <p>
                    También conozco un poco de despliegue de aplicaciones en varios servicios Iaas y Paas, así como SQL,
                    serverless y docker, además de siempre estar en la busca de buenas prácticas para el desarrollo 
                    de software y la seguridad informática. 
                </p>
                <a href="/about" className="btn primary">
                    Leer más
                </a>
            </div>
            <div className='about__container-right'>
                <div className='about__desc'>
                    <div className='about__img'>
                        <Image src={image} alt='Julio Sanic' />
                    </div>
                    <div className='about__img-caption'>
                        <h3>
                            Julio Sanic
                        </h3>
                        <p>
                            Si buscas un desarrollador web fullstack autodidacta con conocimientos en JavaScript y Python,
                            no dudes en contratarme.
                        </p>
                        <div className='about__img-btn'>
                        <Link href="/contact">
                            Contrátame
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='container about__knwl'>
                    {
                        about_data.map(item => (
                            <div key={item.id} className='about__knwl-item'>
                                <item.icon />
                            </div>
                        ))
                    }

                </div> */}
    </section>
  )
}

export default About