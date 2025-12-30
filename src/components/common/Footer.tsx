import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  const companyInfo = {
    name: '5프로돌려주는스카이차',
    phone: '1877-3924',
    textNumber: '010-2497-2433',
    email: 'man7866@naver.com',
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 font-jalnan">{companyInfo.name}</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#42d9de]" />
              <span className="text-gray-500">대표전화:</span>
              <span className="text-white font-bold">{companyInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#42d9de]" />
              <span className="text-gray-500">문자전용:</span>
              <span className="text-white font-bold">{companyInfo.textNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#42d9de]" />
              <span className="text-gray-500">이메일:</span>
              <span className="text-white font-bold">{companyInfo.email}</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
