import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    fullName: "Julio Rubén Sanic Martínez",
    email: "julio.sanic.gt.256@gmail.com",
    password: "borden16",
    role: "ADMIN",
  },
];

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany();

  console.log(`seeding data...`);
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
