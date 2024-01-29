/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      pops: ['Poppins', 'sans-serif']
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#1E1345',
        secondary: '#00C0FF'
      }
    }
  },
  plugins: []
}
