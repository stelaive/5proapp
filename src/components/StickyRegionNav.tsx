'use client';

import { useEffect, useState } from 'react';
import { Location } from '@/lib/locationsData';

interface StickyRegionNavProps {
  location: Location;
  activeGroup: string;
  onGroupClick: (groupName: string) => void;
}

export default function StickyRegionNav({ location, activeGroup, onGroupClick }: StickyRegionNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 메인 헤더가 상단에 고정되는 시점(스크롤 50px 이상)에서 지역 선택 바도 함께 나타남
      const shouldShow = window.scrollY > 50;
      
      if (shouldShow && !isVisible) {
        setIsVisible(true);
        setIsAnimating(true);
        // 애니메이션 완료 후 상태 리셋
        setTimeout(() => setIsAnimating(false), 300);
      } else if (!shouldShow && isVisible) {
        setIsVisible(false);
        setIsAnimating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // 그룹이 없는 지역에서는 렌더링하지 않음
  if (!location.isGrouped || !location.groups) {
    return null;
  }

  return (
    <div 
      className={`fixed top-[73px] left-0 right-0 w-full z-[999998] transition-all duration-300 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      } ${isAnimating ? 'animate-slide-down' : ''}`}
      style={{ 
        zIndex: 999998,
        position: 'fixed',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-md">
                             {location.groups?.map((group, index) => (
                <div key={group.name} className="flex items-center flex-1">
                  <button
                    onClick={() => onGroupClick(group.name)}
                    className={`
                      flex-1 py-2 px-4 text-sm font-medium transition-all duration-200 text-center
                      ${activeGroup === group.name 
                        ? 'text-orange-500 border-b-2 border-orange-500' 
                        : 'text-gray-600 border-b-2 border-transparent hover:text-orange-500'
                      }
                    `}
                  >
                    {group.name}
                  </button>
                                     {index < (location.groups?.length ?? 0) - 1 && (
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 