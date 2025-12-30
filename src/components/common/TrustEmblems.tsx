import React from 'react';
import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react';

const TrustEmblems = () => {
  const emblems = [
    {
      icon: <Shield className="w-8 h-8 text-[#42d9de]" />,
      title: "영업배상책임보험",
      desc: "최대 10억 보상 가입"
    },
    {
      icon: <Award className="w-8 h-8 text-[#42d9de]" />,
      title: "정식 허가 업체",
      desc: "국토부 정식 등록"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#42d9de]" />,
      title: "무사고 10년+",
      desc: "베테랑 기사 상주"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#42d9de]" />,
      title: "특수장비 검사완료",
      desc: "안전점검 매월 실시"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {emblems.map((emblem, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4 p-3 bg-[#42d9de]/10 rounded-full">
            {emblem.icon}
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">{emblem.title}</h4>
          <p className="text-sm text-gray-500">{emblem.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustEmblems;
