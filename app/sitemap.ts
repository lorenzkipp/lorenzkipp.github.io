// app/sitemap.ts
export const dynamic = 'force-static'
export const revalidate = false

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lorenzkipp.github.io'
  const routes = ['/', '/about', '/blog'] 

  const now = new Date()
  return routes.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.6,
  }))
}
