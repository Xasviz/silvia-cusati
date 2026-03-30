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
        background: "oklch(95.4% 0.015 200)", // #cbeef3 approx in oklch
        primary: "oklch(35.5% 0.142 27.3)",   // #880d1e
        secondary: "oklch(71.4% 0.175 4.5)", // #f26a8d
        accent: "oklch(53.2% 0.231 22.5)",    // #dd2d4a
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
