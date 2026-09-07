'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/icon';

interface FAQItem {
  category: string;
  questions: {
    Q: string;
    A: string;
    tag: string;
  }[];
}

const headerMenus = [
  { label: '앱 이용', key: 'app_usage', isActive: true },
  { label: '5%페이백', key: 'payback', isActive: false },
  { label: '친구초대', key: 'reward', isActive: false },
  { label: '일거리장터', key: 'marketplace', isActive: false },
  { label: '앱기능', key: 'features', isActive: false },
  { label: '고객센터', key: 'support', isActive: false },
];

const categoryMapping = {
  app_usage: '⚙️ 앱 기본 정보 및 이용 단가',
  payback: '💰 5% 페이백 시스템',
  reward: '🤝 친구 초대',
  marketplace: '🛠️ 일거리 장터',
  features: '✨ 앱 주요 기능 활용법',
  support: '📞 고객센터 이용',
};

const faqData: FAQItem[] = [
  {
    category: '⚙️ 앱 기본 정보 및 이용 단가',
    questions: [
      {
        Q: '앱에 안내된 스카이차 시간당/반나절/하루 대여 비용은 전국 동일 조건인가요? 배차 가능 지역은 어디인가요?',
        A: '현재 저희 스카이차 배차 서비스는 제주도를 제외한 전국 어디든 이용 가능합니다! 서울·경기·인천은 물론 대전·충청·강원·경상·전라 등 전국으로 24시간 배차해 드리며, 안내된 대여 비용은 지역과 관계없이 전국 동일하게 적용됩니다.',
        tag: '[요금]'
      },
      {
        Q: '\'반나절\'과 \'하루\' 작업의 기준 시간은 각각 몇 시간인가요? 만약 기준 시간을 조금 넘기면 비용은 어떻게 계산되나요?',
        A: '네, 작업 시간 기준은 명확하게 정해져 있어요! 반나절은 4시간, 하루는 8시간을 기준으로 합니다. 기준 시간을 초과하면 장비별로 추가금이 붙습니다 — 1톤~3.5톤은 시간당 15만원, 5톤(45m)은 시간당 20만원이며, 8톤 이상은 협의로 정합니다. 추가금 기준도 전국 동일하게 적용됩니다. 작업 시작 전에 예상 시간을 충분히 고려해주세요!',
        tag: '[기준]'
      },
      {
        Q: '안내된 대여료 외에 유류비, 통행료 등 추가 비용이 발생할 수도 있나요? 부가세는 어떻게 되나요?',
        A: '사장님의 부담을 덜어드리기 위해 유류비와 통행료는 저희가 부담합니다! 별도로 청구되지 않으니 안심하세요. 다만, 안내된 모든 금액에는 부가세(VAT)가 별도로 적용되는 점 참고 부탁드립니다.',
        tag: '[비용]'
      },
      {
        Q: '스카이차 대여 예약은 앱에서 바로 가능한가요? 결제는 어떤 방식으로 진행되나요?',
        A: '스카이차 대여 예약은 앱 하단의 \'고객콜센터(직통전화)\' 버튼을 누르시면 바로 전화 연결이 됩니다! 전화로 편하게 오더를 접수해주시면 되고요, 결제는 작업이 모두 완료된 후 현장에 있는 저희 직원에게 안내받으시는 계좌로 입금해주시면 됩니다. 참 쉽죠?',
        tag: '[예약]'
      }
    ]
  },
  {
    category: '✨ 앱 주요 기능 활용법',
    questions: [
      {
        Q: '\'작업일지\' 기능은 어떤 내용을 기록하고 관리하는 건가요? 사용하면 어떤 점이 좋은가요?',
        A: '\'작업일지\'는 마치 사장님만의 똑똑한 작업 비서 같아요! 캘린더 형태로 언제, 어디서 어떤 작업을 했는지 한눈에 확인할 수 있고요, 해당 작업을 통해 포인트(페이백 또는 친구 초대 보상 등)를 얼마나 받으셨는지도 기록되어 자금 관리에도 도움이 된답니다. 이제 일일이 기억하거나 수기로 적을 필요 없이 앱 하나로 해결하세요!',
        tag: '[기능]'
      },
      {
        Q: '\'포인트 확인하기\'는 어떤 포인트인가요? 어떻게 모으고, 어디에 사용할 수 있나요?',
        A: '\'포인트 확인하기\'에서는 친구 초대 보상으로 적립된 포인트를 확인하실 수 있습니다! 친구 5명이 각각 1건씩 작업을 완료하면, 초대해주신 사장님께 포인트가 차곡차곡 쌓여 총 5만원이 되면! 앱에서 바로 \'출금 신청\'을 하실 수 있어요. 신청하시면 가입 시 등록해주신 은행 계좌로 신속하게 현금을 보내드립니다!',
        tag: '[포인]'
      }
    ]
  },
  {
    category: '📞 고객센터 이용',
    questions: [
      {
        Q: '고객센터(1877-3924)는 언제든지 통화 가능한가요? 운영 시간이 궁금해요!',
        A: '네, 사장님! 저희 고객센터는 24시간 연중무휴, 언제든지 사장님의 연락을 기다리고 있습니다! 한밤중이든 새벽이든, 궁금한 점이나 필요한 사항이 있으시면 주저하지 마시고 바로 전화 주세요!',
        tag: '[문의]'
      },
      {
        Q: '함께 안내된 문자수신전용 번호(010-2497-2433)로는 어떤 내용을 문의할 수 있고, 답변은 보통 얼마나 빨리 받을 수 있나요?',
        A: '그 번호는 사장님께서 작업 현장의 주소나 사진(카메라 촬영 등)을 문자로 보내주시면 저희가 확인 후 신속하게 스카이차를 배차해 드리기 위한 문자 수신 전용 번호입니다. 통화가 어려우실 때 지도 링크나 현장 사진을 보내주시면 더욱 빠르고 정확한 배차가 가능하니 많이 활용해주세요! 확인 후 바로 연락드리겠습니다!',
        tag: '[문자]'
      }
    ]
  },
  {
    category: '💰 5% 페이백 시스템',
    questions: [
      {
        Q: '5% 페이백은 어떻게 받을 수 있나요? 조건이 있나요?',
        A: '네, 사장님! 저희 스카이차 장비를 이용하시고 작업이 성공적으로 완료되면, 이용 금액의 5%를 페이백으로 돌려드립니다! 별도의 복잡한 조건 없이 작업 완료만 확인되면 바로 적용해 드려요. 정말 간단하죠?',
        tag: '[조건]'
      },
      {
        Q: '페이백은 언제, 어떤 방식으로 지급되나요?',
        A: '작업이 완료되면 이용 금액의 5%가 앱에 포인트로 바로 적립됩니다. 앱에서 출금 신청을 하시면 등록해주신 계좌로 현금을 보내드려요. 복잡한 절차 없이 간편하게 받으세요!',
        tag: '[지급]'
      },
      {
        Q: '페이백은 어떻게 현금으로 받나요? 계좌를 미리 등록해야 하나요?',
        A: '페이백은 앱에 포인트로 적립되기 때문에 현장에서 따로 계좌를 알려주실 필요가 없습니다. 앱에서 출금 신청을 하실 때 계좌를 등록하시면 해당 계좌로 현금을 보내드려요. 미리 등록해두시면 더 빠르게 받으실 수 있습니다!',
        tag: '[방법]'
      },
      {
        Q: '만약 작업을 취소하게 되면 페이백은 어떻게 되나요?',
        A: '페이백은 실제 작업이 완료된 건에 대해 드리는 감사 혜택입니다. 따라서 작업이 취소될 경우에는 아쉽지만 페이백 지급이 어려운 점 너른 양해 부탁드립니다. 다음 기회에 더 좋은 서비스로 보답하겠습니다!',
        tag: '[규정]'
      }
    ]
  },
  {
    category: '🤝 친구 초대',
    questions: [
      {
        Q: '친구 초대는 어떻게 하고, 보상은 무엇인가요?',
        A: '앱 내 \'친구 초대\' 메뉴에서 사장님만의 특별한 초대 링크를 친구에게 보내주세요! 그 친구가 링크를 통해 저희 앱에 신규 가입 후 첫 오더를 접수하고 작업을 성공적으로 완료하면, 사장님께 감사의 의미로 현금 1만원이 적립됩니다. 딱 5명의 친구가 이렇게 첫 작업을 완료하면, 총 5만원의 현금 보너스를 바로 받으실 수 있어요!',
        tag: '[방법]'
      },
      {
        Q: '친구 5명이 작업을 완료했는데, 5만원은 어떻게 신청하고 받나요?',
        A: '정말 축하드립니다, 사장님! 친구 5명이 모두 작업을 완료하면, 앱 내 \'친구 초대\' 현황 페이지에서 해당 친구들을 확인하신 후 \'출금 신청\' 버튼만 눌러주세요. 저희가 신청 내용을 빛의 속도로 확인한 후 사장님 통장으로 5만원을 즉시! 보내드립니다. 복잡한 절차 없이 간편하게 보너스를 챙겨가세요!',
        tag: '[신청]'
      },
      {
        Q: '이미 저희 앱을 사용하는 친구를 초대해도 되나요?',
        A: '친구 초대 혜택은 저희 앱의 편리함과 유용함을 아직 경험해보지 못한 새로운 동료 사장님들을 위한 특별 이벤트입니다. 주변의 멋진 신규 동료 사장님들께 저희 서비스를 소개해 주시고 함께 혜택을 누리세요!',
        tag: '[조건]'
      },
      {
        Q: '친구 초대는 5명까지만 가능한가요? 아니면 계속할 수 있나요?',
        A: '사장님의 빛나는 인맥은 무제한입니다! 5명을 초대해 5만원 보너스를 받으신 후에도, 계속해서 새로운 친구들을 초대하고 5명 단위로 5만원씩, 무한 반복으로 보너스를 받으실 수 있습니다! 사장님의 인맥이 곧 현금이 되는 마법을 경험해보세요!',
        tag: '[규정]'
      }
    ]
  },
  {
    category: '🛠️ 일거리 장터',
    questions: [
      {
        Q: '일거리 장터는 어떤 곳이고, 어떻게 이용하나요?',
        A: '일거리 장터는 사장님들끼리 서로 귀한 일감 정보를 나누고, 갑자기 바빠서 처리 못 하는 일감을 다른 사장님께 넘겨주거나 도움을 받을 수 있는 따뜻한 커뮤니티 공간입니다. 앱 회원이라면 누구나 자유롭게 이용하며 유용한 정보를 공유하고 서로 윈윈(win-win)할 수 있어요!',
        tag: '[안내]'
      },
      {
        Q: '제가 너무 멀어서 못 가는 일감이 있는데, 일거리 장터에 어떻게 올리나요?',
        A: '정말 간단합니다! 일거리 장터 메뉴에서 \'글쓰기\' 버튼을 누르시고, 일감의 종류(예: 스카이차 몇 톤), 작업 내용, 정확한 지역, 필요한 장비 사양, 그리고 연락처 등의 정보를 상세하게 적어 올려주시면 됩니다. 필요한 정보를 꼼꼼히 적을수록 더 빨리 적합한 사장님과 연결될 수 있겠죠?',
        tag: '[방법]'
      },
      {
        Q: '일거리 장터를 통해 거래할 때 주의할 점이 있나요?',
        A: '일거리 장터는 사장님들 간의 자율적인 정보 공유 및 거래를 위한 소중한 공간입니다. 따라서 거래 조건, 대금 지급 방법, 작업 범위 등 중요한 사항은 반드시 당사자 간에 명확하게 협의하시고 신중하게 결정하시는 것이 좋습니다. 저희는 사장님들의 원활한 소통을 적극 지원하지만, 거래 과정이나 결과에 직접 관여하지는 않는 점 참고 부탁드립니다.',
        tag: '[주의]'
      },
      {
        Q: '일거리 장터 이용에 수수료가 있나요?',
        A: '전혀 없습니다! 일거리 장터는 사장님들의 사업 번창과 원활한 정보 교류를 위해 제공되는 완전 무료 서비스입니다. 정보 공유와 일감 교환에 어떠한 수수료도 발생하지 않으니, 부담 없이 마음껏 활용하시고 사업에 도움 되시길 바랍니다!',
        tag: '[정보]'
      }
    ]
  }
];

export default function SupportPage() {
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});
  const [activeCategory, setActiveCategory] = useState('app_usage');
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
    setShowCategoryModal(false);
  };

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const filteredFaqData = faqData.filter(
    section => section.category === categoryMapping[activeCategory as keyof typeof categoryMapping]
  );

  // AEO: 전체 FAQ를 FAQPage 구조화 데이터로 (검색 답변박스·리치결과)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap((section) =>
      section.questions.map((q) => ({
        '@type': 'Question',
        name: q.Q,
        acceptedAnswer: { '@type': 'Answer', text: q.A },
      }))
    ),
  };

  return (
    <div className="bg-gray-50 text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="pt-16">
        <div className="bg-white shadow-sm mb-6">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold py-8 text-black">자주 하는 질문</h1>
            
            {/* 모바일 카테고리 버튼 */}
            <div className="md:hidden mb-6">
              <button
                onClick={openCategoryModal}
                className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-lg shadow-sm text-left text-black flex justify-between items-center"
              >
                <span>{headerMenus.find(menu => menu.key === activeCategory)?.label}</span>
                <span className="text-gray-400">▼</span>
              </button>
            </div>
            
            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
              {headerMenus.map((menu) => (
                <button
                  key={menu.key}
                  onClick={() => handleCategoryClick(menu.key)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                    activeCategory === menu.key
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-8">
          {filteredFaqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <div className="space-y-4">
                {section.questions.map((item, questionIndex) => {
                  const isOpen = openQuestions[`${sectionIndex}-${questionIndex}`];
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors text-black"
                      >
                        <div className="flex justify-between items-start">
                          <div className="pr-8">
                            <p className="text-lg font-medium text-black">
                              {item.Q}
                              <span className="ml-2 text-blue-500 text-sm">{item.tag}</span>
                            </p>
                          </div>
                          <span className={`text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-800 border-t">
                          <p className="pt-4">{item.A}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일 카테고리 모달 */}
      <AnimatePresence>
        {showCategoryModal && (
          <>
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCategoryModal(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            
            {/* 모달 컨텐츠 */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl z-50 md:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-lg font-bold text-black mb-4 text-center">분류</h3>
                
                <div className="space-y-2">
                  {headerMenus.map((menu) => (
                    <button
                      key={menu.key}
                      onClick={() => handleCategoryClick(menu.key)}
                      className={`w-full py-3 px-4 text-left rounded-lg transition-colors ${
                        activeCategory === menu.key
                          ? 'bg-blue-500 text-white'
                          : 'text-black hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{menu.label}</span>
                        {activeCategory === menu.key && (
                          <span className="text-white"><Icon name="Check" size={18} /></span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
