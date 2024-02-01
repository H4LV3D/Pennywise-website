import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      clash: ["ClashDisplay", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-green": "#80FF00",
        "brand-blue": "#023047",
        "brand-light-blue": "#4CC9F0",
        "brand-white": "#FBFBFB",
      },
    },
  },
  plugins: [],
};
export default config;
