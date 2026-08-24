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
        noyer: "#6E4A2E",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "sans-serif"],
        sans: ["var(--font-archivo)", "sans-serif"],
        logo: ["var(--font-logo)", "cursive"],
      },
      fontSize: {
        display: ["4rem", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        titre: ["2.5rem", { lineHeight: "1" }],
        soustitre: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        corps: ["1.125rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        label: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
