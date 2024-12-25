const primarySpectrum = (saturation: string, lightness: string): Primary[] => {
  return Array.from({ length: 360 }, (_, i) => ({
    "--primary-hue": `${(350 + i) % 360}`,
    "--primary-color": `hsl(${(350 + i) % 360}, ${saturation}%, ${lightness}%)`,
  }));
};

export const primaryCompass = Array.from({ length: 24 }, (_, i) => ({
  "--primary-hue": `${(i * 15) % 360}`,
  "--primary-color": `hsl(${(i * 15) % 360}, 88%, 36%)`,
}));

export const nextPrimary = (
  primary: Primary,
  saturation: string,
  lightness: string
): Primary => {
  const currentIndex = primarySpectrum(saturation, lightness).findIndex(
    (color) => color["--primary-hue"] === primary["--primary-hue"]
  );
  const nextIndex =
    (currentIndex + 1) % primarySpectrum(saturation, lightness).length;
  return primarySpectrum(saturation, lightness)[nextIndex];
};

export const changeColorTone = (
  primary: Primary,
  saturation: string,
  lightness: string
): Primary => {
  const primaryHue = primary["--primary-hue"];
  return {
    "--primary-hue": primaryHue,
    "--primary-color": `hsl(${primaryHue}, ${saturation}%, ${lightness}%)`,
  };
};
