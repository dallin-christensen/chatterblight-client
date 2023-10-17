/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#fff',
      backgroundsecondary: '#def',
      primary: '#bc95d4',
      messageblue: '#9cf',
      danger: '#ff7a5c',
      success: '#c8e1cc',
      ...colors,
    },
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      boxShadow: {
        buttonfocus: '0 0 0 0.2rem rgba(0, 123, 255, 0.5)',
        brutal: '4px 4px 0px 0px rgba(0,0,0,1)',
        brutalhigh: '6px 4px 0px 0px rgba(0,0,0,1)',
      },
      keyframes: {
        hoversmall: {
          '50%': {
            transform: 'translateY(-2px)',
          },
          '100%': {
            transform: 'translateY(-4px)',
          },
        },
        hovermedium: {
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
        hoverlarge: {
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'hover-small': 'hoversmall 1.5s linear 0.3s infinite alternate',
        'hover-medium': 'hovermedium 1.5s linear 0.3s infinite alternate',
        'hover-large': 'hoverlarge 1.5s linear 0.3s infinite alternate',
      },
    },
  },
  plugins: [],
}
