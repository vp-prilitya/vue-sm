/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#062346",
      amber: "#FFA400",
      amber500: "#f59e0b",
      amber400: "#fbbf24",
      blueSide: "#073265",
    },

    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
