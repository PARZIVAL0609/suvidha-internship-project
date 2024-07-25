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
        newBlack: '#3e3a45',
        darkBlue: '#3e2588',
        veryDarkBlue: '#211f88',        
      }
    },
  },
  plugins: [],
}

