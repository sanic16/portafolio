import ecommerce from "@/../public/images/julius_ecommerce.jpg";
import julius_blog from "@/../public/images/julius_blog.jpg";
import hotel from "@/../public/images/hotel_el_jaguard_dorado.jpg";
import julius_food from "@/../public/images/julius_food.jpg";

const projects_data = [
  {
    id: 1,
    title: "Julius Ecommerce",
    desc: `Ecommerce desarrollado con el stack MERN, TypeScript tanto en el frontend como en el backend, Redux Toolkit y RTK Query
        para el manejo del estado y las peticones a la API. Tanto el frontend como el backend están desplegados juntos 
        en Heroku. `,
    image: ecommerce,
    url_1: "https://julius-shop-73179b1dfa08.herokuapp.com/",
    url_2: "",
    github: "https://github.com/sanic16/julius-shop",
  },
  {
    id: 2,
    title: "Julius Blog",
    desc: `Aplicación Fullstack desarrollada utilizando TypeScript en el stack MERN, Redux Toolkit y RTK Query para 
        el manejo del estado, peticioes a la API y cache de datos. El almacenamiento de las imágenes está en AWS S3 y
        toda la aplicación está desplegada en Heroku.`,
    image: julius_blog,
    url_1: "https://julius-blog-e13d47c9a4bc.herokuapp.com/",
    url_2: "https://julius-blog.juliosanic.tech/",
    github: "https://github.com/sanic16/julius-blog",
  },
  {
    id: 3,
    title: "Hotel El Jaguard Dorado",
    desc: `Página estática desarrollada con Next.js 14 y TypeScript. La página se desarrolló utilizando auto-fill y auto-fit
        para el diseño responsive y está desplegada en Vercel y heroku.`,
    image: hotel,
    url_1: "https://hotel-jaguar-dorado.vercel.app/",
    url_2: "",
    github: "https://github.com/sanic16/hotel-jaguar-dorado",
  },
  {
    id: 4,
    title: "JuliusFood",
    desc: `Es un proyecto fullstack desarrollado con Python en el backend y React en el frontend. El backend está 
        desarrollado con Flask, SQLAlchemy como ORM y MariaDB como base de datos. Para la autenticación se utilizó Flask-JWT-Extended y
        marshmallow para la serialización y validación de los datos. El frontend está desarrollado con React y Redux Toolkit para el manejo del estado y
        las peticiones a la API. La aplicación está desplegada en Heroku y los archivos estáticos en AWS S3.`,
    image: julius_food,
    url_1: "https://smilecook-59deb66ee276.herokuapp.com/",
    github: "https://github.com/sanic16/smilecook_backend",
    github_frontend: "https://github.com/sanic16/smilecook-frontend",
  },
];
export default projects_data;
