/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B49C73',
        secondary: '#37373F',
        grayCustom: '#757575',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(rgba(55, 55, 63, 0.7), rgba(55, 55, 63, 0.7))',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '5.5xl': '3.5rem',
        '2.5xl': '1.75rem',
      },
      padding: {
        7.5: '30px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {},
  plugins: [],
}
