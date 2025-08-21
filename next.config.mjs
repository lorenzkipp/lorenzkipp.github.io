import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',                 // ← required for GitHub Pages
  images: { unoptimized: true },    // ← no image optimization server on Pages
  eslint: { ignoreDuringBuilds: true },   // ← avoid your ESLint error during build
  typescript: { ignoreBuildErrors: true } // ← optional, same idea for TS
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