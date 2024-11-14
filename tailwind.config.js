/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{astro,html,js}',
    './src/components/**/*.{astro,html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik Variable', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
}


