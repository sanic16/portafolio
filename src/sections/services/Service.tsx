import Card from '@/components/card/Card'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

const Service = (
    {
        Icon,
        service,
        description,
        slug,
    }:{
        Icon: IconType,
        service: string,
        description: string
        slug: string
    }
) => {
  return (
    <Card className='service__card'>
        <div className='service__card-face'>
            <div className='service__card-icon'>
                <Icon />
            </div>
            <h3>
                {service}
            </h3>
        </div>
        <div
            className='service__card-back'
        >   
                <p>
                    {description}
                </p>
                <Link 
                    href={`/services/${slug}}}`}
                    className='service__btn btn primary'
                >
                    Ver más
                </Link>
        </div>
    </Card>
  )
}

export default Service