import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        nude: "var(--nude)",
        wine: "var(--wine)",
        raspberry: "var(--raspberry)",
        red: "var(--red)",
        // Map old names to maintain layout
        primary: "var(--wine)",
        secondary: "var(--nude)",
        accent: "var(--red)",
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "0.05em",
      },
    },
  },
  plugins: [],
};
export default config;
