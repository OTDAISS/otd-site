/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'sea-pulse': 'sea-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'sea-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.01)' },
        }
      }
    },
  },
  plugins: [],
}