/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        display: ["Montserrat", "Arial", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "300",
        medium: "400",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FE5733",
          50: "#FFEDE9",
          100: "#FFDBD3",
          200: "#FFB7A7",
          300: "#FF937B",
          400: "#FF6F4F",
          500: "#FE5733",
          600: "#F03A13",
          700: "#C42B0B",
          800: "#981F06",
          900: "#6C1603",
        },
      },
      boxShadow: {
        primary: "0 0 20px rgba(254, 87, 51, 0.5)",
      },
      backgroundImage: {
        "chat-gradient":
          "linear-gradient(131.55deg, rgba(243, 244, 246, 0.8) 20%, rgba(229, 231, 235, 0.8) 100%)",
      },      
    },
  },
  plugins: [
    scrollbar({ nocompatible: true })
  ],
};
