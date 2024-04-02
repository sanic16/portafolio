import ecommerce from '@/../public/images/julius_ecommerce.jpg'
const projects_data = [
    {
        id: 1,
        title: 'Julius Ecommerce',
        desc: `Ecommerce desarrollado con el stack MERN, TypeScript tanto en el frontend como en el backend, Redux Toolkit y RTK Query
        para el manejo del estado y las peticones a la API. Tanto el frontend como el backend están desplegados juntos 
        en Heroku. `,
        image: ecommerce,
        url_1: 'https://julius-shop-73179b1dfa08.herokuapp.com/product/66010cc2ff1c01ae5404f969',
        url_2: '',
        github: 'https://github.com/sanic16/julius-shop'
    },
    {
        id: 2,
        title: 'Julius Blog',
        desc: `Aplicación Fullstack desarrollada utilizando TypeScript en el stack MERN, Redux Toolkit y RTK Query para 
        el manejo del estado, peticioes a la API y cache de datos. El almacenamiento de las imágenes está en AWS S3 y
        toda la aplicación está desplegada en Heroku.`,
        url_1: 'https://julius-blog-e13d47c9a4bc.herokuapp.com/',
        url_2: 'https://julius-blog.juliosanic.tech/',
        github: 'https://github.com/sanic16/julius-blog'
    },
    {
        id: 3,
        title: 'Hotel El Jaguard Dorado',
        desc: `Página estática desarrollada con Next.js 14 y TypeScript. La página se desarrolló utilizando auto-fill y auto-fit
        para el diseño responsive y está desplegada en Vercel y heroku.`,
        url_1: 'https://hotel-jaguar-dorado.vercel.app/',
        github: 'https://github.com/sanic16/hotel-jaguar-dorado'

    }
]