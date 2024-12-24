const primaryColors: Primary[] = [
  {
    "--primary-hue": "350",
    "--primary-color": "hsl(350, 88%, 36%)",
  },
  { "--primary-hue": "30", "--primary-color": "hsl(30, 88%, 36%)" },
  { "--primary-hue": "80", "--primary-color": "hsl(80, 88%, 36%)" },
  {
    "--primary-hue": "150",
    "--primary-color": "hsl(150, 88%, 36%)",
  },
  {
    "--primary-hue": "190",
    "--primary-color": "hsl(190, 88%, 36%)",
  },
  {
    "--primary-hue": "215",
    "--primary-color": "hsl(215, 88%, 36%)",
  },
  {
    "--primary-hue": "260",
    "--primary-color": "hsl(260, 88%, 36%)",
  },
  {
    "--primary-hue": "300",
    "--primary-color": "hsl(300, 88%, 36%)",
  },
];

const bgColors: Bg[] = [
  {
    "--white-lightness": "100%",
    "--light-lightness": "96%",
    "--dark-lightness": "20%",
    "--black-lightness": "10%",
    "--white-color": "hsl(0, 0%, 100%)",
    "--light-color": "hsl(0, 0%, 96%)",
    "--dark-color": "hsl(0, 0%, 20%)",
    "--black-color": "hsl(0, 0%, 10%)",
  },
];

const themeReducer = (state: Theme, action: { type: Primary | Bg }): Theme => {
  return state;
};

export default themeReducer;
