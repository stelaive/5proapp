@echo off
chcp 65001 > nul
title 5프로돌려드리는스카이차 - 자동 실행

echo.
echo ===============================================
echo   🌐 브라우저 자동 열기 + 로컬 서버 실행
echo ===============================================
echo.

REM 개발 서버 시작 (백그라운드)
start /B npm run dev

echo 📋 서버 시작 중... (3초 대기)
timeout /t 3 /nobreak > nul

echo 🌐 브라우저에서 자동으로 열기...
start http://localhost:3000

echo.
echo ===============================================
echo   ✅ 완료!
echo   📱 브라우저에서 http://localhost:3000 확인
echo   💡 파일 수정 시 자동 새로고침
echo   ⛔ 이 창을 닫으면 서버가 종료됩니다
echo ===============================================
echo.

REM 서버 프로세스 대기
npm run dev 