/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#062346",
      amber: "#FFA400",
      amber500: "#f59e0b",
      amber400: "#fbbf24",
      blueSide: "#073265",
      cardColor: "#F6F6F6",
      contentColor: "#E7E7E9",
      btnGray: "#C6C4C2",
      inputBlue: "#39497a",
      bgGray: "#D9D9D9",
    },

    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        "vtd-primary": colors.blue, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
