import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        charcoal: {
          DEFAULT: "#141619",
          light: "#2B2F36",
          muted: "#3A3F47",
        },
        teal: {
          DEFAULT: "#00C2A8",
          dark: "#0B6B5C",
          deep: "#0B2621",
          tint: "#E9F7F4",
        },
        paper: "#FAFAFA",
        ink: {
          DEFAULT: "#141619",
          secondary: "#555b63",
          muted: "#8A9198",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
