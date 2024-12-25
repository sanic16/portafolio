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

interface ThemeState {
  theme: Theme;
  saturation: string;
  lightness: string;
}

interface ThemeContext extends ThemeState {
  setPrimary: (primary: Primary) => void;
  setBg: (bg: Bg) => void;
  startPrimaryInterval: (time: number) => void;
  stopPrimaryInterval: () => void;
  newSaturation: (saturation: string) => void;
  newLightness: (lightness: string) => void;
}
