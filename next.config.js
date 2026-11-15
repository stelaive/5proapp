/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    // remotePatterns(외부 이미지 도메인 허용)는 두지 않는다.
    // src/ 전체에서 next/image로 불러오는 외부 https 이미지는 없고 모두 /images/... 로컬 경로이며,
    // 외부 https URL은 유튜브 임베드(iframe)뿐이라 next/image 최적화를 거치지 않는다.
    // 예전의 hostname: '**' 와일드카드는 아무 도메인 이미지나 프록시할 수 있어 제거했다.
    // 나중에 외부 이미지를 next/image로 쓸 일이 생기면 그 도메인만 여기에 추가하면 된다.
    //
    // 이전에 unoptimized: true 였음 — next/image를 22개 컴포넌트가 쓰는데도 최적화가
    // 꺼져 있어 바로 위 formats(webp/avif) 설정이 무효화된 상태였다.
    // 정적 export가 아니라 서버 라우트를 쓰는 배포이므로 최적화를 켠다.
  },
  // Next.js 16에서는 experimental.turbo가 더 이상 지원되지 않습니다
  // Turbopack은 기본적으로 활성화되어 있습니다
}

module.exports = nextConfig
