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
    // 이전에 unoptimized: true 였음 — next/image를 22개 컴포넌트가 쓰는데도 최적화가
    // 꺼져 있어 바로 위 formats(webp/avif) 설정이 무효화된 상태였다.
    // 정적 export가 아니라 서버 라우트를 쓰는 배포이므로 최적화를 켠다.
  },
  // Next.js 16에서는 experimental.turbo가 더 이상 지원되지 않습니다
  // Turbopack은 기본적으로 활성화되어 있습니다
}

module.exports = nextConfig 