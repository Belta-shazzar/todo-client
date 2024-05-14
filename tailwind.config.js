/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light mode
        primary: '#EDB046',
        secondary: '#BA5112',
        text: '#251814'
      }
      // },
      // fontFamily: {
      //   Monts: ["Montserrat, sans-serif"],
      //   Mont_Alt: ["Montserrat Alternates"],
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
    // Add other PostCSS plugins as needed
  ]
}
