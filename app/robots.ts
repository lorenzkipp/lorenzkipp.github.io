// app/robots.ts
export const dynamic = 'force-static'
export const revalidate = false

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://lorenzkipp.github.io/sitemap.xml', 
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
