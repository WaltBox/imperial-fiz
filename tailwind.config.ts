import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft off-white grounds — bright and clean, never stark, never cream.
        paper: {
          DEFAULT: "#FAFAF7",
          warm: "#F1F1EC", // light panel
          deep: "#E7E7E0",
        },
        ink: {
          DEFAULT: "#1A1714",
          soft: "#3E382F",
          faint: "#736B5F",
        },
        // Hero color — a confident vermillion red, vivid but not fire-truck.
        red: {
          DEFAULT: "#E12D20",
          deep: "#B81C12",
          bright: "#FF4434",
          wash: "#FBE7E2", // pale block tint
        },
        // The fizz — a brighter, friendlier soda blue.
        fizz: {
          DEFAULT: "#2E7DF2",
          light: "#9FC2FB",
          deep: "#1A57C2",
          wash: "#E9F1FE", // pale block tint
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Verdana", "sans-serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        ledger: "0.2em",
      },
      maxWidth: {
        ledger: "78rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.9" },
          "70%": { opacity: "0.9" },
          "100%": { transform: "translateY(-26px) scale(0.4)", opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        bubble: "bubble 2.6s ease-in infinite",
      },
    },
  },
  plugins: [],
};

export default config;
