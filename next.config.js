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
  // Next.js 16에서는 experimental.turbo가 더 이상 지원되지 않습니다
  // Turbopack은 기본적으로 활성화되어 있습니다
}

module.exports = nextConfig 