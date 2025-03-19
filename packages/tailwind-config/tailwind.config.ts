import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "#1c1c1c",
        primaryGray: "#E3E3E3",
        secondaryGray: "#D1D1D1",
        primaryBlue: "#1485c8",
        secondaryBlue: "#003047",
        primaryRed: "#DC2626",
        primaryGreen: "#009900",
        primaryOrange: "#eab308",
      },
      screens: {
        "440": "440px",
        "640": "640px",
        "768": "768px",
        "880": "880px",
        "1024": "1024px",
        "1280": "1280px",
        "1536": "1536px",
        "1920": "1920px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
