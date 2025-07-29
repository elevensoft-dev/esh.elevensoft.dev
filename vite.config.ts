import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app')
    }
  },
  server: {
    allowedHosts: ['a1d0-161-22-57-86.ngrok-free.app']
  },
});
