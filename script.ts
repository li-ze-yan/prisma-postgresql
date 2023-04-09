import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 创建单个记录
  // const user = await prisma.user.create({
  //   data: {
  //     email: "elsa1@prisma.io",
  //     name: "Elsa Prisma1",
  //   },
  // });
  // console.log({ user });

  // 创建多个记录
  const users = await prisma.user.createMany({
    data: [
      { name: "lizeyan", email: "lizeyan1998@gmail.com" },
      // 唯一键重复
      { name: "lizeyan_1", email: "lizeyan1998@gmail.com" },
      { name: "Din Djarin", email: "dindjarin@gmail.com" },
      { name: "Pedro Pascal", email: "pedropascal@gmail.com" },
    ],
    skipDuplicates: true, // 跳过 'Bobo'
  });
  console.log({ users });
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
