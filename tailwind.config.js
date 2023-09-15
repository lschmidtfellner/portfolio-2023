module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        slowspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slowspin: 'slowspin 20s linear infinite',
      },
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