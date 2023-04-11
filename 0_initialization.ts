import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 初始化user
  const users = await prisma.user.createMany({
    data: [
      {
        name: "李泽言",
        email: "lizeyan@gmail.com",
        role: "ADMIN",
        profileViews: 100,
      },
      {
        name: "谭坤新",
        email: "tankunxin@qq.com",
      },
      {
        name: "白晶",
        email: "baijing@gmail.com",
      },
      {
        name: "雷浪",
        email: "leilang@qq.com",
      },
      {
        name: "李雨杭",
        email: "liyuhang@qq.com",
      },
      {
        name: "解岩",
        email: "xieyan@gmail.com",
      },
      {
        name: "沈华强",
        email: "shenhuaqiang@gmail.com",
      },
      {
        name: "王懿",
        email: "wangyi@qq.com",
      },
      {
        name: "熊原",
        email: "xiongyuan@gmail.com",
      },
      {
        name: "陈昌华",
        email: "chenchanghua@gmail.com",
      },
      {
        name: "姜云显",
        email: "jiangyunxian@gmail.com",
      },
      {
        name: "李中文",
        email: "lizhongwen@qq.com",
      },
      {
        name: "欧相宏",
        email: "ouxianghong@qq.com",
      },
      {
        name: "秦俊杰",
        email: "qinjunjie@qq.com",
      },
      {
        name: "夏强",
        email: "xiaqiang@163.com",
      },
      {
        name: "王钰棂",
        email: "wangyuling@163.com",
      },
      {
        name: "张仕传",
        email: "zhangshichuan@gmail.com",
      },
      {
        name: "曾祥涛",
        email: "zengxiangtao@gmail.com",
      },
    ],
  });
  const profiles = await prisma.extendedProfile.createMany({
    data: [
      {
        userId: 1,
        biography: "我是李泽言",
      },
      {
        userId: 2,
        biography: "我是谭坤新",
      },
      {
        userId: 3,
        biography: "我是白晶",
      },
      {
        userId: 4,
        biography: "我是雷浪",
      },
      {
        userId: 5,
        biography: "我是李雨杭",
      },
      {
        userId: 6,
        biography: "我是解岩",
      },
      {
        userId: 7,
        biography: "我是沈华强",
      },
      {
        userId: 8,
        biography: "我是王懿",
      },
      {
        userId: 9,
        biography: "我是熊原",
      },
      {
        userId: 10,
        biography: "我是陈昌华",
      },
      {
        userId: 11,
        biography: "我是姜云显",
      },
      {
        userId: 12,
        biography: "我是李中文",
      },
      {
        userId: 13,
        biography: "我是欧相宏",
      },
      {
        userId: 14,
        biography: "我是秦俊杰",
      },
      {
        userId: 15,
        biography: "我是夏强",
      },
      {
        userId: 16,
        biography: "我是王钰棂",
      },
      {
        userId: 17,
        biography: "我是张仕传",
      },
      {
        userId: 18,
        biography: "我是曾祥涛",
      },
    ],
  });
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "我是李泽言的帖子",
        content: "我是李泽言的帖子内容",
        published: true,
        authorId: 1,
        likes: 100,
      },
      {
        title: "我是谭坤新的帖子",
        content: "我是谭坤新的帖子内容",
        authorId: 2,
        likes: 0,
      },
      {
        title: "我是解岩的帖子",
        content: "我是解岩的帖子内容",
        published: true,
        authorId: 6,
        likes: 130,
      },
      {
        title: "我是熊原的帖子",
        content: "我是熊原的帖子内容",
        published: true,
        authorId: 9,
        likes: 188,
      },
      {
        title: "我是张仕传的帖子",
        content: "我是张仕传的帖子内容",
        published: true,
        authorId: 17,
        likes: 178,
      },
      {
        title: "我是曾祥涛的帖子",
        content: "我是李曾祥涛的帖子内容",
        published: true,
        authorId: 18,
        likes: 200,
      },
    ],
  });
  const categorys = await prisma.category.createMany({
    data: [
      {
        name: "记叙",
      },
      {
        name: "说明",
      },
      {
        name: "议论",
      },
      {
        name: "应用",
      },
      {
        name: "诗歌",
      },
      {
        name: "小说",
      },
      {
        name: "戏剧",
      },
      {
        name: "散文",
      },
    ],
  });
  console.log(users);
  console.log(profiles);
  console.log(posts);
  console.log(categorys);
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
