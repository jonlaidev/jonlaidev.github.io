/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(2, 2, 2)',
        red: 'rgb(212, 0, 0)',
        text: 'rgb(255, 252, 252)',
        gray: 'rgb(92, 92, 92)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        entypo: ['Entypo', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '14px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-l-none': {
          'border-left': 'none',
        },
      }, ['responsive', 'hover']);
    }
  ],
}