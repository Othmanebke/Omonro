import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "noir-encre": "#0E0E0E",
        "blanc-craie": "#F7F3EC",
        kraft: "#DCC7AB",
        chene: "#B4885C",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "sans-serif"],
        sans: ["var(--font-archivo)", "sans-serif"],
      },
      letterSpacing: {
        label: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
