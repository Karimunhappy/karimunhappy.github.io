/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", 'sans-serif'],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        bgSVG: "url('assets/images/bg-wave.png')",
      },
      colors: {
        Navy: '#231B5D',
        BlueSea: '#DCF4F4'

      }
    },
  },
  plugins: [],
}

