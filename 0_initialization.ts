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
        city: "chengdu",
        country: "China",
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
  const profiles = await prisma.profile.createMany({
    data: [
      {
        user_id: 1,
        bio: "我是李泽言",
      },
      {
        user_id: 2,
        bio: "我是谭坤新",
      },
      {
        user_id: 3,
        bio: "我是白晶",
      },
      {
        user_id: 4,
        bio: "我是雷浪",
      },
      {
        user_id: 5,
        bio: "我是李雨杭",
      },
      {
        user_id: 6,
        bio: "我是解岩",
      },
      {
        user_id: 7,
        bio: "我是沈华强",
      },
      {
        user_id: 8,
        bio: "我是王懿",
      },
      {
        user_id: 9,
        bio: "我是熊原",
      },
      {
        user_id: 10,
        bio: "我是陈昌华",
      },
      {
        user_id: 11,
        bio: "我是姜云显",
      },
      {
        user_id: 12,
        bio: "我是李中文",
      },
      {
        user_id: 13,
        bio: "我是欧相宏",
      },
      {
        user_id: 14,
        bio: "我是秦俊杰",
      },
      {
        user_id: 15,
        bio: "我是夏强",
      },
      {
        user_id: 16,
        bio: "我是王钰棂",
      },
      {
        user_id: 17,
        bio: "我是张仕传",
      },
      {
        user_id: 18,
        bio: "我是曾祥涛",
      },
    ],
  });
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "我是李泽言的帖子",
        content: "我是李泽言的帖子内容",
        published: true,
        author_id: 1,
        likes: 100,
      },
      {
        title: "我是谭坤新的帖子",
        content: "我是谭坤新的帖子内容",
        author_id: 2,
        likes: 0,
      },
      {
        title: "我是解岩的帖子",
        content: "我是解岩的帖子内容",
        published: true,
        author_id: 6,
        likes: 130,
      },
      {
        title: "我是熊原的帖子",
        content: "我是熊原的帖子内容",
        published: true,
        author_id: 9,
        likes: 188,
      },
      {
        title: "我是张仕传的帖子",
        content: "我是张仕传的帖子内容",
        published: true,
        author_id: 17,
        likes: 178,
      },
      {
        title: "我是曾祥涛的帖子",
        content: "我是李曾祥涛的帖子内容",
        published: true,
        author_id: 18,
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
  const postInCategorys = await prisma.postInCategories.createMany({
    data: [
      { category_id: 1, post_id: 1 },
      { category_id: 2, post_id: 2 },
      { category_id: 3, post_id: 3 },
      { category_id: 4, post_id: 4 },
      { category_id: 5, post_id: 5 },
      { category_id: 6, post_id: 6 },
    ],
  });
  console.log(users);
  console.log(profiles);
  console.log(posts);
  console.log(categorys);
  console.log(postInCategorys);
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
