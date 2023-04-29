/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: {
          '50': '#edf1ff',
          '100': '#ccd6ff',
          '200': '#a8b9fa',
          '300': '#869cf4',
          '400': '#6882e9',
          '500': '#4d6add',
          '600': '#2743b3',
          '700': '#112574',
          '800': '#060f33',
        }
      }
    },
  },
  plugins: [],
}
