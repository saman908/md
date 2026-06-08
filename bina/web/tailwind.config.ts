import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bina: {
          bg: "#0f0f0f",
          surface: "#1c1c1c",
          card: "#222222",
          border: "#333333",
          accent: "#e11d2a",
          muted: "#aaaaaa",
        },
      },
    },
  },
  plugins: [],
};

export default config;
