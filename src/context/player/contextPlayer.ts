import { createContext } from "react";

export const contextPlayer = createContext<ContextPlayer>({
  nextSong: () => {},
  previousSong: () => {},
  playAudio: () => {},
  pauseAudio: () => {},
  stopAudio: () => {},
  isPaused: true,
  currentSongIndex: 0,
  setCurrentSongIndex: () => {},
  changeVolume: () => {},
  volume: 1,
  currentTime: 0,
  duration: 0,
  changeCurrentTime: () => {},
  songs: [],
  changeSongs: () => {},
  isPlaying: false,
  isOptionsOpen: true,
  openOptions: () => {},
  closeOptions: () => {},
});
