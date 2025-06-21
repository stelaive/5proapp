import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '5프로돌려드리는스카이차',
  description: '스카이차 쓰고 5% 돌려받고, 매월 100만원 행운까지!',
  icons: {
    icon: '/images/logo_favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* iOS Safari 전용 메타 태그들 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* 터치 액션 및 줌 방지 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            input, textarea {
              -webkit-user-select: text;
              -khtml-user-select: text;
              -moz-user-select: text;
              -ms-user-select: text;
              user-select: text;
            }
            body {
              -webkit-overflow-scrolling: touch;
              touch-action: manipulation;
            }
          `
        }} />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 