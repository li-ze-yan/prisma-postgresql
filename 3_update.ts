import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 更新
  // 更新单个记录
  // const user = await prisma.user.update({
  //   where: {
  //     email: "wangyi@qq.com",
  //   },
  //   data: {
  //     name: "王懿儿",
  //   },
  // });
  // console.log({ user });
  // 更新多个记录
  // const users = await prisma.user.updateMany({
  //   where: {
  //     email: {
  //       contains: "gmail.com",
  //     },
  //   },
  //   data: {
  //     role: "ADMIN",
  //   },
  // });
  // console.log({ users });
  // 更新 或 创建记录
  // const user = await prisma.user.upsert({
  //   where: {
  //     email: "viola@prisma.io",
  //   },
  //   update: {
  //     name: "viola",
  //   },
  //   create: {
  //     email: "viola@prisma.io",
  //     name: "viola",
  //   },
  // });
  // console.log({ user });
  // 更新数字字段
  const post = await prisma.post.updateMany({
    where: {
      published: true,
    },
    data: {
      views: {
        increment: 1,
      },
      likes: {
        increment: 1,
      },
    },
  });
  console.log({ post });
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
