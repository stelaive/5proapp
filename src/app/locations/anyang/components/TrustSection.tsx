'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Smile, Zap, Award } from 'lucide-react'

export default function TrustSection() {
  const [currentImage, setCurrentImage] = useState(0)

  // 실제 현장 사진 (4장)
  const images = [
    {
      src: '/images/anyang/KakaoTalk_20250422_115709227_25.jpg',
      title: '안양 비산동 스카이차 작업',
      caption: '동안구 비산동 외벽 보수 현장',
    },
    {
      src: '/images/anyang/스39.jpg',
      title: '안양 만안구 간판 교체',
      caption: '만안구 안양동 간판 교체 작업',
    },
    {
      src: '/images/anyang/스4.jpg',
      title: '평촌역 인근 외벽 작업',
      caption: '동안구 평촌동 상가 외벽',
    },
    {
      src: '/images/anyang/ChatGPT Image 2025년 7월 24일 오전 11_57_39.png',
      title: '호계동 공장 지붕 공사',
      caption: '동안구 호계동 지붕 유지보수',
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            안양 전 지역, 신뢰할 수 있는 서비스
          </h2>
          <p className="text-lg text-gray-600">6년 경력의 전문가가 안전하고 신속하게 작업합니다.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 서비스 지역 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              안양 서비스 지역
            </h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-6 text-center">
              <div className="text-5xl mb-3">🗺️</div>
              <h4 className="text-xl font-bold text-blue-700 mb-3">안양시 전 지역 완벽 커버</h4>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className="bg-blue-100 rounded-md p-3">
                  <p className="font-semibold text-blue-800">만안구</p>
                  <p className="text-gray-600">안양, 박달, 석수동</p>
                </div>
                <div className="bg-blue-100 rounded-md p-3">
                  <p className="font-semibold text-blue-800">동안구</p>
                  <p className="text-gray-600">비산, 관양, 평촌, 호계동</p>
                </div>
              </div>
              <div className="text-sm text-yellow-800 bg-yellow-100 rounded-lg p-3">
                <p className="font-bold">🚀 특히 빠른 배차: 평촌, 범계, 인덕원</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-green-600 text-lg">⏱️ 30분 내 배차 목표</p>
              <p className="text-gray-600 mt-1">안양시 어디든 빠르고 정확하게 도착합니다.</p>
            </div>
          </div>

          {/* 실제 현장 사진 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              실제 현장 사진
            </h3>
            <div className="relative mb-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority={currentImage === 0}
                />
                {/* 슬라이더 버튼을 이미지 내부로 이동 */}
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              {/* 캡션 */}
              <div className="text-center mt-4 mb-4">
                <p className="text-gray-800 font-semibold">{images[currentImage].title}</p>
                <p className="text-sm text-gray-500 mt-1">{images[currentImage].caption}</p>
                <p className="text-xs text-gray-400 mt-1">{currentImage + 1} / {images.length}</p>
              </div>
              {/* 인디케이터 도트 */}
              <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full ${index === currentImage ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 성과 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Smile className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <p className="text-3xl font-bold text-gray-900">98%</p>
            <p className="text-gray-600">고객 만족도</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Zap className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <p className="text-3xl font-bold text-gray-900">2,500+</p>
            <p className="text-gray-600">완료 건수</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <Award className="w-12 h-12 mx-auto text-green-500 mb-4" />
            <p className="text-3xl font-bold text-gray-900">6년</p>
            <p className="text-gray-600">서비스 연수</p>
          </div>
        </div>
      </div>
    </section>
  )
} 