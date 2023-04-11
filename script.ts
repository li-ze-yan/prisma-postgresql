import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 创建深度嵌套的记录树
  const user = await prisma.user.create({
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
    },
    data: {
      name: "郑晗",
      email: "zhenghan@163.com",
      posts: {
        create: [
          {
            title: "Prisma makes databases easy",
            categories: {
              connectOrCreate: [
                {
                  create: { name: "Prisma" },
                  where: { name: "Prisma" },
                },
                {
                  create: { name: "GraphQL" },
                  where: { name: "GraphQL" },
                },
              ],
            },
          },
          {
            title: "Follow Prisma on Twitter",
            categories: {
              connectOrCreate: [
                {
                  create: { name: "Prisma" },
                  where: { name: "Prisma" },
                },
                {
                  create: { name: "Twitter" },
                  where: { name: "Twitter" },
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log(JSON.stringify(user));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
