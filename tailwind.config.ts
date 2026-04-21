import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0b1d35",
          deep: "#071629",
          mid: "#132b4d",
        },
        teal: {
          DEFAULT: "#0a8f9e",
          light: "#12b5c8",
        },
        copper: {
          DEFAULT: "#c0854a",
          light: "#d4a76a",
          deep: "#a86f38",
        },
        gold: "#d4af37",
        "off-white": "#fafaf8",
        cream: "#f5f0e8",
        sand: "#ede4d6",
        dark: "#0f0f0f",
        body: "#3a3a3a",
        muted: "#8a8a8a",
        border: "#e8e3db",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
}

export default config
