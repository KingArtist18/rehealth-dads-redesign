import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Enables React support
  server: {
    proxy: {
      // Any request starting with /api is passed to the Express server
      '/api': 'http://localhost:5000',
    },
  },
})