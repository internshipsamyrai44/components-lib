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
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      ...theme.fontSize,
    },
  },
}
