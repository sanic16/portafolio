import React from "react";
import classes from "./layout.module.css";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classes.page}>{children}</div>;
}
