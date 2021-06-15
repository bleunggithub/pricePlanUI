module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    colors: {
      'default': '#333333',
      'green': '#A7C957',
      'grey': '#BDBDBD',
      'red': '#EF767A',
      'white': '#ffffff',
    },
    backgroundColor: {
      'white':'#ffffffCC',
    },
    fill: {
      'red': '#EF767A',
      'green': '#A7C957',
    },
    borderColor: {
      'darkGrey':'#BDBDBD',
      'lightGrey': '#E5E5E5'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
