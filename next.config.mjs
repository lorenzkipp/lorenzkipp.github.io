// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',                 // <- static export for GitHub Pages
  images: { unoptimized: true },    // <- no image optimization server on Pages
}

const withMDX = createMDX({ extension: /\.mdx?$/ })

export default withMDX(nextConfig)


// import createMDX from '@next/mdx';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// };

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
// });

// export default withMDX(nextConfig);
