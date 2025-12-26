'use client'

import { Phone, MessageSquare, Mail } from 'lucide-react'

export default function Footer() {
  const companyInfo = {
    name: '5프로돌려주는스카이차',
    phone: '1877-3924',
    textNumber: '010-2497-2433',
    email: 'man7866@naver.com',
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-white">{companyInfo.name}</h2>
          </div>
          <div className="md:col-span-1">
            <div>
              <h3 className="font-bold text-white mb-4">연락처</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-gray-400">대표전화:</span>
                  <span className="ml-2 text-white">{companyInfo.phone}</span>
                </p>
                <p className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-gray-400">문자수신전용:</span>
                  <span className="ml-2 text-white">{companyInfo.textNumber}</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  <span className="text-gray-400">이메일:</span>
                  <span className="ml-2 text-white">{companyInfo.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 