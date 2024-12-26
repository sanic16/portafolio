"use client";

import useContextPlayer from "@/hooks/useContextPlayer";
import {
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaStop,
  FaVolumeDown,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
  FaTimes,
} from "react-icons/fa";
import classes from "./controls.Menu.module.css";

const ControlsMenu = () => {
  const {
    nextSong,
    pauseAudio,
    playAudio,
    previousSong,
    stopAudio,
    isPlaying,
    volume,
    changeVolume,
    isOptionsOpen,
    openOptions,
    closeOptions,
  } = useContextPlayer();

  return (
    <>
      <div className={classes.controls__toggle}>
        <button onClick={isOptionsOpen ? closeOptions : openOptions}>
          {isOptionsOpen ? <FaTimes /> : <FaMusic />}
        </button>
      </div>
      <div
        className={`${classes.controls} ${isOptionsOpen ? classes.active : ""}`}
      >
        <div className={classes.float__menu}>
          <button onClick={previousSong}>
            <FaStepBackward />
          </button>
          {isPlaying ? (
            <button onClick={pauseAudio}>
              <FaPause />
            </button>
          ) : (
            <button onClick={playAudio}>
              <FaPlay />
            </button>
          )}
          <button onClick={stopAudio}>
            <FaStop />
          </button>
          <button onClick={nextSong}>
            <FaStepForward />
          </button>
        </div>
        <div className={classes.volume}>
          <div className={classes["volume__control"]}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              disabled={!isPlaying}
            />
          </div>
          <span
            className={classes.volume__icon}
            onClick={() => {
              changeVolume(volume === 0 ? 1 : 0);
            }}
          >
            {volume === 0 ? (
              <FaVolumeMute />
            ) : volume < 0.5 ? (
              <FaVolumeDown />
            ) : (
              <FaVolumeUp />
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default ControlsMenu;
