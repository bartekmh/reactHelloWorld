import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactHelloWorld/', // Replace <repo-name> with your GitHub repo name
  plugins: [react()],
})
