/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#66B100", // Primary color
        primaryLight: "#A8D600", // Light variation of primary
        primaryDark: "#4B8F00", // Dark variation of primary
        secondary: "#FF5733", // Secondary color
        secondaryLight: "#FF8D6B", // Light variation of secondary
        secondaryDark: "#C70029", // Dark variation of secondary
      },
    },
  },
  plugins: [],
};
