// file: src/components/common/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const companyInfo = {
    name: '5프로돌려주는스카이차',
    address: '경기도 수원시 권선구 권선로 123',
    phone: '1877-9001',
    email: 'contact@5pro.com',
    businessNumber: '123-45-67890',
    operatingHours: '연중무휴 24시간',
  };

  const goldLinks = [
    { href: '/privacy-policy', label: '개인정보처리방침' },
    { href: '/terms-of-service', label: '이용약관' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <a href="https://5프로.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 transition-transform motion-safe:hover:scale-105 opacity-90 hover:opacity-100">
              <Image src="/images/스로고1.png" alt="5프로스카이차 로고" width={40} height={40} />
            </a>
            <h2 className="text-xl font-bold text-white font-jalnan">{companyInfo.name}</h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">회사 정보</h3>
              <p>주소: {companyInfo.address}</p>
              <p>대표전화: {companyInfo.phone}</p>
              <p>이메일: {companyInfo.email}</p>
              <p>사업자등록번호: {companyInfo.businessNumber}</p>
              <p>운영시간: {companyInfo.operatingHours}</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">고객센터</h3>
              <ul className="space-y-2">
                {goldLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-primary transition-colors">
                      {link.label}
                      <ArrowUpRight size={16} className="ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
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