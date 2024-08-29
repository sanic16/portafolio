import classes from "./rotatingLoader.module.css";

const RotatingLoader = () => {
  return (
    <div className={classes.loading__wrapper}>
      <div className={classes.loading}></div>;
    </div>
  );
};

export default RotatingLoader;
