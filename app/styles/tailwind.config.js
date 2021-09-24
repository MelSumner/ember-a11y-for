module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Assistant', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        dblue: '#80FFEA',
        dgray: {
          light: '#2A2C37',
          DEFAULT: '#1D1E26',
        },
        dgreen: '#8AFF80',
        dorange: '#FF9580',
        dpink: '#FF80BF',
        dpurple: '#9580FF',
        dpurpleIris: '#7B93E8',
        dyellow: '#FFFF80',
      },
      maxWidth: {
        '8xl': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
