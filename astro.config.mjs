// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // GitHub Pages のプロジェクトページとして配信するため、
  // Gatsby の pathPrefix: '/Escapism' を site + base で再現する。
  site: 'https://ayata3.github.io',
  base: '/Escapism',

  // 既存URLは末尾スラッシュ付き（例: /Escapism/information/2017-08-18/）。
  // 外部に貼られたリンクを壊さないよう、この形を維持する。
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  integrations: [sitemap()],
})
