import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
	  vue({
		  include: [/\.vue$/, /\.md$/],
	  }),
	  Markdown({
		  // Konfiguraasi markdown Anda
	  })
  ],
})
