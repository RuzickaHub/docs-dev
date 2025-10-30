import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/demo/main.js',
        chunkFileNames: 'assets/demo/[name].js',
        assetFileNames: 'assets/demo/[name].[ext]'
      }
    }
  },
  base: './'
})
