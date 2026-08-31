// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // 外部に貼られた既存リンクを壊さないため、公開URLは移行前後で
  // 一致させる。Gatsby の pathPrefix: '/Escapism' を引き継ぐ。
  site: 'https://ayata3.github.io',
  base: '/Escapism',

  // Gatsby は末尾スラッシュ付きでURLを生成していた。
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
})
