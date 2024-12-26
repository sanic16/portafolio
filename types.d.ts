type Primary = {
  "--primary-hue": string;
  "--primary-color": string;
};

type Bg = {
  "--white-lightness": string;
  "--light-lightness": string;
  "--dark-lightness": string;
  "--black-lightness": string;
  "--white-color": string;
  "--light-color": string;
  "--dark-color": string;
  "--black-color": string;
};

type Theme = {
  primary: Primary;
  bg: Bg;
};

type Mode = "static" | "cycle";

interface ThemeState {
  theme: Theme;
  saturation: string;
  lightness: string;
  mode: Mode;
}

interface ThemeContext extends ThemeState {
  setPrimary: (primary: Primary) => void;
  setBg: (bg: Bg) => void;
  startPrimaryInterval: (time: number) => void;
  stopPrimaryInterval: () => void;
  newSaturation: (saturation: string) => void;
  newLightness: (lightness: string) => void;
  changeMode: (mode: Mode) => void;
}

type ContextPlayer = {
  nextSong: () => void;
  previousSong: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  stopAudio: () => void;
  isPaused: boolean;
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  changeVolume: (volume: number) => void;
  volume: number;
  currentTime: number;
  duration: number;
  changeCurrentTime: (time: number) => void;
  songs: string[];
  changeSongs: (songs: string[]) => void;
  isPlaying: boolean;
};
