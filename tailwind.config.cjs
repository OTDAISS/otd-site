// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'neon-aqua': '#00FFFF',   // Electric Sea
        'neon-pink': '#FF00FF',   // Laser Magenta
        'neon-purple': '#9D00FF', // Deep Nebula
        'neon-green': '#39FF14',  // Radioactive Lime
        'neon-blue': '#1F51FF',   // High-Voltage Blue
        'dark-ocean': '#050505',  // Deep Black Base
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s linear infinite',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px #00FFFF) drop-shadow(0 0 10px #FF00FF)' },
          '50%': { filter: 'drop-shadow(0 0 15px #39FF14) drop-shadow(0 0 20px #9D00FF)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
}
