@echo off
chcp 65001 > nul
title 5프로돌려드리는스카이차 - 로컬 개발 서버

echo.
echo ===============================================
echo   🚀 5프로돌려드리는스카이차 로컬 서버 실행
echo ===============================================
echo.
echo 📋 준비 중...

REM Node.js 설치 확인
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되지 않았습니다.
    echo 💡 https://nodejs.org 에서 다운로드하세요.
    pause
    exit /b 1
)

echo ✅ Node.js 확인 완료
echo.

REM 의존성 설치 확인
if not exist "node_modules" (
    echo 📦 의존성 설치 중...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ 의존성 설치 실패
        pause
        exit /b 1
    )
    echo ✅ 의존성 설치 완료
    echo.
)

echo 🔥 개발 서버 시작 중...
echo.
echo ===============================================
echo   🌐 브라우저에서 접속하세요:
echo   👉 http://localhost:3000
echo.
echo   💡 파일 수정하면 자동으로 새로고침됩니다!
echo   ⛔ 종료하려면 Ctrl+C 를 누르세요
echo ===============================================
echo.

npm run dev

echo.
echo 서버가 종료되었습니다.
pause 