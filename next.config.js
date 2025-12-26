/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true
  },
  // Turbopack 루트 디렉토리 설정 (lockfile 경고 해결)
  experimental: {
    turbo: {
      root: process.cwd()
    }
  }
}

module.exports = nextConfig 