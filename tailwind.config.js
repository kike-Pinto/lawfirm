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
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xxl: '1540px',
      },
    },
  },
  variants: {},
  plugins: [],
}
