import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070B",
          900: "#0A0D13",
          850: "#0F1420",
          800: "#111827",
          700: "#1F2937"
        },
        gold: {
          500: "#BA935A",
          400: "#C9A66B",
          300: "#DFC596"
        }
      },
      boxShadow: {
        luxe: "0 8px 42px rgba(0, 0, 0, 0.34)"
      }
    }
  },
  plugins: []
} satisfies Config;
