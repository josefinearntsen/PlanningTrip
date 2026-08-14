import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF3EA",
        "cream-deep": "#F1E7D8",
        burgundy: {
          DEFAULT: "#6E1F2B",
          light: "#8A2E3B",
          dark: "#4A1420",
        },
        dustyblue: "#9FB8C9",
        dustypink: "#E7C7C3",
        beige: "#DCC9AE",
        ink: "#2A1E1E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        polaroid: "2px",
      },
      boxShadow: {
        polaroid: "0 6px 18px rgba(42, 30, 30, 0.18), 0 2px 4px rgba(42, 30, 30, 0.10)",
        card: "0 10px 30px -12px rgba(42, 30, 30, 0.25)",
      },
      backgroundImage: {
        grain: "url('/images/grain.png')",
      },
    },
  },
  plugins: [],
};
export default config;
