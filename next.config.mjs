/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Prevent local network discovery permission request
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
}

export default nextConfig