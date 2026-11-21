@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (echo Debes instalar Node.js 22.13 o superior. & pause & exit /b 1)
start "" http://127.0.0.1:3003
set PORT=3003
node server.js
pause
