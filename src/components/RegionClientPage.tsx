'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import AnswerSummary from '@/components/seo/AnswerSummary';
import StickyRegionNav from '@/components/StickyRegionNav';
import BackToTopButton from '@/components/BackToTopButton';
import { Location, City, LIVE_CITY_SLUGS } from '@/lib/regionData';
import { HUB_CONTENT, SITE_URL } from '@/lib/seo';

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

  const content = HUB_CONTENT[location.slug];
  const title = `${location.name} 스카이차 대여·비용 안내`;
  const renderCity = (city: City) => {
    const live = LIVE_CITY_SLUGS.includes(city.slug);
    const classes = "group block rounded-lg border border-gray-200 bg-white p-4 text-center transition-colors hover:border-orange-500";
    return live ? (
      <Link key={city.slug} href={`/locations/${city.slug}`} className={classes}>
        <span className="text-lg font-semibold text-gray-800">{city.name} 스카이차</span>
        <span className="mt-2 block text-sm text-gray-600">요금·작업 안내</span>
      </Link>
    ) : (
      <a key={city.slug} href="#region-consultation" className={classes}>
        <span className="text-lg font-semibold text-gray-800">{city.name}</span>
        <span className="mt-2 block text-sm text-gray-600">배차 가능 여부 문의</span>
      </a>
    );
  };

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
      <div className="pt-24 pb-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: location.name, item: `${SITE_URL}/locations/${location.slug}` },
          ],
        }) }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header ref={headerRef} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              {content.description}
            </p>
          </header>
          <AnswerSummary kind="hub" name={location.name} />
          <nav aria-label="현재 위치" className="mb-8 text-sm text-gray-600"><Link className="underline" href="/">홈</Link> / <span aria-current="page">{location.name} 스카이차</span></nav>
          <section id="region-consultation" className="mb-10 scroll-mt-28 rounded-2xl border border-orange-100 bg-orange-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">{content.label} 간판작업·외벽 보수 장비 견적</h2>
            <p className="mt-4 leading-relaxed text-gray-700">{content.advice}</p>
            <p className="mt-4 leading-relaxed text-gray-700">스카이차 비용은 필요한 장비와 1시간·반나절·하루 등 이용 시간, 현장 조건에 따라 달라집니다. 간판 제작·설치 인력 등 시공비와 장비 이용료는 구분하여 확인해 주세요.</p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a href="tel:18773924">{content.label} 배차·견적 전화 상담</a>
              <Link href="/pricing#cost-guide" className="font-semibold text-orange-800 underline">스카이차비용·가격표 확인</Link>
              <Link href="/#sign-work" className="font-semibold text-orange-800 underline">간판작업 준비사항</Link>
            </div>
            <p className="mt-5 text-sm text-gray-600">당일·야간 및 상세 안내가 없는 지역은 현장 주소로 배차 가능 여부를 먼저 문의해 주세요.</p>
          </section>

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
                    {group.cities.map(renderCity)}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {location.cities?.map(renderCity)}
            </div>
          )}
        </div>
      </div>
      <BackToTopButton isVisible={showBackToTop} />
    </>
  );
} 