'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function FriendPage() {
  const router = useRouter()

  useEffect(() => {
    // 3초 후 reward 페이지로 리다이렉트
    const timer = setTimeout(() => {
      router.push('/reward')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main>
      <Navigation currentPage="friend" />
      
      {/* 리다이렉트 안내 섹션 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="text-8xl mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 0.8,
                rotate: {
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              👥
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 text-sky-orange-600 font-jalnan"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              친구 초대 페이지로 이동 중...
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              친구 초대 관련 정보는 <span className="text-sky-orange-600 font-bold">친구 초대</span> 페이지에서<br />
              더 자세하게 확인하실 수 있습니다!
            </motion.p>
            
            {/* 카운트다운 */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-gray-600 mb-4">잠시 후 자동으로 이동됩니다...</p>
              <motion.div 
                className="w-full bg-gray-200 rounded-full h-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div 
                  className="bg-sky-orange-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, delay: 0.8 }}
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={() => router.push('/reward')}
                className="bg-sky-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-orange-600 transition-all duration-300"
              >
                지금 바로 이동하기
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
              >
                홈으로 돌아가기
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 