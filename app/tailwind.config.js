module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        muv: {
          notblack: '#292929',
          notwhite: '#F0F0F0',
          notpurple: '#9A87F5',
        },
      },
    },
  },
  plugins: [],
};
