import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // select 选择字段
  // await prisma.user.update({
  //   where: { id: 1 },
  //   data: {
  //     coinflips: [false, true, false],
  //   },
  // });
  // const users = await prisma.user.findUnique({
  //   where: { id: 1 },
  // });
  // console.log(JSON.stringify(users, null, 2));
  //返回默认选择集
  // const getUser: User | null = await prisma.user.findUnique({
  //   where: { id: 1 },
  // });
  // console.log({ getUser });
  // 选择特定字段
  // const getUser2: object | null = await prisma.user.findUnique({
  //   where: { id: 1 },
  //   select: {
  //     id: true,
  //     email: true,
  //     name: true,
  //   },
  // });
  // console.log({ getUser2 });
  // 包含关系并选择关系字段
  // const getUser3: object | null = await prisma.user.findMany({
  //   select: {
  //     name: true,
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // });
  // console.log(JSON.parse(JSON.stringify(getUser3)));
  // 以下查询中使用include
  const users = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          title: true,
        },
      },
    },
  });
  console.log(users);
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
