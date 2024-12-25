const primarySpectrum = Array.from({ length: 360 }, (_, i) => ({
  "--primary-hue": `${(350 + i) % 360}`,
  "--primary-color": `hsl(${(350 + i) % 360}, 88%, 36%)`,
}));

export const primaryCompass = Array.from({ length: 24 }, (_, i) => ({
  "--primary-hue": `${(i * 15) % 360}`,
  "--primary-color": `hsl(${(i * 15) % 360}, 88%, 36%)`,
}));

export const nextPrimary = (primary: Primary): Primary => {
  const currentIndex = primarySpectrum.findIndex(
    (color) => color["--primary-hue"] === primary["--primary-hue"]
  );
  const nextIndex = (currentIndex + 1) % primarySpectrum.length;
  return primarySpectrum[nextIndex];
};
