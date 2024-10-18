import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#2C3E50",
        "primary-2": "#313e51",
        secondary: "#313e51",
        "seconday-2": "#C6ACA8",
        "secondary-3": "#546660",
        "secondary-4": "#D0D4D8",
        accent: "#FFFFFF",
      },
      backgroundImage: {
        bg : "url('/static/home/bg.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
