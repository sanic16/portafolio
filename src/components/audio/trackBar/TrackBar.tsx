"use client";

import useContextPlayer from "@/hooks/useContextPlayer";
import classes from "./trackBar.module.css";

const TrackBar = () => {
  const { duration, currentTime, changeCurrentTime } = useContextPlayer();
  return (
    <div className={classes.track__bar}>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => changeCurrentTime(parseFloat(e.target.value))}
        className="track__range"
      />
    </div>
  );
};

export default TrackBar;
