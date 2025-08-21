// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    // remove sitemap if you don't have one yet
    // sitemap: 'https://lorenzkipp.github.io/sitemap.xml',
  }
}



// import type { MetadataRoute } from 'next'
// import { WEBSITE_URL } from '@/lib/constants'

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: '/private/',
//     },
//     sitemap: `${WEBSITE_URL}/sitemap.xml`,
//   }
// }
