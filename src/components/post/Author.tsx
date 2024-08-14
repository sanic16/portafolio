import Image from "next/image";
import classes from "./author.module.css";

const Author = ({
  imageUrl,
  name,
  createdAt,
}: {
  imageUrl: string;
  name: string;
  createdAt: Date;
}) => {
  const date = new Date(createdAt).toLocaleDateString("es-GT", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className={classes.author}>
      <div className={classes.author__img}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className={classes.info}>
        <h5>
          {name.slice(0, 5)} {name.slice(12, 17)}
        </h5>
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Author;
