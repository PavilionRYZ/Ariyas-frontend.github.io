/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    server: {
      proxy: {
        '/api': {
          target: import.meta.env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    },
    plugins: [react()]
  }
})
