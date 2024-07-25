/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    extend: {
      colors:{
        brightRed: '#fc4102',
        lightPeach: '#fef2ef',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '#3e2588',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: '#211f88',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

