// gatsby-plugin-offline が登録した Service Worker を解除するための置き換え。
//
// 既存訪問者のブラウザには Gatsby 時代の Service Worker が残っており、その
// ままだと移行後も古いキャッシュが配信され続ける。ブラウザは登録済みの
// Service Worker をナビゲーション時に再取得するため、同じURLにこの内容を
// 置くことで自己解除させる。
//
// TODO: 十分に行き渡ったら（数ヶ月を目安に）このファイルを削除する。

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister()

      const keys = await caches.keys()
      await Promise.all(
        keys.map((key) => caches.delete(key))
      )

      // 解除しただけでは、開いているタブは古いキャッシュを掴んだまま。
      const clients = await self.clients.matchAll({
        type: 'window',
      })
      for (const client of clients) {
        client.navigate(client.url)
      }
    })()
  )
})
