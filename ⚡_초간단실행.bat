@echo off
chcp 65001 > nul
title 초간단 실행 - 5프로돌려주는스카이차

REM 기존 서버 모두 종료
taskkill /F /IM node.exe >nul 2>&1

cls
echo.
echo ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
echo     🚀 초간단 로컬 서버 실행
echo ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
echo.
echo 💡 서버가 시작되면 자동으로 브라우저가 열립니다
echo 📱 주소: http://localhost:3000 (또는 사용 가능한 포트)
echo.

REM package.json의 dev:open 스크립트 사용 (브라우저 자동 열기)
npm run dev:open

pause 