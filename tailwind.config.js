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
        'bgImageCustom': "url('assets/images/taman-nasional-karimun-jawa-jawa-tengah.jpg')",
      },
    },
  },
  plugins: [],
}

