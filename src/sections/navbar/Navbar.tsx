'use client'

import Link from 'next/link'
import classes from './Navbar.module.css'
import { Pacifico } from 'next/font/google'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400']})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  return (
    <nav className={classes.nav}>

        <div className={`container ${classes.nav__container}`}>

            <Link 
                href='/' 
                onClick={closeMenu}
                className={`${classes.nav__logo} ${pacifico.className}`}
            >
                JSanic
            </Link>
            
            <div 
                className={`${classes.nav__menu} ${isOpen && classes.active}`}
            >
                <ul>
                    <li>
                        <Link 
                            href='/'
                            onClick={closeMenu}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='/servicios'
                            onClick={closeMenu}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href='/proyectos'
                            onClick={closeMenu}
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>                    
                </ul>            
            </div>

            <Link href='/contacto' className={classes.nav__contact}>
                    Contacto
            </Link>

            

            <button 
                className={classes.nav__toggle}
                onClick={() => setIsOpen(prev => !prev)}
            >
                {
                    !isOpen ? <FaBars /> : <FaTimes />
                }
            </button>

        </div>
    </nav>
  )
}

export default Navbar
