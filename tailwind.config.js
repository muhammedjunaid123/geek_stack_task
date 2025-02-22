/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        'opensans': ['Open Sans', 'sans-serif']
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
