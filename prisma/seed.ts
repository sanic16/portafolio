import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    fullName: "Julio Rubén Sanic Martínez",
    email: "julio.sanic.gt.256@gmail.com",
    password: "borden16",
    role: "ADMIN",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/portfolio/emmwvxo0jokjq9nu8ulx",
    projects: {
      create: [
        {
          title: "Servicios Eléctricos",
          description:
            "Proyecto de servicios eléctricos. Componetizado con Next.js y TailwindCSS.",
          websiteUrl: "https://henry-electricity.vercel.app/",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/vr7xe9bcgnhqb9q1sxzz",
          githubUrl: "",
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
          lang: "ES",
        },
        {
          title: "Predio",
          description:
            "Website para la venta de autos. El proyecto está hecho con NextJS, TailwindCSS, MongoDB y Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/henry-ajquejay/huw6telvsxlrxxgtyzks",
          githubUrl: "",
          websiteUrl: "https://predio-henry-ajquejay.codielectro.com/",
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
          lang: "ES",
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
          lang: "ES",
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
          lang: "ES",
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
          lang: "ES",
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
          lang: "ES",
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
          lang: "ES",
        },
        // ENGLISH
        {
          title: "Electrical Services",
          description:
            "Electrical services project. Componentized with Next.js and TailwindCSS.",
          websiteUrl: "https://henry-electricity.vercel.app/",
          githubUrl: "",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/vr7xe9bcgnhqb9q1sxzz",
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
          lang: "EN",
        },
        {
          title: "Predio",
          description:
            "Website for car sales. The project is built with NextJS, TailwindCSS, MongoDB, and Shadcn",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/henry-ajquejay/huw6telvsxlrxxgtyzks",
          githubUrl: "",
          websiteUrl: "https://predio-henry-ajquejay.codielectro.com/",
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
          lang: "EN",
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
          lang: "ES",
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
          lang: "EN",
        },
        {
          title: "Coral and Sea",
          description:
            "Aquarium project, selling fish and accessories. The project is built with the MERN stack.",
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
          lang: "EN",
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
          lang: "EN",
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
          lang: "EN",
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
          lang: "EN",
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
          lang: "EN",
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
    console.log(`Created ${user.fullName} with id: ${user.id}`);
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
