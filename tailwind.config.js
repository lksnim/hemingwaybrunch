// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)', ...config.fontFamily.sans],
        karla: ['var(--font-karla)', ...config.fontFamily.sans],
      },
      colors: {
        dark: {
          100: '#222222',
          200: '#1F1F1F',
          300: '#1B1B1B',
          400: '#181818',
          500: '#141414',
          600: '#111111',
        },
        secondary: {
          100: '#DACAAA',
          200: '#C4B699',
          300: '#AEA288',
          400: '#998D77',
          500: '#837966',
          600: '#6D6555',
          700: '#575144',
          800: '#413D33',
          900: '#2C2822',
          950: '#161411',
        },
        primary: {
          100: '#22373A',
          200: '#1E3133',
          300: '#1A2B2E',
          400: '#172628',
          500: '#142022',
          600: '#111B1D',
          700: '#0D1617',
          800: '#0A1011',
          900: '#070B0B',
          950: '#030506',
        },
        overlay: '#22373A',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
