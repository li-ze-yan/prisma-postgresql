import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // include 关系字段
  // 嵌套读取
  // const getUser = await prisma.user.findUnique({
  //   where: {
  //     id: 19,
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });
  // console.log({ getUser });
  // 包括特定关系的所有字段
  // const getPosts = await prisma.post.findMany({
  //   where: {
  //     title: {
  //       contains: "我是李泽言的帖子",
  //     },
  //   },
  //   include: {
  //     author: true, // Return all fields
  //   },
  // });
  // console.log(getPosts);
  // console.log(getPosts[0].author);
  // 包括深层嵌套关系
  // const user = await prisma.user.findMany({
  //   include: {
  //     posts: {
  //       include: {
  //         categories: true,
  //       },
  //     },
  //   },
  // });
  // console.log(user);
  // 选择特定的关系字段
  // const getUser1 = await prisma.user.findUnique({
  //   where: {
  //     id: 19,
  //   },
  //   select: {
  //     name: true,
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // })
  // 还可以通过include嵌套来选择特定的关系字段
  // const getUser2 = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   // select: { name: true } <-- Can't do this!
  //   include: {
  //     posts: {
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // })
  // 不能在同一级别上使用select和include
  // 两者的区别在于，include会返回关系的所有字段，而select只返回指定的字段
  // 但可以通过嵌套来实现select的效果
  // 使用select从相关记录（例如，用户的帖子）返回数据子集时，您可以对该关系列表进行过滤和排序
  // const result = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       contains: '李泽言',
  //     },
  //   },
  //   select: {
  //     posts: {
  //       where: {
  //         published: false,
  //       },
  //       orderBy: {
  //         title: 'asc',
  //       },
  //       select: {
  //         title: true,
  //       },
  //     },
  //   },
  // })
  // console.log(result);
  // 嵌套写入
  // const createUserAndPost = await prisma.user.create({
  //   data: {
  //     email: "elsa@prisma.io",
  //     name: "Elsa",
  //     posts: {
  //       create: [
  //         { title: "How to make an omelette" },
  //         { title: "How to eat an omelette" },
  //       ],
  //     },
  //   },
  // });
  // console.log(createUserAndPost);
  // 连接现有记录
  // const user = await prisma.user.create({
  //   data: {
  //     email: "vlad@prisma.io",
  //     posts: {
  //       connect: [{ id: 8 }, { id: 9 }, { id: 10 }],
  //     },
  //   },
  //   include: {
  //     posts: true, // Include all posts in the returned object
  //   },
  // });
  // console.log(user);
  // const user = await prisma.user.update({
  //   where: {
  //     email: "vlad@prisma.io",
  //   },
  //   data: {
  //     name: "vlad",
  //   },
  // });
  // console.log(user);
  // 连接或创建记录
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "How to make croissants",
  //     author: {
  //       connectOrCreate: {
  //         where: {
  //           email: "viola@prisma.io",
  //         },
  //         create: {
  //           email: "viola@prisma.io",
  //           name: "Viola",
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     author: true,
  //   },
  // });
  // console.log(createPost);
  // 断开相关记录
  // 多条
  // const updatePost = await prisma.user.update({
  //   where: {
  //     id: 16,
  //   },
  //   data: {
  //     posts: {
  //       disconnect: [{ id: 12 }, { id: 19 }],
  //     },
  //   },
  //   select: {
  //     posts: true,
  //   },
  // })
  // 单条
  // const updatePost = await prisma.post.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     author: {
  //       disconnect: [{ id: 1 }],
  //     },
  //   },
  //   include: {
  //     author: true,
  //   },
  // });
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
