"use client";

import useContextPlayer from "@/hooks/useContextPlayer";
import {
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaStop,
} from "react-icons/fa";
import classes from "./controls.Menu.module.css";

const ControlsMenu = () => {
  const { nextSong, pauseAudio, playAudio, previousSong, stopAudio } =
    useContextPlayer();

  return (
    <div className={classes.float__menu}>
      <button onClick={previousSong}>
        <FaStepBackward />
      </button>
      <button onClick={playAudio}>
        <FaPlay />
      </button>
      <button onClick={pauseAudio}>
        <FaPause />
      </button>
      <button onClick={stopAudio}>
        <FaStop />
      </button>
      <button onClick={nextSong}>
        <FaStepForward />
      </button>
    </div>
  );
};

export default ControlsMenu;
