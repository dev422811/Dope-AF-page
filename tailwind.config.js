/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      colors: {
        beige: '#fef8f5',
        rose: '#f43f5e',
        emerald: '#10b981',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
