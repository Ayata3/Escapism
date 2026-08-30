// Astro は <a href> に base を自動で付与しない。付け忘れた1箇所で
// リンクが壊れるため、サイト内リンクは必ずこれを通す。
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${path.replace(/^\//, '')}`
}
