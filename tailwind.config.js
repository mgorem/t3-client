/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   welcome: "url('./src/assets/t3-welcome.jpg')",
      // },
      fontFamily: {
        sans: ["Montserrat Alternates", "sans-serif"],
        primary: ["Cormorant Garamond", "serif"],
      },
      colors: {
        background: "#191919",
        primary: "#2D4263",
        secondary: "darkorange",
        tertiary: "lightgray",
      },
    },
  },
  plugins: [],
};
