// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lorenzkipp.github.io'
  const routes = ['/', '/about', '/blog'] // include any real routes you have
  const now = new Date()
  return routes.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.6,
  }))
}
