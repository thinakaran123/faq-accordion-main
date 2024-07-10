/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        lightpink: "hsl(275, 100%, 97%)",
        grayishpurple: "hsl(292, 16%, 49%)",
        darkpurple: "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
