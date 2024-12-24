import { MdElectricBolt } from "react-icons/md";
import { SiUdemy } from "react-icons/si";
import { TbCircuitCapacitorPolarized } from "react-icons/tb";

import udemy_image_1 from "@/../public/images/udemy_page-0001.jpg";
import udemy_image_2 from "@/../public/images/udemy_page-0002.jpg";
import udemy_image_3 from "@/../public/images/udemy_page-0003.jpg";
import udemy_image_4 from "@/../public/images/udemy_page-0004.jpg";
import udemy_image_5 from "@/../public/images/udemy_page-0005.jpg";
import electronica_1 from "@/../public/images/documento-electronico-70487_page-0001.jpg";
import electronica_2 from "@/../public/images/documento-electronico-70487_page-0002.jpg";
import electricidad_1 from "@/../public/images/documento-electronico-70484_page-0001.jpg";
import electricidad_2 from "@/../public/images/documento-electronico-70484_page-0002.jpg";
import React from "react";

type EducationData = {
  id: number;
  title: string;
  institution: string;
  desc: string;
  pdf: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  icon: React.ComponentType;
};

const education__data: EducationData[] = [
  {
    id: 1,
    title: "Desarrollador Web Fullstack",
    institution: "Udemy",
    desc: `
        <p>
            A mi parecer, en Udemy se encuentran cursos de calidad con profesionales de la industria. 
            A continuación, te presento los cursos que he tomado en esta plataforma:
        </p>
            <h5>React: The Complete Guide (incl. React Router & Redux)</h5>
            <p>
                Es un curso largo pero muy completo que abarca desde los conceptos básicos de React como lo puede ser
                JSX, componentes, props, lifting state up, eventos, estilos etc. Hasta conceptos intermedios y avanzados como
                hooks para manejar estados entre componentes, como lo es useReducer y useContext, efectos con useEffect,
                soliciuted HTTP, rutas con React Router, validación de formularios, manejo de errores, optimizaciones, estado global
                con RTK y buenas prácticas, entre otros. 
            </p>
            
            <h5>Next.js & React - The Complete Guide</h5>
            <p>
                Es un curso que enseña las bases de NextJS 13 y 14 como server components, image optimization, server actions y un poco de 
                SSR, pero es un curso destiando más a las versioes anteriores de NextJS. Así que me he estado actualizando con la 
                documentación oficial de NextJS y algunos tutoriales en YouTube para aprender autenticación con NextAuth, middleware entre
                otros temas.
            </p>
            
            <h5>CSS Bootcamp - Master CSS (CSS Grid / CSS Flexbox)</h5>
            <p>
                Es un curso muy bueno con respecto al posicionamiento de elementos con flex y grid que me ha ayudado a
                depender menos de media queries cuando se trata de responsive design.   
            </p>
            
            <h5>MERN From Scratch 2023 | eCommerce Platform</h5>
            <p>
                El curso consiste en realizar un ecommerce con el stack MERN. Es una aplicación de la vida real y me ha ayudado a 
                entender como se estructura una aplicación fullstack con React, Node, Express y MongoDB. Además de trabajar con 
                RTK query para manejar solicitudes HTTP y almacenarlas en la cache de una manera eficiente.
            </p>
            <h5>
                React Native - The Practical Guide
            </h5>
            <p>
                Posiblemente el curso más completo que he visto de React Native en todo internet. El curso se bas completamente 
                en crear varias aplicaciones con expo y react Navigation con device features como la cámara, geolocalización,
                notificaciones push, etc. 
            </p>
            <p>
                Otros cursos que estoy tomando actualmente está uno de c# y aniamaciones con CSS y JavaScript.  
            </p>
        `,
    pdf: "pdf/udemy.pdf",
    images: [
      udemy_image_1,
      udemy_image_2,
      udemy_image_3,
      udemy_image_4,
      udemy_image_5,
    ],
    icon: SiUdemy,
  },
  {
    id: 2,
    title: "Ingeniería en Electrónica",
    institution: "Universidad de San Carlos de Guatemala",
    desc: `
        <p>
            Respecto al campo del desarrollo de software, la carrera de Ingeniería en Electrónica me ha proporcionado
            bases en Pyton y C++ que me han ayudado a entender la lógica de programación y a familiarizarme con la sintaxis
            de los lenguajes de programación.   
        </p>
        <p>
            Además de eso, he aprendido a trabajar con microcontroladores que tienen un stack de protocolos de comunicación 
            inalámbrica que me ha permitido hacer dashboards con React en tiempo real con sensores.   
        </p>
        `,
    icon: TbCircuitCapacitorPolarized,
    pdf: "pdf/documento-electronico-70487.pdf",
    images: [electronica_1, electronica_2],
  },
  {
    id: 3,
    title: "Ingeniería en Electricidad",
    institution: "Universidad de San Carlos de Guatemala",
    desc: `
        <p>
            Hay algunos cursos interesantes desde el punto de vista de la programación, como lo es Automatización,
            Electrónica 3, Sistemas de control, Instrumentación, entre otros. De los cursos profesionales están
            Analísis de Sismteas de Potencia que permite desarrollar programas para el cálculo del sistema eléctrico
            de potencia de Guatemala y Sistemas de Generación para entender el despacho de energía eléctrica por medio de 
            algoritmos de optimización.  
        </p>
        `,
    icon: MdElectricBolt,
    pdf: "pdf/documento-electronico-70484.pdf",
    images: [electricidad_1, electricidad_2],
  },
];

export default education__data;
