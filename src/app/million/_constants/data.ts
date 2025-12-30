export const INITIAL_PARTICIPANTS = 405;

export const WINNER_HISTORY = [
  {
    round: 1,
    winner: '108번 박OO님',
    link: 'https://www.youtube.com/live/yuFJ_K5u2VE?si=M5fsSfsJJSrZWNPi',
    job: null,
    isNew: false,
    style: {
        gradient: "from-[#42d9de]/20 to-[#3bc4c9]/20",
        border: "border-[#42d9de]/50",
        hoverBorder: "rgba(66, 217, 222, 0.8)",
        badge: "🥇"
    }
  },
  {
    round: 2,
    winner: '226번 김OO님',
    link: 'https://youtu.be/B5AzSMFVfp8',
    job: null,
    isNew: false,
    style: {
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-400/50",
        hoverBorder: "rgba(96, 165, 250, 0.8)",
        badge: "🥈"
    }
  },
  {
    round: 3,
    winner: '46번 김OO님',
    link: 'https://www.youtube.com/live/d5XzGUZBwos?si=6WgOcyzWCIkzQvT8',
    job: '소방공사',
    isNew: false,
    style: {
        gradient: "from-red-500/20 to-pink-500/20",
        border: "border-red-400/50",
        hoverBorder: "rgba(248, 113, 113, 0.8)",
        badge: "🥉"
    }
  },
  {
    round: 4,
    winner: '허O님',
    link: 'https://www.youtube.com/live/Hqqp5nOQVy4?si=N7leoeZg6jKHNQ_d',
    job: '페인트 시공',
    isNew: true,
    style: {
        gradient: "from-purple-500/20 to-indigo-500/20",
        border: "border-purple-400/50",
        hoverBorder: "rgba(168, 85, 247, 0.8)",
        badge: "👑"
    }
  }
];

export const SLIDES_DATA = [
  {
    image: "/images/app-main-wallet-screen.png",
    title: "1. 앱 홈",
    description: "앱을 설치하고 회원가입",
    alt: "앱 홈 화면"
  },
  {
    image: "/images/app-direct-call-indicator.png",
    title: "2. 오더 넘기기", 
    description: "스카이차 작업 1건 완료",
    alt: "오더 넘기기"
  },
  {
    image: "/images/app-order-check-screen.png",
    title: "3. 추첨표 확인",
    description: "자동으로 추첨 대상자 등록",
    alt: "추첨표"
  },
  {
    image: "/images/app-winner-confirmation.png",
    title: "4. 당첨 알림",
    description: "매월 말일 당첨자 발표",
    alt: "당첨 알림"
  }
];

export const FAQ_DATA = [
  {
    question: "'100만원 이벤트'에는 어떻게 참여할 수 있나요?",
    answer: "저희 스카이차 앱을 통해 작업을 완료하시면, 결제금액의 5% 포인트/현금 페이백이 즉시 지급됩니다. 동시에 '100만원 이벤트' 추첨에 자동으로 1회 응모됩니다. 별도의 신청 절차는 필요 없습니다."
  },
  {
    question: "한 달에 여러 건의 작업을 완료하면 추첨 기회가 여러 번 생기나요?",
    answer: "아니요, 한 달에 몇 건의 작업을 완료하시든 추첨 기회는 계정당 1회만 부여됩니다. 매달 꾸준히 참여해주시는 모든 사장님들께 공평한 기회를 드리기 위함입니다."
  },
  {
    question: "이벤트가 매달 열리는 건가요? 혹시 이벤트가 열리지 않을 수도 있나요?",
    answer: "네, 매달 진행되는 이벤트입니다. 다만, 이벤트의 신뢰도와 공정성을 위해 최소 참여 인원 300명 이상이 모였을 때 추첨이 시작됩니다. 참여 현황은 앱 내에서 투명하게 확인하실 수 있습니다."
  },
  {
    question: "추첨은 언제, 어떤 방식으로 진행되나요?",
    answer: "추첨은 매달 말일 오후 7시에 유튜브 채널 생방송으로 진행됩니다. 실제 로또 추첨기를 사용하여 모든 분들이 보시는 앞에서 사장님의 회원번호를 공정하게 추첨합니다."
  },
  {
    question: "당첨자 수는 왜 매번 달라지나요?",
    answer: "더 많은 사장님들께 혜택을 드리기 위함입니다. 참여 인원이 많아질수록 당첨자 수도 함께 늘어나는 방식을 채택했습니다. 300명 ~ 500명 참여 시: 1명 추첨, 501명 ~ 1000명 참여 시: 2명 추첨, 1001명 ~ 1500명 참여 시: 3명 추첨 이렇게 참여자가 늘어도 당첨 확률은 약 1/500 수준으로 최대한 유지됩니다."
  },
  {
    question: "100만원에 당첨되면 세금 처리는 어떻게 하나요?",
    answer: "저희는 당첨금 100만원 전액을 그대로 지급해 드립니다. 다만, 해당 당첨금은 세법상 '기타소득'으로 분류되므로, 세금 신고 및 납부 의무는 당첨되신 사장님 본인에게 있습니다. 다음 해 5월, 종합소득세 신고 기간에 다른 소득과 합산하여 직접 신고하셔야 합니다. (기타소득세 22%)"
  },
  {
    question: "당첨금은 언제, 어떻게 지급되나요?",
    answer: "매월 말일 추첨 생방송 직후, 당첨되신 사장님께 개별적으로 연락을 드립니다. 간단한 본인 확인 절차를 거친 후 3~5 영업일 이내에 등록된 계좌로 당첨금 100만원을 입금해 드립니다."
  },
  {
    question: "스카이차 예약은 언제 해야 하나요?",
    answer: "작업 유형에 따라 예약 시점이 다릅니다. 반나절(4시간) 또는 하루(8시간) 작업은 전날 전화 예약이 필수입니다. 1~2시간 단기 작업은 작업 1~2시간 전 전화 예약을 권장합니다. 모든 배차 확정은 전화 상담으로 진행됩니다."
  },
  {
    question: "추가 비용은 언제 발생하나요?",
    answer: "기본 작업 시간을 초과할 경우 1시간당 5만원의 추가 비용이 발생합니다. 지역별 추가비는 없으며, 현장 여건(작업 높이, 진입/주차 여건, 야간/주말 작업 등)에 따라 추가 비용이 발생할 수 있습니다. 정확한 비용은 전화 상담 시 안내해 드립니다."
  },
  {
    question: "5% 페이백은 언제 받을 수 있고, 제외되는 경우가 있나요?",
    answer: "결제금액의 5% 포인트/현금 페이백은 작업 완료 후 즉시 적립됩니다. 다만, 취소된 작업, 부분 취소된 작업, 현장에서 발생한 추가비용은 페이백 대상에서 제외됩니다."
  }
];

