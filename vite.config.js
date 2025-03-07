import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // تنظیم مسیر پایه به '/' برای استقرار در ریشه دامنه
  base: '/',
  build: {
    // تولید فایل‌های با مسیر نسبی
    assetsDir: 'assets',
    // تغییر نام تمام فایل‌های خروجی با هش
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    // تنظیمات توسعه محلی
    cors: true,
    strictPort: true,
    port: 5173
  },
})
