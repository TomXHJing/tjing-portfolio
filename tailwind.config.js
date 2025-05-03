module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-light': '#D0E0F0',
        'fore-light': '#405060',
        'back-dark': '#102030',
        'fore-dark': '#A0B0C0',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
