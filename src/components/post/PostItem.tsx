import { Post } from "@prisma/client";
import classes from "./postItem.module.css";
import Author from "./Author";
import Image from "next/image";

const PostItem = ({
  post,
}: {
  post: Post & { user: { fullName: string; imageUrl: string } };
}) => {
  return (
    <div className={classes.post}>
      <div className={classes.header}>
        <div className={classes.header__img}>
          <Image src={post.imageUrl} alt={post.title} fill />
        </div>
        <h3>{post.title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html:
              post.content.length > 100
                ? post.content.slice(0, 100) + " ..."
                : post.content,
          }}
        />
      </div>

      <Author
        createdAt={post.createdAt}
        name={post.user.fullName}
        imageUrl={post.user.imageUrl}
      />
    </div>
  );
};

export default PostItem;
