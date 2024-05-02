import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // container: {
      //   screens: {
      //     "2xl": "2000px",
      //   },
      // },
      fontFamily: {
        primary: ["var(--font-mons)"],
        secondary: ["var( --font-kanit)"],
      },
      colors: {
        black: "#1E1E1E",
        beige: "#F2F3D9",
        orange: "#DB6332",
        gray: "#919191",
      },
    },
  },
  plugins: [],
};
export default config;
