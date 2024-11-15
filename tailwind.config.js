/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      'head': ['Cormorant Upright', 'serif'],
      'sign': ['Dancing Script', 'cursive'],

    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      spacing: {
        'container': '1300px',
      }
    },
  },
  plugins: [],
}
