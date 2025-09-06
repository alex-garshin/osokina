import { defineConfig } from 'vite'

export default defineConfig({
  // Если ваш сайт размещается в подпапке (например, /my-site/), 
  // раскомментируйте и укажите правильный путь:
  // base: '/my-site/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Убедитесь, что CSS файлы генерируются
    cssCodeSplit: false
  }
})
