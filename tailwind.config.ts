import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d121f",
        "background-opacity": "#0d121f61",
        "background-light": "#F3F5F7",
        primary: "#7C5CFC",
        secondary: "#1E1D1E",
        "text-light": "#F3F4F6",
        "text-secondary-dark": "#90A3BF",
        "text-secondary-light": "#596780",
        "text-dark": "#040815",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
