'use client'

export default function FloatingDownload() {
  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      // iOS 기기 - 앱스토어로 이동
      window.open('https://apps.apple.com/app/your-app-id', '_blank');
    } else if (userAgent.includes('android')) {
      // Android 기기 - 플레이스토어로 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    } else {
      // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank');
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-[50000]"
      style={{ 
        zIndex: 50000,
        position: 'fixed',
        bottom: '1rem',
        right: '1rem'
      }}
    >
      <button
        onClick={handleAppDownload}
        className="flex items-center space-x-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 px-4 py-3 text-sm"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        <span className="font-bold">앱 다운로드</span>
      </button>
    </div>
  )
} 