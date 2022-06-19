module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['dracula']
  },
  plugins: [require('daisyui')]
}
