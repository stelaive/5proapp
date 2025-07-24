// file: src/components/common/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Phone, MessageSquare, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const companyInfo = {
    name: '5프로돌려주는스카이차',
    address: '경기도 군포시',
    phone: '1877 - 9001',
    textNumber: '010 - 2497 - 2433',
    email: 'man7866@naver.com',
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <a href="https://5프로.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 transition-transform motion-safe:hover:scale-105 opacity-90 hover:opacity-100">
              <Image src="/images/스로고1.png" alt="5프로스카이차 로고" width={40} height={40} />
            </a>
            <h2 className="text-xl font-bold text-white font-jalnan">{companyInfo.name}</h2>
          </div>
          <div className="md:col-span-1">
            <div>
              <h3 className="font-bold text-white mb-4">회사 정보</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="w-16 text-gray-500">주소:</span>
                  <span>{companyInfo.address}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-500" />
                  <span className="w-16 text-gray-500">대표전화:</span>
                  <span>{companyInfo.phone}</span>
                </p>
                <p className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="w-16 text-gray-500">문자수신전용:</span>
                  <span>{companyInfo.textNumber}</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  <span className="w-16 text-gray-500">이메일:</span>
                  <span>{companyInfo.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <a
            href="https://5프로.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gold mb-4 font-semibold hover:underline"
          >
            5프로 공식 홈페이지 둘러보기 <ArrowUpRight size={16} className="ml-1" />
          </a>
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 