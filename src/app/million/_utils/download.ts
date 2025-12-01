export const handleAppDownload = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
    // iOS 기기 - 앱스토어로 이동
    window.open('https://apps.apple.com/kr/app/5-%EB%8F%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%B0%A8/id6747275589', '_blank');
  } else if (userAgent.includes('android')) {
    // Android 기기 - 플레이스토어로 이동
    window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
  } else {
    // 데스크톱이나 기타 기기 - 안드로이드 스토어로 기본 이동
    window.open('https://play.google.com/store/apps/details?id=com.steve.kim.sadariapp&pcampaignid=web_share', '_blank');
  }
};

