import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minimal-portfolio/', // Base URL for the site
  plugins: [react()]
})
