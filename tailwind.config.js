/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

import { theme } from './src/lib/theme/theme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        a: { color: theme('colors.accent.500') },
        html: { color: theme('colors.dark.900') },
      })
    }),
  ],
  theme: {
    colors: {
      ...theme.colors,
    },
    extend: {
      fontFamily: {
        ...theme.fontFamily,
      },
      animation: {
        loading_linear: 'line_animation 1s linear infinite;'
      },
      keyframes: {
        line_animation: {
          '0%': {
            left: '-40%'
          },
          '50%': {
            left: '20%',
            width: '80%'
          },
          '100%': {
            left: '100%',
            width: '100%'
          }
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      ...theme.fontSize,
    },
  },
}
