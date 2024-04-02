import React from 'react'
import './footer.css'
import Link from 'next/link'
import { FaJava, FaJs, FaPhone, FaPython } from 'react-icons/fa'
import { SiCplusplus, SiCsharp } from 'react-icons/si'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
        <div className="container footer__container">
            <div className='footer__desc'>
                <h3>
                    Programador FullStack Julio Sanic
                </h3>
                <p>
                    Soy un programdor versatil que utiliza
                    diferentes lenguajes de programación,
                    frameworks, metodologías y otras herramientas
                    para desarrollar apliaciones web modernas.
                </p>
                <div className='footer__desc-lang'>
                    <span>
                        <FaJs />
                    </span>
                    <span>
                        <FaPython />
                    </span>
                    <span>
                        <SiCsharp />
                    </span>
                    <span>
                        <FaJava />
                    </span>
                    <span>
                        <SiCplusplus />
                    </span>
                </div>
                <h3>
                    Contacto
                </h3>
                <ul className='footer__contact'>
                    <li>
                        <a href='tel:+502 58385370'>
                            <FaPhone /> +502 5838-5370
                        </a>
                    </li>
                    <li>
                        <a href='mailto:2596787670101@ingenieria.usac.edu.gt'>
                            <IoMdMail /> 2596787670101@ingenieria.usac.edu.gt
                        </a>
                    </li>
                    <li>
                        <a href='mailto:julio.sanic.gt.256@gmail.com'>
                            <IoMdMail /> julio.sanic.gt.256@gmail.com
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className='footer__languages'>
                <h3>
                    Lenguajes
                </h3>
                <ul>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        c#
                    </li>
                    <li>
                        Java
                    </li>
                    <li>
                        c/c++
                    </li>
                </ul>
            </div>
            <div className='footer__frameworks'>
                <h3>
                    Frameworks
                </h3>
                <ul>
                    <li>
                        React
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        Flask
                    </li>
                    <li>
                        NestJs
                    </li>
                    <li>
                        Django
                    </li>
                </ul>
            </div>    
            <div className='footer__others'>
                <h3>
                    Otros
                </h3>
                <ul>
                    <li>
                        SQL
                    </li>
                    <li>
                        Git/Github
                    </li>
                    <li>
                        Docker
                    </li>
                    <li>
                        AWS
                    </li>
                    
                </ul>
               
            </div>        
        </div>
        <div className="container copyright">
            <p>
                &copy; { new Date().getFullYear() } Julio Sanic.
            </p>
        </div>
    </footer>
  )
}

export default Footer