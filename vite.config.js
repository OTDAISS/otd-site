import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // This ensures your build goes to the 'dist' folder Vercel expects
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      // Useful if you start using @/components paths later
      '@': '/src',
    },
  },
})
