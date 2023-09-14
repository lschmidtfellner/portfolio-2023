module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'aktiv': ['aktiv-grotesk-extended', 'sans-serif'],
        'higuen': ['higuen', 'serif']
      },
      fontWeight: {
        'regular': 400,
        'bold': 700,
      },
    },
  },
  variants: {},
  plugins: [],
}