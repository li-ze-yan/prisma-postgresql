import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 做删除操作前先生成需要操作的数据
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "test1",
  //       email: "test1@qq.com",
  //     },
  //     {
  //       name: "test2",
  //       email: "test2@qq.com",
  //     },
  //     {
  //       name: "test3",
  //       email: "test3@qq.com",
  //     },
  //   ],
  // });
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "test3@qq.com",
  //   },
  // });
  // const post = await prisma.post.create({
  //   data: {
  //     title: "test",
  //     content: "test",
  //     author_id: user?.id,
  //   },
  // });
  // console.log(post);
  // 删除
  // 删除单条记录
  // const user = await prisma.user.delete({
  //   where: {
  //     email: "test1@qq.com",
  //   },
  // });
  // console.log({ user });
  // 删除多条记录
  // const users = await prisma.user.deleteMany({
  //   where: {
  //     email: {
  //       contains: "test",
  //     },
  //   },
  // });
  // console.log({ users });
  // 删除所有记录
  // const users = await prisma.user.deleteMany({});
  // 级联删除
  // const deletePosts = prisma.post.deleteMany({
  //   where: {
  //     author_id: 22,
  //   },
  // });
  // const deleteUsers = prisma.user.delete({
  //   where: {
  //     id: 22,
  //   },
  // });
  // const result = await prisma.$transaction([deletePosts, deleteUsers]);
  // console.log(result);
  // 从所有表中删除所有记录
  // 事务同步进行，因此deleteUsers必须最后执行
  // const deletePosts = prisma.post.deleteMany({});
  // const deleteProfiles = prisma.profile.deleteMany({});
  // const deleteUsers = prisma.user.deleteMany({});
  // await prisma.$transaction([deletePosts, deleteProfiles, deleteUsers]);
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
