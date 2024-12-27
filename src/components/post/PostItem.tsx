import { Post } from "@prisma/client";
import classes from "./postItem.module.css";
import Author from "./Author";
import Image from "next/image";

const PostItem = ({
  post,
}: {
  post: Post & { user: { name: string | null; image: string | null } };
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
        name={post.user.name || "Anónimo"}
        imageUrl={post.user.image || ""}
      />
    </div>
  );
};

export default PostItem;
