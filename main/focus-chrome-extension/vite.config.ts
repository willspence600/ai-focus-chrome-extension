import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: 'src/scripts/extract-content.js',
  //     output: {
  //       dir: 'dist/scripts',
  //       format: 'cjs'
  //     }
  //   }, 
  // }
})
