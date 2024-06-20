import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: "#FF5C00",
        statmuse: "#00C1D8",
        proaws: "#F28F5A",
        tomorrow: "#EBFF63",
        crimson: "#F76190",
        lime: "#C4F042",
        mint: "#25D0AB",
        purple: "#8e4ec6",
        sky: "#68ddfd",
        amber: "#ffb224",
        mauve: {
          1: "#161618",
          2: "#1c1c1f",
          3: "#232326",
          4: "#28282c",
          5: "#2e2e32",
          6: "#34343a",
          7: "#3e3e44",
          8: "#504f57",
          9: "#706f78",
          10: "#7e7d86",
          11: "#a09fa6",
          12: "#ededef",
        },
        border: "rgba(225, 225, 254, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
        geist: ["var(--font-geist-mono)"],
        bebas: ["var(--font-bebas)"],
        holbeard: ["var(--font-holbeard)"],
        digital: ["var(--font-digital)"],
      },
      keyframes: {
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-top": "fade-in-top 300ms ease-out",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
} satisfies Config;

export default config;
