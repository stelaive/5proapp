'use client'

import { Phone, Mail, Building, FileText, Clock, MessageSquare } from 'lucide-react'

export default function Footer() {
  const handleCallNow = () => {
    window.location.href = 'tel:1877-9001'
  }

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 간단한 3열 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* 왼쪽: 회사명 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">5프로돌려주는스카이차</h3>
          </div>

          {/* 중간: 회사 정보 (주소 제거) */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">회사 정보</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>대표전화: 1877-9001</span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>문자수신전용: 010-2497-2433</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>이메일: contact@5pro.com</span>
              </li>
              <li className="flex items-start">
                <FileText className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>사업자등록번호: 123-45-67890</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>운영시간: 연중무휴 24시간</span>
              </li>
            </ul>
          </div>

          {/* 오른쪽: 고객센터 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">고객센터</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침 ↗</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">이용약관 ↗</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* 하단 CTA */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <button
            onClick={handleCallNow}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            📞 연락하기
          </button>
        </div>
        
        {/* 저작권 정보 */}
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>© 2025 5프로돌려주는스카이차. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
} 