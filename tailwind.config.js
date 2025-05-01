module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // semantic colors
        back: {
          light: '#D0E0F0',
          dark: '#102030',
        },
        fore: {
          light: '#203040',
          dark: '#A0B0C0',
        },
      },
    },
  },
  plugins: [],
};