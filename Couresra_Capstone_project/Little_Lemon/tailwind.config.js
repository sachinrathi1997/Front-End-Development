/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        nandor: {
          50: "#f6f7f7",
          100: "#e0e7e4",
          200: "#c1cec9",
          300: "#9aaea6",
          400: "#748d84",
          500: "#5a726a",
          600: "#495e57",
          700: "#3b4a45",
          800: "#323d3a",
          900: "#2c3532",
          950: "#161d1b",
        },
        gold: {
          50: "#fdfde9",
          100: "#fdfac4",
          200: "#fbf18d",
          300: "#f8e24c",
          400: "#f4ce14",
          500: "#e4b70e",
          600: "#c58e09",
          700: "#9d660b",
          800: "#825111",
          900: "#6f4214",
          950: "#412207",
        },
        //secondary
        apricot: {
          50: "#fdf4ef",
          100: "#fbe5d9",
          200: "#f6c9b2",
          300: "#ee9972",
          400: "#e9764e",
          500: "#e3532c",
          600: "#d53c21",
          700: "#b12b1d",
          800: "#8d251f",
          900: "#72211c",
          950: "#3d0e0d",
        },
        negroni: {
          50: "#fef6ee",
          100: "#fdebd7",
          200: "#fbdabb",
          300: "#f7b47a",
          400: "#f28a45",
          500: "#ef6a20",
          600: "#e05116",
          700: "#ba3b14",
          800: "#943118",
          900: "#772a17",
          950: "#40130a",
        },
        porcelain: {
          50: "#f7f8f7",
          100: "#edefee",
          200: "#d9dedc",
          300: "#b9c0bc",
          400: "#929e97",
          500: "#75827a",
          600: "#5e6b64",
          700: "#4d5752",
          800: "#424a46",
          900: "#3a403d",
          950: "#262b28",
        },
        mine: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#333333",
          950: "#262626",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};