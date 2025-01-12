import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Julio Rubén Sanic Martínez",
    email: "julio.sanic.gt.256@gmail.com",
    role: "ADMIN",
    image:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/emmwvxo0jokjq9nu8ulx",
    projects: {
      create: [
        {
          title: "Página Personal",
          description:
            "Página personal de Julio Sanic. El proyecto está hecho con NextJS",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/gplciebexpfzfgyw6ow5",
          websiteUrl: "https://juliosanic.site/",
          githubUrl: "https://github.com/sanic16/portafolio",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Brayalex | The Machine Doctor",
          description:
            "Website para servicios de reparación de máquinas. El proyecto está hecho con NextJS.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/yx0sazqa2jbiv8ixtnbl",
          websiteUrl: "https://brayalex.com/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Servicios Eléctricos",
          description:
            "Proyecto para brindar servicios eléctricos. El proyecto está hecho con NextJS, TailwindCSS, MongoDB y Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/vr7xe9bcgnhqb9q1sxzz",
          websiteUrl: "https://henry-electricity.vercel.app/",
          githubUrl: "https://github.com/sanic16/henry-electricity/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Predio",
          description:
            "Website para la venta de autos. El proyecto está hecho con NextJS, TailwindCSS, MongoDB y Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/henry-ajquejay/huw6telvsxlrxxgtyzks",
          websiteUrl: "https://predio-henry-ajquejay.codielectro.com/",
          githubUrl: "https://github.com/sanic16/predio-henry-ajquejay",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "CONESIEE",
          description:
            "Congresos Estudiantiles de Ingeniería Eléctrica y Electrónica",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/wgpztcudjmqljlbabkko",
          githubUrl: "https://github.com/sanic16/conesiee-2024.git",
          websiteUrl: "https://conesiee.codielectro.com/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Coral y Mar",
          description:
            "Proyecto de acuario, venta de peces y accesorios. El proyecto está hecho con el stack MERN.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/jde4y1taeeiz9u2nj07x",
          websiteUrl: "https://coralymar.codielectro.com/",
          githubUrl: "https://github.com/sanic16/ecommerce-react",
          categories: {
            create: {
              name: "MERN",
            },
          },
          lang: "es",
        },
        {
          title: "smilecook",
          description:
            "Proyecto de recetas de cocina. El proyecto está hecho con el stack FRM (Flask, React, MariaDB). El manejo del estado del frontend se ha hecho con RTK y para las peticiones HTTP, RTK Query.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/j59llkw1kmyhplerfinx",
          githubUrl: "https://github.com/sanic16/smilecook-frontend",
          websiteUrl: "https://smilecook.juliosanic.site/",
          categories: {
            create: {
              name: "FRM",
            },
          },
          lang: "es",
        },
        {
          title: "JuliusBlog",
          description:
            "Blog realizado con el stack MERN. Manejo básico de autenticación y autorización con JWT. El manejo del estado del frontend se ha hecho con RTK y para las peticiones HTTP, RTK Query.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/ifn6zmvot3lywac5cjdk",
          websiteUrl: "https://julius-blog-e13d47c9a4bc.herokuapp.com/",
          githubUrl: "https://github.com/sanic16/julius-blog",
          categories: {
            connectOrCreate: {
              where: {
                name: "MERN",
              },
              create: {
                name: "MERN",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Hotel El Jaguard Dorado",
          description:
            "Hotel El Jaguard Dorado, proyecto de hotel. Realizado con Next.js.",
          websiteUrl: "https://el-jaguar-dorado.juliosanic.site/",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/bvvhczjvjnrigfsxn3mb",
          githubUrl: "https://github.com/sanic16/hotel-jaguar-dorado",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "CodiElectro",
          description:
            "Sitio web de servicios informáticos. Realizado con Next.js",
          websiteUrl: "https://www.codielectro.com",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/bjnhwjcqepyy96prll9e",
          githubUrl: "https://github.com/sanic16/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "es",
        },
        {
          title: "Personal Page",
          description:
            "Personal page of Julio Sanic. The project is built with NextJS",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/gplciebexpfzfgyw6ow5",
          websiteUrl: "https://juliosanic.site/",
          githubUrl: "https://github.com/sanic16/portafolio",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "Brayalex | The Machine Doctor",
          description:
            "Website for machine repair services. The project is built with NextJS.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/yx0sazqa2jbiv8ixtnbl",
          websiteUrl: "https://brayalex.com/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "Electrical Services",
          description:
            "Project to provide electrical services. The project is built with NextJS, TailwindCSS, MongoDB, and Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/vr7xe9bcgnhqb9q1sxzz",
          websiteUrl: "https://henry-electricity.vercel.app/",
          githubUrl: "https://github.com/sanic16/henry-electricity",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "Predio",
          description:
            "Website for car sales. The project is built with NextJS, TailwindCSS, MongoDB, and Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/henry-ajquejay/huw6telvsxlrxxgtyzks",
          websiteUrl: "https://predio-henry-ajquejay.codielectro.com/",
          githubUrl: "https://github.com/sanic16/predio-henry-ajquejay",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "CONESIEE",
          description:
            "Student Congress of Electrical and Electronic Engineering",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/wgpztcudjmqljlbabkko",
          githubUrl: "https://github.com/sanic16/conesiee-2024.git",
          websiteUrl: "https://conesiee.codielectro.com/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "Coral and Sea",
          description:
            "Aquarium project, selling fish and accessories. The project is built with the MERN stack..",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/jde4y1taeeiz9u2nj07x",
          websiteUrl: "https://coralymar.codielectro.com/",
          githubUrl: "https://github.com/sanic16/ecommerce-react",
          categories: {
            connectOrCreate: {
              where: {
                name: "MERN",
              },
              create: {
                name: "MERN",
              },
            },
          },
          lang: "en",
        },
        {
          title: "smilecook",
          description:
            "Cooking recipe project. The project is built with the FRM stack (Flask, React, MariaDB). State management on the frontend is done with RTK, and HTTP requests are handled with RTK Query.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/j59llkw1kmyhplerfinx",
          githubUrl: "https://github.com/sanic16/smilecook-frontend",
          websiteUrl: "https://smilecook.juliosanic.site/",
          categories: {
            connectOrCreate: {
              where: {
                name: "FRM",
              },
              create: {
                name: "FRM",
              },
            },
          },
          lang: "en",
        },
        {
          title: "JuliusBlog",
          description:
            "Blog built with the MERN stack. Basic authentication and authorization handling with JWT. State management on the frontend is done with RTK, and HTTP requests are handled with RTK Query.",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/ifn6zmvot3lywac5cjdk",
          websiteUrl: "https://julius-blog-e13d47c9a4bc.herokuapp.com/",
          githubUrl: "https://github.com/sanic16/julius-blog",
          categories: {
            connectOrCreate: {
              where: {
                name: "MERN",
              },
              create: {
                name: "MERN",
              },
            },
          },
          lang: "en",
        },
        {
          title: "The Golden Jaguar Hotel",
          description: "The Golden Jaguar Hotel project, built with Next.js.",
          websiteUrl: "https://el-jaguar-dorado.juliosanic.site/",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/bvvhczjvjnrigfsxn3mb",
          githubUrl: "https://github.com/sanic16/hotel-jaguar-dorado",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
        {
          title: "CodiElectro",
          description: "IT services website. Built with Next.js.",
          websiteUrl: "https://www.codielectro.com",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/bjnhwjcqepyy96prll9e",
          githubUrl: "https://github.com/sanic16/",
          categories: {
            connectOrCreate: {
              where: {
                name: "Next.js",
              },
              create: {
                name: "Next.js",
              },
            },
          },
          lang: "en",
        },
      ],
    },
  },
];

const postCategoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "Informática",
  },
  {
    name: "Electrónica",
  },
  {
    name: "Electricidad",
  },
  {
    name: "JavaScript",
  },
  {
    name: "Python",
  },
  {
    name: "Guatemala",
  },
  {
    name: "San Miguel Petapa",
  },
  {
    name: "MERN",
  },
  {
    name: "FARM",
  },
  {
    name: "Next.js",
  },
  {
    name: "Economía",
  },
  {
    name: "Finanzas",
  },
  {
    name: "Educación",
  },
  {
    name: "Salud",
  },
  {
    name: "Cocina",
  },
  {
    name: "Robótica",
  },
  {
    name: "Comunicaciones",
  },
  {
    name: "IOT",
  },
  {
    name: "Turismo",
  },
];

const searchingRouteData: Prisma.RouteCreateInput[] = [
  {
    title: "Curriculum Vitae",
    description: "Curriculum Vitae de Julio Sanic",
    path: "/es#header",
    lang: "es",
  },
  {
    title: "Curriculum Vitae",
    description: "Julio Sanic's Curriculum Vitae",
    path: "/en#header",
    lang: "en",
  },
  {
    title: "Acerca de",
    description: "Acerca de Julio Sanic",
    path: "/es#about",
    lang: "es",
  },
  {
    title: "About",
    description: "About Julio Sanic",
    path: "/en#about",
    lang: "en",
  },
  {
    title: "Algunos proyectos",
    description: "Algunos proyectos de ReactJS y NextJS",
    path: "/es#projects",
    lang: "es",
  },
  {
    title: "Some projects",
    description: "Some projects made with ReactJS and NextJS",
    path: "/en#projects",
    lang: "en",
  },
  {
    title: "Servicios",
    description: "Servicios de desarrollo web y móvil",
    path: "/es#services",
    lang: "es",
  },
  {
    title: "Services",
    description: "Web and mobile development services",
    path: "/en#services",
    lang: "en",
  },
  {
    title: "Educación",
    description: "Educación y formación",
    path: "/es#education",
    lang: "es",
  },
  {
    title: "Education",
    description: "Education and training",
    path: "/en#education",
    lang: "en",
  },
  {
    title: "Proyectos",
    description: "Todos los proyectos",
    path: "/es/projects",
    lang: "es",
  },
  {
    title: "Projects",
    description: "All projects",
    path: "/en/projects",
    lang: "en",
  },
  {
    title: "Contacto",
    description: "Contacto con Julio Sanic",
    path: "/es#contact",
    lang: "es",
  },
  {
    title: "Contact",
    description: "Contact Julio Sanic",
    path: "/en#contact",
    lang: "en",
  },
];

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  console.log(`seeding data...`);

  const numPostCategories = await prisma.postCategory.count();

  console.log(`Number of post categories: ${numPostCategories}`);
  if (numPostCategories === 0) {
    for (const c of postCategoryData) {
      const category = await prisma.postCategory.create({
        data: c,
      });
      console.log(
        `Created category with id: ${category.id} and name: ${category.name}`
      );
    }
  }

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created ${user.name} with id: ${user.id}`);
  }

  for (const r of searchingRouteData) {
    const route = await prisma.route.create({
      data: r,
    });

    console.log(`Created ${route.title} with id: ${route.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("An error occurred");
    }
    await prisma.$disconnect();
    process.exit(1);
  });
