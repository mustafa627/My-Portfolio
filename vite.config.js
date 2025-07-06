import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['CtrlF'], // 👈 isko replace karo agar module ka actual naam alag ho
    },
  },
})
