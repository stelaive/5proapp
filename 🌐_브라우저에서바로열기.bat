@echo off
chcp 65001 > nul
title 5프로돌려드리는스카이차 - 스마트 자동 실행

echo.
echo ===============================================
echo   🌐 스마트 브라우저 자동 열기 + 로컬 서버
echo ===============================================
echo.

REM 기존 Node.js 프로세스 정리
echo 🧹 기존 서버 정리 중...
taskkill /F /IM node.exe >nul 2>&1

echo 📋 서버 준비 중...
timeout /t 2 /nobreak > nul

REM 서버를 임시 파일에 로그 출력하며 시작
echo 🚀 서버 시작 중...
start /B cmd /c "npm run dev > temp_server.log 2>&1"

REM 서버가 준비될 때까지 대기 및 포트 감지
echo 📡 서버 준비 대기 중...
set SERVER_URL=http://localhost:3000
set /a WAIT_COUNT=0

:WAIT_LOOP
timeout /t 1 /nobreak > nul
set /a WAIT_COUNT+=1

REM 로그 파일에서 실제 포트 찾기
if exist temp_server.log (
    for /f "tokens=2 delims= " %%i in ('findstr "Local:" temp_server.log 2^>nul') do (
        set SERVER_URL=%%i
        goto FOUND_PORT
    )
)

REM 최대 15초 대기
if %WAIT_COUNT% LSS 15 goto WAIT_LOOP

:FOUND_PORT
REM 임시 파일 정리
if exist temp_server.log del temp_server.log

echo.
echo ===============================================
echo   ✅ 서버 준비 완료!
echo   🌐 브라우저에서 자동으로 열기...
echo   📱 URL: %SERVER_URL%
echo ===============================================
echo.

REM 브라우저에서 실제 서버 URL 열기
start %SERVER_URL%

echo.
echo ===============================================
echo   🎉 모든 준비 완료!
echo   📱 브라우저: %SERVER_URL%
echo   💡 파일 수정 시 자동 새로고침
echo   ⛔ 이 창을 닫으면 서버가 종료됩니다
echo ===============================================
echo.
echo 서버 상태를 모니터링합니다...
echo Ctrl+C로 종료하세요.
echo.

REM 메인 서버 프로세스 실행
npm run dev 