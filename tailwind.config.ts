import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"]
      },
      colors: {
        primary: "#00674F",
        bodybg: "#F6F4EF",
        bodyColor: "#1A1A1A"
      },
      boxShadow: {
        luxe: "0 20px 50px rgba(133, 107, 86, 0.15)"
      }
    }
  },
  plugins: []
} satisfies Config;
