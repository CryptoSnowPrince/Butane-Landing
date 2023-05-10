/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: {
      'background': '#17181d',
      'drawer': '#020109',
      'mandatory': '#202e81',
      'primary': '#312e81',
      'border': '#312640',
      'secondary': '#56486b',
      'accent': '#9333ea',
      'white': '#ffffff'
    },
    textColor: {
      'primary': 'white',
      'secondary': '#56486b',
      'base': '#56486b',
      'hover': '#6b21a8',
      'mandatory': 'red',
      'archivo': '#9333ea',
      'accent': '#9333ea'
    },
  },
  plugins: [require("daisyui")]
}