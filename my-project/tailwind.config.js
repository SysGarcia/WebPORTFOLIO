/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        button_primary: '#219E89',
        button_secondary: '#60B389'
      },
    },
  },
  plugins: [],
}