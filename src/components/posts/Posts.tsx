import prisma from "@/lib/prisma";
import classes from "./posts.module.css";
import PostItem from "../post/PostItem";

const Posts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          fullName: true,
          imageUrl: true,
        },
      },
    },
  });
  return (
    <div className={`container ${classes.posts__container}`}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
