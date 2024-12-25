/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        bg_primary: '#090C02',
        text_primary: '#E6EED6',
        text_secondary: '#CFD3C0',
        button_primary: '#3d48ba',
        button_secondary: '#5d69e3',
        button_terciary: '#54d4b4'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}