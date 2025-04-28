import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          100: '#f1d0d6',
          200: '#e28fa3',
          300: '#d2566f',
          400: '#c51d3b',
          500: '#a3142a',
          600: '#8c1022',
          700: '#70101a',
          800: '#540e14',
          900: '#3e0b0f',
        }
      }
    },
  },
  plugins: [
    forms, // Adding the Tailwind forms plugin if needed
  ],
};
