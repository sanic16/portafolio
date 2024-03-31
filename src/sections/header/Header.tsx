import Image from 'next/image'
import classes from './Header.module.css'
import avatar from '@/../public/avatar13.jpg'

const Header = () => {
    
  return (
    <header id='header' className={classes.header}>
        <div className={`container ${classes.header__container}`}>
            <div className={classes.avatar}>
                <Image src={avatar} alt='avatar' />
            </div>
            <h1>
                Hola, soy <span>Julio Sanic</span> 
            </h1>
            <p>
                Desarrollador Web Full Stack con conocimientos en JavaScript y Python para 
                el desarrollo de aplicaciones embebidas.
            </p>

            <div className={classes.cts}>
                <a href='#' className='btn primary'>
                    Descargar CV
                </a>
                <a href='#' className='btn'>
                    Contactar
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header