#!/bin/bash

# 색상 설정
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "==============================================="
echo "  🚀 5프로돌려주는스카이차 로컬 서버 실행"
echo "==============================================="
echo ""
echo "📋 준비 중..."

# Node.js 설치 확인
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js가 설치되지 않았습니다.${NC}"
    echo -e "${YELLOW}💡 https://nodejs.org 에서 다운로드하세요.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js 확인 완료${NC}"
echo ""

# 의존성 설치 확인
if [ ! -d "node_modules" ]; then
    echo "📦 의존성 설치 중..."
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ 의존성 설치 실패${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ 의존성 설치 완료${NC}"
    echo ""
fi

echo "🔥 개발 서버 시작 중..."
echo ""
echo "==============================================="
echo -e "  🌐 브라우저에서 접속하세요:"
echo -e "  👉 ${BLUE}http://localhost:3000${NC}"
echo ""
echo "  💡 파일 수정하면 자동으로 새로고침됩니다!"
echo "  ⛔ 종료하려면 Ctrl+C 를 누르세요"
echo "==============================================="
echo ""

npm run dev

echo ""
echo "서버가 종료되었습니다."
read -p "Press any key to continue..." 