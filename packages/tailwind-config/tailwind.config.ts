import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primaryWhite: "#ffffff",
        primaryBlack: "#1c1c1c",
        primaryBlue: "#1485c8",
        secondaryBlue: "#003047",
      },
    },
  },
  plugins: [],
};

export default config;
