import { useState, useEffect } from 'react';

export const useCountdown = () => {
  // 다음 추첨일(매달 말일 19:00 KST 기준)을 계산
  const getNextDrawDate = () => {
    const now = new Date();
    // 현지 시간 기준 말일 19:00으로 설정
    const drawThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 19, 0, 0);
    
    // 만약 현재 시간이 이번 달 말일 19:00를 지났다면 다음 달 말일로 설정
    if (now.getTime() > drawThisMonth.getTime()) {
      return new Date(now.getFullYear(), now.getMonth() + 2, 0, 19, 0, 0);
    }
    return drawThisMonth;
  };

  const [targetDate, setTargetDate] = useState<Date>(getNextDrawDate());
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // 타이머 계산 함수
  const calculateTimeLeft = (target: Date) => {
    const now = new Date();
    const difference = target.getTime() - now.getTime();
    
    if (difference <= 0) {
      setIsEventStarted(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds)
    };
  };

  useEffect(() => {
    // 초기 시간 설정
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));

      // 이벤트가 지나면 다음 달 말일로 자동 갱신 (이벤트 종료 1시간 후)
      const now = new Date();
      if (now.getTime() > targetDate.getTime() + 60 * 60 * 1000) {
        const next = getNextDrawDate();
        if (next.getTime() !== targetDate.getTime()) {
          setTargetDate(next);
          setIsEventStarted(false);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatKoreanDate = (date: Date) => `${date.getMonth() + 1}월 ${date.getDate()}일`;

  return { timeLeft, isEventStarted, targetDate, formatKoreanDate };
};

