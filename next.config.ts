import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Codebase-Analyzer-docs',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
