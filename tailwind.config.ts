import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        retro: ['"VT323"', "monospace"],
      },
      colors: {
        awge: {
          yellow: "#FFFF00",
          black: "#000000",
          gray: "#1a1a1a",
        },
      },
      animation: {
        "pulse-fast": "pulse 0.1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glitch: "glitch 1s linear infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
