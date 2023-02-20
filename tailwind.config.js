/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
  },
    extend: {
      colors: {
        red: "#B04137",
        lightgrey: "#F6F4F2",
        grey: "#E7E2DE",
        yellow: "#EED06C",
    },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-poppins)"],
      },
      borderRadius: {
        default: "4px",
        large: "12px",
    },
    padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
    },
    spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
    },
    maxWidth: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%"
    },
    maxHeight: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%"
    },
    minWidth: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%"
    },
    },
  },
  plugins: [],
};
