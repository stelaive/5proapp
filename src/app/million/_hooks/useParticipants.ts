import { useState, useEffect } from 'react';
import { INITIAL_PARTICIPANTS } from '../_constants/data';

export const useParticipants = () => {
  const [currentParticipants, setCurrentParticipants] = useState(INITIAL_PARTICIPANTS);

  // 실시간 참여자 수 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParticipants(prev => {
        const increase = Math.floor(Math.random() * 2); // 0 또는 1 증가
        return Math.min(prev + increase, 500); // 최대 500명까지만
      });
    }, 30000); // 30초마다 증가

    return () => clearInterval(interval);
  }, []);

  const getWinnerCount = (participants: number) => {
    if (participants >= 300 && participants <= 500) return 1;
    if (participants >= 501 && participants <= 1000) return 2;
    if (participants >= 1001 && participants <= 1500) return 3;
    if (participants >= 1501 && participants <= 2000) return 4;
    return Math.max(1, Math.floor(participants / 500));
  };

  const currentWinners = getWinnerCount(currentParticipants);

  return { currentParticipants, currentWinners };
};

