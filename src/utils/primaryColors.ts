const primaryColors = Array.from({ length: 360 }, (_, i) => ({
  "--primary-hue": `${(350 + i) % 360}`,
  "--primary-color": `hsl(${(350 + i) % 360}, 88%, 36%)`,
}));

export const nextPrimary = (primary: Primary): Primary => {
  const currentIndex = primaryColors.findIndex(
    (color) => color["--primary-hue"] === primary["--primary-hue"]
  );
  const nextIndex = (currentIndex + 1) % primaryColors.length;
  return primaryColors[nextIndex];
};
