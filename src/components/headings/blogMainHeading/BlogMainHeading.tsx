import React from "react";
import classes from "./blogMainHeading.module.css";

interface BlogMainHeadingProps {
  children: string;
}

const BlogMainHeading: React.FC<BlogMainHeadingProps> = ({ children }) => {
  return <h1 className={classes.mainHeading}>{children}</h1>;
};

export default BlogMainHeading;
