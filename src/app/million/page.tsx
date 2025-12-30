'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/common/Footer';
import FloatingDownload from '@/components/FloatingDownload';
import HeroSection from './_components/HeroSection';
import BenefitCards from './_components/BenefitCards';
import EventRules from './_components/EventRules';
import ExpectationSection from './_components/ExpectationSection';
import AppFlowSlider from './_components/AppFlowSlider';
import FairnessPromise from './_components/FairnessPromise';
import FAQSection from './_components/FAQSection';
import CalloutBanner from './_components/CalloutBanner';

export default function MillionPage() {
  return (
    <div>
      {/* 히어로 섹션 (타이머, 당첨자 리스트) */}
      <HeroSection />

      {/* 3가지 혜택 소개 */}
      <BenefitCards />

      {/* 이벤트 규칙 (인포그래픽) */}
      <EventRules />

      {/* 기대감 부여 (제5회 참여 유도) */}
      <ExpectationSection />

      {/* 앱 사용 흐름 (슬라이더) */}
      <AppFlowSlider />

      {/* 공정성 약속 */}
      <FairnessPromise />

      {/* FAQ */}
      <FAQSection />

      {/* 하단 콜아웃 배너 */}
      <CalloutBanner />
    </div>
  );
}
