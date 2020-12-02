const colors = require('tailwindcss/colors')

// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui']
      },
      colors: {
        lime: colors.lime,
        green: colors.green,
        gray: colors.trueGray
      }
    }
  },
  variants: {},
  plugins: []
}
