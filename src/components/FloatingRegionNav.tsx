'use client';

import { RegionGroup } from '@/lib/locationsData';

interface FloatingRegionNavProps {
  groups: RegionGroup[];
  isVisible: boolean;
  activeGroup: string;
}

export default function FloatingRegionNav({ groups, isVisible, activeGroup }: FloatingRegionNavProps) {
  const scrollToGroup = (groupId: string) => {
    const element = document.getElementById(groupId);
    if (element) {
      // 플로팅 네비게이션 높이(h-14 = 56px) + 추가 여백을 고려하여 오프셋 설정
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex h-14">
          {groups.map((group) => (
            <button
              key={group.name}
              type="button"
              onClick={() => scrollToGroup(group.name)}
              className={`flex-1 flex items-center justify-center text-center font-semibold transition-all duration-200 border-b-2 ${
                activeGroup === group.name
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-800 border-transparent hover:text-orange-500'
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 