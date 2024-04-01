import React from 'react'
import data_services from './data__services'
import Service from './Service'
import './services.css'

const Services = () => {
  return (
    <section id='services' className='services'>
        <h1>
            Servicios
        </h1>
        <p>
            Los servicios que ofrezco en el ámbito de la programación:
        </p>
        <div className="container services__container">
            {
              data_services.map(service => (
               <Service 
                key={service.id}
                Icon={service.icon}
                service={service.title}
                description={service.description}
                slug={service.slug}
               />
             ))
            }
        </div>
    </section>
  )
}

export default Services