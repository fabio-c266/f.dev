import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#000',
        'gray-300': '#333',
        'green-100': '#CAEBCF',
        'green-500': '#2ECC71',
        'white-400': '#f4f4f4',
        'white-900': '#f9f9f9',
      },
      fontFamily: {
        baloo_bhai_2: 'BalooBhai2, sans-serif',
        raleway: 'Raleway, sans-serif',
      },
    },
  },
  plugins: [],
} satisfies Config
