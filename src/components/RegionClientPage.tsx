'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import StickyRegionNav from '@/components/StickyRegionNav';
import BackToTopButton from '@/components/BackToTopButton';
import { Location } from '@/lib/locationsData';

interface RegionClientPageProps {
  location: Location;
}

export default function RegionClientPage({ location }: RegionClientPageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeGroup, setActiveGroup] = useState('');

  const headerRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLElement | null)[]>([]);

  const setGroupRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      const index = location.groups?.findIndex(g => g.name === node.id) ?? -1;
      if (index !== -1) {
        groupRefs.current[index] = node;
      }
    }
  }, [location.groups]);

  useEffect(() => {
    const handleScroll = () => {
      // Back to Top Button Logic
      setShowBackToTop(window.pageYOffset > window.innerHeight * 1.5);

      if (!location.isGrouped) return;

      // Active Group Logic
      let currentGroup = '';
      groupRefs.current.forEach((groupEl) => {
        if (groupEl) {
          const { top, bottom } = groupEl.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            currentGroup = groupEl.id;
          }
        }
      });
      setActiveGroup(currentGroup);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.isGrouped]);

  const title = `${location.name}의 모든 스카이차, 5프로에서 찾아보세요!`;

  const handleGroupClick = (groupName: string) => {
    const element = document.getElementById(groupName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <StickyRegionNav
        location={location}
        activeGroup={activeGroup}
        onGroupClick={handleGroupClick}
      />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header ref={headerRef} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              원하시는 도시를 선택하여 가까운 스카이차를 빠르게 찾아보세요.
            </p>
          </header>

          {location.isGrouped && location.groups ? (
            <div className="space-y-12 md:space-y-16">
              {location.groups.map((group, index) => (
                <section
                  key={group.name}
                  id={group.name}
                  ref={setGroupRef}
                >
                  {index > 0 && <hr className="my-12 border-gray-200" />}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">{group.name}</h2>
                    <p className="mt-2 text-md text-gray-500">{group.description}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {group.cities.map((city) => {
                      let href;
                      if (city.slug === 'anyang') {
                        href = '/locations/anyang';
                      } else if (city.slug === 'gunpo') {
                        href = '/locations/gunpo';
                      } else {
                        href = `/locations/${location.slug}/${city.slug}`;
                      }

                      return (
                        <Link
                          key={city.slug}
                          href={href}
                          className="group block text-center bg-white rounded-lg p-4 transition-colors duration-200 hover:bg-orange-500 border border-gray-200"
                        >
                          <span className="text-lg font-semibold text-gray-800 group-hover:text-white">
                            {city.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {location.cities?.map((city) => {
                let href;
                if (city.slug === 'anyang') {
                  href = '/locations/anyang';
                } else if (city.slug === 'gunpo') {
                  href = '/locations/gunpo';
                } else {
                  href = `/locations/${location.slug}/${city.slug}`;
                }

                return (
                  <Link
                    key={city.slug}
                    href={href}
                    className="group block text-center bg-white rounded-lg p-4 transition-colors duration-200 hover:bg-orange-500 border border-gray-200"
                  >
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-white">
                      {city.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <BackToTopButton isVisible={showBackToTop} />
    </>
  );
} 