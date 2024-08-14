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
        },
        {
          title: "Servicios Eléctricos",
          description:
            "Proyecto de servicios eléctricos. Componetizado con Next.js y TailwindCSS.",
          websiteUrl: "https://electroser.juliosanic.site/",
          githubUrl: "https://github.com/sanic16/tailwind_servicios_electricos",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/snn7zn6relapeog9osic",
          categories: {
            connectOrCreate: {
              where: {
                name: "TailwindCSS",
              },
              create: {
                name: "TailwindCSS",
              },
            },
          },
        },
        {
          title: "NextJS Discuss",
          description:
            "Proyecto de foro. Realizado con Next.js, TailwindCSS, MongoDB y AuthJS",
          websiteUrl: "https://discuss.juliosanic.site/",
          githubUrl: "https://github.com/sanic16/nextjs-discuss",
          imageUrl:
            "https://res.cloudinary.com/dczuv9eyw/image/upload/portfolio/clg5pgfzqd94wklrahok",
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
