import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-open": {
          "0%": { height: "0%" },
          "50%": { height: "30%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        "accordion-open": "accordion-open 0.5s ease-in-out",
      },
      colors: {
        primary: "#2C3E50",
        "primary-2": "#ECF0F1",
        secondary: "#F2EEEA",
        "seconday-2": "#C6ACA8",
        "secondary-3": "#546660",
        "secondary-4": "#3E4044",
        accent: "#DA5428",
      },
    },
  },
  plugins: [],
};
export default config;
