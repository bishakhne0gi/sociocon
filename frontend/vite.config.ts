import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  server:
  {
    proxy:
    {
      '/api': {
        target: 'http://localhost:8000/api/v1',
        changeOrigin: true,
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      },
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
