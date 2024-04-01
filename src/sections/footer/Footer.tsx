import React from 'react'
import './footer.css'
import Link from 'next/link'
import { FaJava, FaJs, FaPython } from 'react-icons/fa'
import { SiCplusplus, SiCsharp } from 'react-icons/si'

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
                    <Link href='/services/javascript'>
                        <FaJs />
                    </Link>
                    <Link href='/services/python'>
                        <FaPython />
                    </Link>
                    <Link href='/services/csharp'>
                        <SiCsharp />
                    </Link>
                    <Link href='/services/java'>
                        <FaJava />
                    </Link>
                    <Link href='/services/cplus'>
                        <SiCplusplus />
                    </Link>
                </div>
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