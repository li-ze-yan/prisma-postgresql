import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 按ID或唯一标识符获取记录 按唯一标识符
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "lizeyan1998@gmail.com",
  //   },
  // });
  // console.log({ user });
  // 按ID或唯一标识符获取记录 按ID
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log({ user });
  // 按复合 ID 或复合唯一标识符获取记录
  // 请注意，复合 ID 的顺序与 Prisma 模式中定义的顺序相同
  // 要通过此复合 ID 检索时间段，请使用生成的 year_quarter 字段，该字段遵循 fieldName1_fieldName2 模式
  // 先创建一个时间段
  // const timePeriod = await prisma.timePeriod.create({
  //   data: {
  //     quarter: 4,
  //     year: 2023,
  //     total: 100,
  //   },
  // });
  // console.log({ timePeriod });
  // 然后通过 year_quarter 字段获取
  // const timePeriod = await prisma.timePeriod.findUnique({
  //   where: {
  //     year_quarter: {
  //       quarter: 4,
  //       year: 2023,
  //     },
  //   },
  // });
  // console.log({ timePeriod });
  // 要通过此唯一标识符检索时间段，请使用自定义 timePeriodId 字段
  // const timePeriod = await prisma.timePeriod.findUnique({
  //   where: {
  //     timePeriodId: {
  //       quarter: 4,
  //       year: 2023,
  //     },
  //   },
  // });
  // console.log({ timePeriod });
  // 获取所有记录
  // const users = await prisma.user.findMany();
  // console.log({ users });
  // 获取与特定条件匹配的第一条记录
  // 创建几个操作数据
  // const posts = await prisma.post.createMany({
  //   data: [
  //     {
  //       author_id: 3,
  //       title: "Prisma makes databases easy",
  //       content: "This is a great content",
  //       likes: 120,
  //       published: false,
  //     },
  //     {
  //       author_id: 3,
  //       title: "hello, world",
  //       content: "hello, world",
  //       likes: 10,
  //       published: false,
  //     },
  //     {
  //       author_id: 3,
  //       title: "hello, prisma",
  //       content: "hello, prisma",
  //       likes: 150,
  //       published: true,
  //     },
  //     {
  //       author_id: 3,
  //       title: "hello, react",
  //       content: "hello, react",
  //       likes: 130,
  //       published: true,
  //     },
  //     {
  //       author_id: 3,
  //       title: "hello, vue",
  //       content: "hello, vue",
  //       likes: 110,
  //       published: true,
  //     },
  //     {
  //       author_id: 3,
  //       title: "hello, tailwindcss",
  //       content: "hello, tailwindcss",
  //       likes: 30,
  //       published: true,
  //     },
  //   ],
  // });
  // console.log({ posts });
  // const findUser = await prisma.user.findFirst({
  //   where: {
  //     posts: {
  //       some: {
  //         likes: {
  //           gt: 100,
  //         },
  //       },
  //     },
  //   },
  //   orderBy: {
  //     id: "asc",
  //   },
  // });
  // console.log({ findUser });
  // 按单个字段值过滤
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: "gmail.com",
  //     },
  //   },
  // });
  // console.log({ users });
  // 按多个字段值过滤
  // const users = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         name: {
  //           endsWith: "an",
  //         },
  //       },
  //       {
  //         AND: {
  //           profileViews: {
  //             gt: 10,
  //           },
  //           role: {
  //             equals: "ADMIN",
  //           },
  //         },
  //       },
  //     ],
  //   },
  // });
  // console.log({ users });
  // 按相关记录字段值过滤
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       endsWith: "gmail.com",
  //     },
  //     posts: {
  //       some: {
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // console.log({ users });
  // 选择字段的子集
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "lizeyan@gmail.com",
  //   },
  //   select: {
  //     email: true,
  //     name: true,
  //   },
  // });
  // console.log({ user });
  // 选择相关记录字段的子集
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "lizeyan@gmail.com",
  //   },
  //   select: {
  //     email: true,
  //     posts: {
  //       select: {
  //         likes: true,
  //       },
  //     },
  //   },
  // });
  // console.log(user?.posts);

  // 包括相关记录
  const users = await prisma.user.findMany({
    where: {
      role: "ADMIN",
    },
    include: {
      posts: true,
    },
  });

  console.log([...users]);
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
