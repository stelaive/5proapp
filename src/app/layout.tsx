import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '5프로돌려드리는스카이차',
  description: '스카이차 쓰고 5% 돌려받고, 매월 100만원 행운까지!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 