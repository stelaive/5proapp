'use client'

import { useState } from 'react'

export default function FloatingDownload() {
  const [showStoreButtons, setShowStoreButtons] = useState(false)

  const APP_STORE_URL = '#' // 앱스토어 링크
  const PLAY_STORE_URL = '#' // 플레이스토어 링크

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  }

  const toggleStoreButtons = () => {
    setShowStoreButtons(!showStoreButtons)
  }

  const handleStoreClick = (url: string) => {
    window.location.href = url
  }

  const handleMainDownload = () => {
    const storeUrl = isIOS() ? APP_STORE_URL : PLAY_STORE_URL
    window.location.href = storeUrl
  }

  return (
    <div className="floating-download">
      <button
        onClick={handleMainDownload}
        className="flex items-center space-x-2 bg-sky-orange-500 text-white px-6 py-3 rounded-full hover:bg-sky-orange-600 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>앱 다운로드</span>
      </button>
      
      <div className={`store-buttons ${showStoreButtons ? 'show' : ''}`}>
        <button
          onClick={() => handleStoreClick(APP_STORE_URL)}
          className="store-button ios-store"
        >
          <span className="flex items-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </span>
        </button>
        <button
          onClick={() => handleStoreClick(PLAY_STORE_URL)}
          className="store-button android-store"
        >
          <span className="flex items-center">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.61 15.15c-.46 0-.84-.37-.84-.83s.37-.84.84-.84c.46 0 .83.37.83.84s-.37.83-.83.83m-9.22 0c-.46 0-.84-.37-.84-.83s.37-.84.84-.84c.46 0 .83.37.83.84s-.37.83-.83.83m9.42-5.93l1.97-3.4c.11-.19.04-.43-.15-.54-.19-.11-.43-.04-.54.15l-2 3.46c-1.52-.69-3.22-1.07-5.01-1.07-1.79 0-3.49.38-5.01 1.07l-2-3.46c-.11-.19-.35-.26-.54-.15-.19.11-.26.35-.15.54l1.97 3.4C3.24 10.85 1.89 13.17 1.89 15.5c0 .24.02.47.05.71h20.1c.03-.24.05-.47.05-.71 0-2.33-1.35-4.65-4.28-6.28M6.89 20.5h-2V22h2v-1.5m12.22 0h-2V22h2v-1.5z"/>
            </svg>
            Google Play
          </span>
        </button>
      </div>
    </div>
  )
} 