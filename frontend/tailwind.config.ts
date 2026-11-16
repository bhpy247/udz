import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAF7F2",
          DEFAULT: "#F7F4ED", // Background
          100: "#F7F4ED",
          200: "#E9DFCF",     // Secondary background
          300: "#DACBB7",
        },
        charcoal: {
          DEFAULT: "#252820", // Primary text
          muted: "#555A4D",
          light: "#7B8072",
        },
        terracotta: {
          DEFAULT: "#B56B4B", // Terracotta
          hover: "#9E593A",
          light: "#F7EFEA",
          dark: "#7D3D25",
        },
        olive: {
          DEFAULT: "#777C61", // Muted olive
          hover: "#646950",
          light: "#EFF0EC",
          dark: "#4B4F3B",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
