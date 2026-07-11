import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const companyInfo = {
    name: '5프로돌려주는스카이차',
    phone: '1877-3924',
    textNumber: '010-2497-2433',
  };

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* 브랜드 */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/sky-car-logo-v2.png"
              alt="5프로돌려주는스카이차 로고"
              width={48}
              height={48}
              className="rounded-xl flex-shrink-0"
              unoptimized
            />
            <div className="flex flex-col">
              <span className="text-white font-bold font-jalnan">{companyInfo.name}</span>
              <span className="text-xs text-gray-500 mt-1">
                © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
              </span>
            </div>
          </div>

          {/* 연락처 */}
          <div className="flex flex-col gap-1.5 text-sm text-left">
            <span>
              <span className="text-gray-500">대표번호</span>{' '}
              <span className="text-white font-bold">{companyInfo.phone}</span>
            </span>
            <span>
              <span className="text-gray-500">문자수신전용</span>{' '}
              <span className="text-white font-bold">{companyInfo.textNumber}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
