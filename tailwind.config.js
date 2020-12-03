const colors = require('tailwindcss/colors')

// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Quicksand', 'Poppins', 'system-ui']
      },
      colors: {
        lime: colors.lime,
        green: colors.green,
        gray: colors.gray
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
}
